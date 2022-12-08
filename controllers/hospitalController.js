const Hospital = require("../models/Hospital");
const Patient = require("../models/Patient");
const Psychiatrist = require("../models/Psychiatrist");

exports.readAll = async (req, res, next) => {
  try {
    const hospitals = await Hospital.find();

    res.status(200).json({
      status: "success",
      data: hospitals,
    });
  } catch (err) {
    next(err);
  }
};

exports.readOne = async (req, res, next) => {
  try {
    const hospital = await Hospital.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: hospital,
    });
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const hospital = await Hospital.create({
      name: req.body.name,
    });

    res.status(201).json({
      status: "success",
      data: hospital,
    });
  } catch (err) {
    next(err);
  }
};

exports.updateById = async (req, res, next) => {
  try {
    const hospital = await Hospital.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json({
      status: "success",
      data: hospital,
    });
  } catch (err) {
    next(err);
  }
};

exports.getAllPsychiatristsByHospitalId = async (req, res, next) => {
  try {
    const psychiatristCount = await Psychiatrist.countDocuments({
      hospitalId: req.params.id,
    });
    const patientCount = await Patient.countDocuments({
      hospitalId: req.params.id,
    });
    const hospital = await Hospital.findById(req.params.id).populate({
      path: "psychiatrist",
      select: "_id name patientCount -hospitalId",
    });
    console.log(hospital);
    res.status(200).json({
      status: "success",
      data: {
        hospitalName: hospital.name,
        totalPsychiatristCount: psychiatristCount,
        totalPatientCount: patientCount,
        psychiatristDetails: hospital.psychiatrist,
      },
    });
  } catch (err) {
    next(err);
  }
};
