const express = require("express");
const router = express.Router();
router.use("/patient", require("./patientRoutes"));
router.use("/psychiatrist", require("./psychiatristRoutes"));
router.use("/hospital", require("./hospitalRoutes"));
module.exports = router;
