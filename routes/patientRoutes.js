const express = require("express");
const patientController = require("../controllers/patientController");
const router = express.Router();
router.get("/readAll", patientController.readAll);
router.get("/readOne/:id", patientController.readOne);
router.post("/create", patientController.create);
router.patch("/update/:id", patientController.updateById);
module.exports = router;
