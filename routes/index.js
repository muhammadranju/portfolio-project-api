const {
  loginGetController,
  loginPostController,
} = require("../controller/auth/login");
const { signupPostController } = require("../controller/auth/signup");
const homeController = require("../controller/home/home");
const createProjectController = require("../controller/project/create");
const findProjectController = require("../controller/project/find");
const findAllProjectController = require("../controller/project/findAll");
const findSingleProjectController = require("../controller/project/findSingle");
const updateProjectController = require("../controller/project/update");
const authMiddleware = require("../middleware/authMiddleware");
const isLoginMiddleware = require("../middleware/isLogin.middleware");

const router = require("express").Router();

router.route("/").get(authMiddleware, homeController);

router.route("/login").get(isLoginMiddleware, loginGetController);
router.route("/login").post(loginPostController);

router.route("/signup").post(signupPostController);

router
  .route("/project/:productId")
  .get(authMiddleware, findSingleProjectController);

router.route("/update-project").post(authMiddleware, updateProjectController);

router.route("/project").get(authMiddleware, findProjectController);
router.route("/project").post(authMiddleware, createProjectController);

router.route("/project").post(authMiddleware, createProjectController);

router.route("/v1/api/project").get(findAllProjectController);
module.exports = router;
