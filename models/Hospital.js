const mongoose = require("mongoose");
const hospitalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A Hospital must have a name"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
//virtual populate
hospitalSchema.virtual("psychiatrist", {
  ref: "Psychiatrist",
  localField: "_id",
  foreignField: "hospitalId",
});
const Hospital = mongoose.model("Hospital", hospitalSchema);
module.exports = Hospital;

// Hospital name,
// Total Psychiatrist count
// Total patients count
// Psychiatrist Details [
// Id,
// Name,
// Patients count
