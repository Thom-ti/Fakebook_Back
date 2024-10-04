const createError = require("../utils/createError");
const { prisma } = require("../models");

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
    const data = { message, userId: req.user.id };
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
