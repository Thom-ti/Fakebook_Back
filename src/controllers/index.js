const { register, login, getMe } = require("./auth-controller");
const {
  getAllPosts,
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
  getAllPosts,
  createPost,
  updatePost,
  deletePost,
  commentPost,
  likePost,
  unlikePost,
};
