const { prisma } = require("../models");
const createError = require("../utils/createError");

exports.commentPost = async (req, res, next) => {
  try {
    const { message, postId } = req.body;
    const userId = req.user.id;
    const postData = await prisma.post.findUnique({
      where: { id: Number(postId) },
    });
    if (!postData) {
      return createError(401, "This post is not exist");
    }
    const result = await prisma.comment.create({
      data: { message, postId: Number(postId), userId },
    });

    res.json(result);
  } catch (err) {
    next(err);
  }
};
