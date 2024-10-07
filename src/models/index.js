const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cloudinary = require("cloudinary").v2;
const fs = require("fs/promises");

module.exports = {
  prisma,
  express,
  app,
  cors,
  morgan,
  bcrypt,
  jwt,
  multer,
  path,
  cloudinary,
  fs,
};
