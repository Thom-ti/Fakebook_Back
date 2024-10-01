const { express } = require("../models");
const router = express.Router();
const { likePost, unlikePost } = require("../controllers");

router.post("/", likePost);
router.delete("/:id", unlikePost);

module.exports = router;
