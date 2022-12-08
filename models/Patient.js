const mongoose = require("mongoose");
const validator = require("validator");
const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A patient must have a first name"],
  },
  address: {
    type: String,
    minLength: [10, "An address must have atleast 10 characters"],
  },
  email: {
    type: String,
    required: [true, "A patient must have an email"],
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: "Please provide a valid email",
    },
  },
  phoneNumber: {
    type: String,
    required: [true, "A patient must have a number"],
    minLength: [10, "A phone number must have atleast 10 digits"],
  },
  password: {
    type: String,
    required: [true, "A patient must have a password"],
  },
  patientPhoto: {
    type: String,
  },
  hospitalId: {
    type: mongoose.Schema.ObjectId,
    ref: "Hospital",
    required: [true, "A patient must have a hospital id"],
  },
  psychiatristId: {
    type: mongoose.Schema.ObjectId,
    ref: "Psychiatrist",
    required: [true, "A patient must have a psychiatrist id"],
  },
});

const Patient = mongoose.model("Patient", patientSchema);
module.exports = Patient;
