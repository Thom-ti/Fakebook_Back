const createError = require("../utils/createError");

exports.commentPost = async (req,res,next) => {
  try {
    res.json("Comment Post");
  } catch (err) {
    next(err);
  }
}