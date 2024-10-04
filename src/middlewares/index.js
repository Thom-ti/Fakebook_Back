const errorMiddleware = require("./error-middleware");
const notFoundHandler = require("./not-found");
const authenticate = require("./authenticate");

module.exports = {
  errorMiddleware,
  notFoundHandler,
  authenticate,
};
