const doctorService = require('../services/doctorService');
const asyncHandler = require('express-async-handler');

const addDoctor = asyncHandler(async (req, res) => {
  const doctor = await doctorService.createDoctor(req.body);
  res.status(201).json(doctor);
});

const getDoctor = asyncHandler(async (req, res) => {
  const doctor = await doctorService.getDoctorById(req.params.id);
  if (!doctor) {
    res.status(404).json({ message: 'Doctor not found' });
  } else {
    res.json(doctor);
  }
});

const updateDoctor = asyncHandler(async (req, res) => {
  const doctor = await doctorService.updateDoctor(req.params.id, req.body);
  if (!doctor) {
    res.status(404).json({ message: 'Doctor not found' });
  } else {
    res.json(doctor);
  }
});

const removeDoctor = asyncHandler(async (req, res) => {
  const doctor = await doctorService.deleteDoctor(req.params.id);
  if (!doctor) {
    res.status(404).json({ message: 'Doctor not found' });
  } else {
    res.json({ message: 'Doctor removed successfully' });
  }
});

const listAllDoctors = asyncHandler(async (req, res) => {
  const doctors = await doctorService.getAllDoctors();
  res.json(doctors);
});

const listAvailableDoctors = asyncHandler(async (req, res) => {
  const doctors = await doctorService.findAvailableDoctors();
  res.json(doctors);
});

module.exports = {
  addDoctor,
  getDoctor,
  updateDoctor,
  removeDoctor,
  listAllDoctors,
  listAvailableDoctors,
};