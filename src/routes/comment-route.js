const { express } = require("../models");
const router = express.Router();
const { commentPost } = require("../controllers");

router.post("/", commentPost);

module.exports = router;
