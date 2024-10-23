const { contactAPIPostController } = require("../controller/api/contact");
const createProjectAPIController = require("../controller/api/create");
const {
  findAllProjectControllerById,
} = require("../controller/api/findSingle");
const { loginAPIPostController } = require("../controller/api/login");
const {
  loginGetController,
  loginPostController,
} = require("../controller/auth/login");
const { signupPostController } = require("../controller/auth/signup");
const { aboutPageGetController } = require("../controller/dashbord/about");
const {
  addProjectPageGetController,
} = require("../controller/dashbord/add-product");
const { contactPageGetController } = require("../controller/dashbord/contact");
const {
  dashboardPageGetController,
} = require("../controller/dashbord/dashboard");
const {
  productsPageGetController,
} = require("../controller/dashbord/products");
const { settingPageGetController } = require("../controller/dashbord/setting");
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

// api routes
router.route("/v1/api/project").get(findAllProjectController);
router.route("/v1/api/project/:id").get(findAllProjectControllerById);
router.route("/v1/api/contact").post(contactAPIPostController);

// login with api routes
router.route("/v1/api/login").post(loginAPIPostController);
router.route("/v1/api/project").post(createProjectAPIController);
router.route("/logout").get();

// dashboard routes
router.route("/dashboard").get(dashboardPageGetController);
router.route("/projects").get(productsPageGetController);
router.route("/add-project").get(addProjectPageGetController);
router.route("/about").get(aboutPageGetController);
router.route("/contact").get(contactPageGetController);
router.route("/setting").get(settingPageGetController);

module.exports = router;
