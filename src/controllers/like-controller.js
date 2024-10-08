const { prisma } = require("../models");
const createError = require("../utils/createError");

exports.likePost = async (req, res, next) => {
  try {
    const { postId } = req.body;
    const postData = await prisma.post.findUnique({
      where: { id: Number(postId) },
    });
    if (!postData) {
      return createError(401, "This post is not exist");
    }
    const result = await prisma.like.create({
      data: {
        postId,
        userId: req.user.id,
      },
    });
    res.json(result);
  } catch (err) {
    next(err);
  }
};

exports.unlikePost = async (req, res, next) => {
  try {
    const { id } = req.params;

    res.json("Unlike Post Controlller...");
  } catch (err) {
    next(err);
  }
};
