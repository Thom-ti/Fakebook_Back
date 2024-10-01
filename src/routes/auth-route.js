const { express } = require("../models");
const router = express.Router();
const { register, login, getMe } = require("../controllers");

router.post("/register", register);
router.post("/login", login);
router.get("/me", getMe);

module.exports = router;
