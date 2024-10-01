const { express } = require("../models");
const router = express.Router();
const {
  getPost,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers");

router.get("/", getPost);
router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

module.exports = router;
