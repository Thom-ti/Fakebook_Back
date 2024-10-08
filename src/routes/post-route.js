const { express } = require("../models");
const router = express.Router();
const { upload } = require("../middlewares");
const {
  getAllPosts,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers");

router.get("/", getAllPosts);
router.post("/", upload.single("image"), createPost);
router.put("/:id", upload.single("image"), updatePost);
router.delete("/:id", deletePost);

module.exports = router;
