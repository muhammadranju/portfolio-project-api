const {
  createProjectController,
  findAllProjectController,
  findSingleProjectController,
  updateProjectController,
  findProjectController,
} = require("../controller/api/projects");
const express = require("express");
const router = express.Router();

router.route("/projects").post(createProjectController);
router.route("/projects").get(findProjectController);
router.route("/projects/search").get(findAllProjectController);
router.route("/projects/:productId").get(findSingleProjectController);
router.route("/projects/:productId").put(updateProjectController);

module.exports = router;
