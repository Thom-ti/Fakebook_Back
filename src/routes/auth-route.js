const { express } = require("../models");
const router = express.Router();
const { register, login, getMe } = require("../controllers");
const { authenticate } = require("../middlewares");

router.post("/register", register);
router.post("/login", login);
router.get("/me", authenticate, getMe);

module.exports = router;
