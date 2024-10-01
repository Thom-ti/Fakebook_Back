const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  prisma,
  express,
  app,
  cors,
  morgan,
  bcrypt,
  jwt,
};
