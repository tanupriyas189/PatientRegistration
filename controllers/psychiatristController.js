const Psychiatrist = require("../models/Psychiatrist");

exports.readAll = async (req, res, next) => {
  try {
    const psychiatrists = await Psychiatrist.find();

    res.status(200).json({
      status: "success",
      data: psychiatrists,
    });
  } catch (err) {
    next(err);
  }
};

exports.readOne = async (req, res, next) => {
  try {
    const psychiatrist = await Psychiatrist.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: psychiatrist,
    });
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const psychiatrist = await Psychiatrist.create({
      name: req.body.name,
      hospitalId: req.body.hospitalId,
    });

    res.status(201).json({
      status: "success",
      data: psychiatrist,
    });
  } catch (err) {
    next(err);
  }
};

exports.updateById = async (req, res, next) => {
  try {
    const psychiatrist = await Psychiatrist.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.status(200).json({
      status: "success",
      data: psychiatrist,
    });
  } catch (err) {
    next(err);
  }
};
