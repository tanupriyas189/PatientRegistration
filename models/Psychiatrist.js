const mongoose = require("mongoose");
const psychiatristSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  patientCount: {
    type: Number,
    default: 0,
  },
  hospitalId: {
    type: mongoose.Schema.ObjectId,
    ref: "Hospital",
    required: [true, "A patient must have a hospital id"],
  },
});
const Psychiatrist = mongoose.model("Psychiatrist", psychiatristSchema);
module.exports = Psychiatrist;
