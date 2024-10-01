const prisma = require("../models/index");
const bcrypt = require("bcryptjs");

const hashedPassword = bcrypt.hashSync("123456", 10); // hash no async

const userData = [
  {
    firstName: "Andy",
    lastName: "Codecamp",
    password: hashedPassword,
    email: "andy@ggg.mail",
  },
  {
    firstName: "Bobby",
    lastName: "Codecamp",
    password: hashedPassword,
    email: "bobby@ggg.mail",
  },
  {
    firstName: "Candy",
    lastName: "Codecamp",
    password: hashedPassword,
    mobile: "1111111111",
  },
  {
    firstName: "Danny",
    lastName: "Codecamp",
    password: hashedPassword,
    mobile: "2222222222",
  },
];

async function run() {
  await prisma.user.createMany({
    data: userData,
  });
}

console.log("DB seed...");
run();
