const router = require("express").Router();
const { contactAPIGetController } = require("../controller/api/contact");

router.use("/v2/api", require("./project.routes"));
router.use("/v2/api/contacts", contactAPIGetController);

module.exports = router;
