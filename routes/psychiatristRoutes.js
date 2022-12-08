const express = require("express");
const psychiatristController = require("../controllers/psychiatristController");
const router = express.Router();
router.get("/readAll", psychiatristController.readAll);
router.get("/readOne/:id", psychiatristController.readOne);
router.post("/create", psychiatristController.create);
router.patch("/update/:id", psychiatristController.updateById);
module.exports = router;
