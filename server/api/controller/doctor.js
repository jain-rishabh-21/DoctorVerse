const doctor = require('../models/doctor');

const getDoctor = async (req, res) => {
  try {
    const doctors = await doctor.find();
    res.status(200).json({ doctors });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getDoctorById = async (req, res) => {
  try {
    const { id } = req.params;
    const doctors = await doctor.findById(id);
    res.status(200).json({ doctors });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const createDoctor = async (req, res) => {
  try {
    const doctors = await doctor.create(req.body);
    res.status(200).json({ doctors });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    // update only the field that user send
    const doctors = await doctor.findById(id);
    if (!doctors) return res.status(400).json({ message: 'Doctor not found' });
    Object.keys(req.body).forEach(key => {
      doctors[key] = req.body[key];
    });
    await doctors.save();
    res.status(200).json({ doctors });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    const doctors = await doctor.findByIdAndDelete(id);
    res.status(200).json({ doctors });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getDoctor,
  getDoctorById,
  createDoctor,
  updateDoctor,
  deleteDoctor
};
