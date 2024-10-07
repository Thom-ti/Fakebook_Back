const errorMiddleware = require("./error-middleware");
const notFoundHandler = require("./not-found");
const authenticate = require("./authenticate");
const upload = require("./upload");

module.exports = {
  errorMiddleware,
  notFoundHandler,
  authenticate,
  upload,
};
