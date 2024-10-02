const createError = require("../utils/createError");

exports.likePost = async (req, res, next) => {
  try {
    res.json("Like Post Controlller...");
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
