const createError = require("../utils/createError");

exports.commentPost = async (req, res, next) => {
  try {
    res.json("Comment Post Controlller...");
  } catch (err) {
    next(err);
  }
};
