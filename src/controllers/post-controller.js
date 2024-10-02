const createError = require("../utils/createError");

exports.getPost = async (req, res, next) => {
  try {
    res.json("Get Post Controlller...");
  } catch (err) {
    next(err);
  }
};

exports.createPost = async (req, res, next) => {
  try {
    res.json("Create Post Controlller...");
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
