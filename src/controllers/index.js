const { register, login, getMe } = require("./auth-controller");
const {
  getPost,
  createPost,
  updatePost,
  deletePost,
} = require("./post-controller");
const { commentPost } = require("./comment-controller");
const { likePost, unlikePost } = require("./like-controller");

module.exports = {
  register,
  login,
  getMe,
  getPost,
  createPost,
  updatePost,
  deletePost,
  commentPost,
  likePost,
  unlikePost,
};
