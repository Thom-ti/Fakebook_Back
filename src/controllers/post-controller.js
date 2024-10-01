const createError = require("../utils/createError");

exports.getPost = async (req, res, next) => {
  try {
    res.json("Get Post");
  } catch (err) {
    next(err);
  }
};

exports.createPost = async (req, res, next) => {
  try {
    res.json("Create Post");
  } catch (err) {
    next(err);
  }
};

exports.updatePost = async (req, res, next) => {
  try {
    const { id } = req.params;

    res.json("Update Post");
  } catch (err) {
    next(err);
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    const { id } = req.params;

    res.json("Delete Post");
  } catch (err) {
    next(err);
  }
};
