const express = require("express");
const hospitalController = require("../controllers/hospitalController");
const router = express.Router();
router.get("/readAll", hospitalController.readAll);
router.get("/readOne/:id", hospitalController.readOne);
router.post("/create", hospitalController.create);
router.patch("/update/:id", hospitalController.updateById);
router.get(
  "/getAllPsychiatristsByHospitalId/:id",
  hospitalController.getAllPsychiatristsByHospitalId
);
module.exports = router;
