const router = require("express").Router();

router.use("/v2/api", require("./project.routes"));

module.exports = router;
