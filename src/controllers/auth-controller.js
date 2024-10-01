const createError = require("../utils/createError");
const { prisma } = require("../models");

exports.register = async (req, res, next) => {
  try {
    res.json("Register");
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    res.json("Login");
  } catch (err) {
    next(err);
  }
};

exports.getMe = async (req, res, next) => {
  try {
    const result = await prisma.user.findMany();

    res.json({ result });
  } catch (err) {
    next(err);
  }
};
