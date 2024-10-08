const { prisma } = require("../models");
const createError = require("../utils/createError");

exports.commentPost = async (req, res, next) => {
  try {
    const { message, postId } = req.body;
    const userId = req.user.id;
    console.log(req.body)
    const postData = await prisma.post.findFirst({
      where: { id: Number(postId) },
    });
    if (!postData) {
      return createError(401, "This post is not exist");
    }
    const result = await prisma.comment.create({
      data: { message, postId, userId },
    });

    res.json(result);
  } catch (err) {
    next(err);
  }
};
