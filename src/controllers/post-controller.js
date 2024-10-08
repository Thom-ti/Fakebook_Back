const createError = require("../utils/createError");
const getPublicId = require("../utils/getPublicId");
const { prisma, path, fs } = require("../models");
const cloudinary = require("../config/cloudinary");

exports.getAllPosts = async (req, res, next) => {
  try {
    const result = await prisma.post.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        user: {
          select: { firstName: true, lastName: true, profileImage: true },
        },
      },
    });
    res.json({ posts: result });
  } catch (err) {
    next(err);
  }
};

exports.createPost = async (req, res, next) => {
  try {
    const { message } = req.body;
    const haveFile = !!req.file;
    let uploadResult = {};

    if (haveFile) {
      uploadResult = await cloudinary.uploader.upload(req.file.path, {
        overwrite: true,
        public_id: path.parse(req.file.path).name,
      });
      fs.unlink(req.file.path);
    }
    const data = {
      message,
      image: uploadResult.secure_url || "",
      userId: req.user.id,
    };
    const result = await prisma.post.create({ data });

    res.json(result);
  } catch (err) {
    next(err);
  }
};

exports.updatePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { message } = req.body;
    const postData = await prisma.post.findUnique({
      where: { id: Number(id) },
    });
    if (!postData || postData.userId !== req.user.id) {
      return createError(401, "Cannot update this post");
    }

    const haveFile = !!req.file;
    let uploadResult = {};
    if (haveFile) {
      uploadResult = await cloudinary.uploader.upload(req.file.path, {
        public_id: path.parse(req.file.path).name,
      });
      fs.unlink(req.file.path);
      if (postData.image) {
        cloudinary.uploader.destroy(getPublicId(postData.image)); // ไม่ต้องมี await ก็ได้ สำหรับ destroy
      }
    }
    const data = haveFile
      ? { message, image: uploadResult.secure_url, userId: req.user.id }
      : { message, userId: req.user.id };

    const result = await prisma.post.update({
      where: { id: Number(id) },
      data: data,
    });

    res.json(result);
  } catch (err) {
    next(err);
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const postData = await prisma.post.findUnique({
      where: { id: Number(id) },
    });
    if (postData.userId !== req.user.id) {
      return createError(401, "Cannot delete this post");
    }
    const result = await prisma.post.delete({ where: { id: Number(id) } });

    res.json(result);
  } catch (err) {
    next(err);
  }
};
