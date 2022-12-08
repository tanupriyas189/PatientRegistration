const Patient = require("../models/Patient");
const Psychiatrist = require("../models/Psychiatrist");

exports.readAll = async (req, res, next) => {
  try {
    const patients = await Patient.find();

    res.status(200).json({
      status: "success",
      data: patients,
    });
  } catch (err) {
    next(err);
  }
};

exports.readOne = async (req, res, next) => {
  try {
    const patient = await Patient.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: patient,
    });
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    var password = req.body.password;
    if (password.length > 15 || password.length < 8) {
      res.status(400).json({
        status: "failure",
        message: "Password length must between 8 to 15",
      });
      return;
    }

    var hasUppercase = false;
    var hasLowercase = false;

    for (var i = 0; i < password.length; i++) {
      var tmpU = password[i].toUpperCase();
      var tmpL = password[i].toLowerCase();
      if (tmpU !== password[i]) {
        hasLowercase = true;
      }
      if (tmpL !== password[i]) {
        hasUppercase = true;
      }
    }

    if (!hasUppercase || !hasLowercase) {
      res.status(400).json({
        status: "failure",
        message:
          "Password must have atleast one uppercase and one lowercase character",
      });
      return;
    }
    const patient = await Patient.create({
      name: req.body.name,
      address: req.body.address,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      password: req.body.password,
      patientPhoto: req.body.patientPhoto,
      hospitalId: req.body.hospitalId,
      psychiatristId: req.body.psychiatristId,
    });
    const psychiatrist = await Psychiatrist.findById(patient.psychiatristId);

    await Psychiatrist.findByIdAndUpdate(patient.psychiatristId, {
      patientCount: psychiatrist.patientCount + 1,
    });

    res.status(201).json({
      status: "success",
      data: patient,
    });
  } catch (err) {
    next(err);
  }
};

exports.updateById = async (req, res, next) => {
  try {
    const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json({
      status: "success",
      data: patient,
    });
  } catch (err) {
    next(err);
  }
};
