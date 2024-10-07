const createError = require("../utils/createError");
const { prisma, path, fs } = require("../models");
const cloudinary = require("../config/cloudinary");

exports.getAllPosts = async (req, res, next) => {
  try {
    const result = await prisma.post.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        user: {
          select: { firstName: true, lastName: true, profileImage: true },
        },
      },
    });
    res.json({ posts: result });
  } catch (err) {
    next(err);
  }
};

exports.createPost = async (req, res, next) => {
  try {
    const { message } = req.body;
    const haveFile = !!req.file;
    let uploadResult = {};

    if (haveFile) {
      uploadResult = await cloudinary.uploader.upload(req.file.path, {
        overwrite: true,
        public_id: path.parse(req.file.path).name,
      });
    }
    fs.unlink(req.file.path);
    const data = {
      message,
      image: uploadResult.secure_url || "",
      userId: req.user.id,
    };
    const result = await prisma.post.create({ data });

    res.json(result);
  } catch (err) {
    next(err);
  }
};

exports.updatePost = async (req, res, next) => {
  try {
    const { id } = req.params;

    res.json("Update Post Controlller...");
  } catch (err) {
    next(err);
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    const { id } = req.params;

    res.json("Delete Post Controlller...");
  } catch (err) {
    next(err);
  }
};
