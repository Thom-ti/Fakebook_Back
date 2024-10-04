const createError = require("../utils/createError");
const { prisma, bcrypt, jwt } = require("../models");

function checkEmailorPhone(identity) {
  let identityKey = "";

  if (/^[0-9]{10,15}$/.test(identity)) {
    identityKey = "mobile";
  }
  if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(identity)) {
    identityKey = "email";
  }
  if (!identityKey) {
    createError(400, "only email or phone number");
  }

  return identityKey;
}

exports.register = async (req, res, next) => {
  try {
    const { identity, firstName, lastName, password, confirmPassword } =
      req.body;
    if (!(identity && firstName && lastName && password && confirmPassword)) {
      return createError(400, "Please fill all data");
    }

    if (password !== confirmPassword) {
      return createError(400, "Check confirm password");
    }

    let identityKey = checkEmailorPhone(identity);

    const findIdentity = await prisma.user.findUnique({
      where: { [identityKey]: identity },
    });

    if (findIdentity) {
      return createError(409, `Already have this ${identityKey}`);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      [identityKey]: identity,
      password: hashedPassword,
      firstName,
      lastName,
    };

    const result = await prisma.user.create({
      data: newUser,
    });

    res.json({ message: "Register Successfully", result });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { identity, password } = req.body;

    if (!(identity && password)) {
      return createError(400, "Please fill all data");
    }

    let identityKey = checkEmailorPhone(identity);

    const findUser = await prisma.user.findUnique({
      where: { [identityKey]: identity },
    });

    if (!findUser) {
      return createError(401, "User not found");
    }

    let passwordCorrect = await bcrypt.compare(password, findUser.password);

    if (!passwordCorrect) {
      return createError(401, "Wrong password");
    }

    const payload = {
      id: findUser.id,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    const { password: pw, createdAt, updatedAt, ...userData } = findUser;

    res.json({ user: userData, token: token });
  } catch (err) {
    next(err);
  }
};

exports.getMe = async (req, res, next) => {
  try {
    const result = await prisma.user.findMany();

    res.json({ result });
  } catch (err) {
    next(err);
  }
};
