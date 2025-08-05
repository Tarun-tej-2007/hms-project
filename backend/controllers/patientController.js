const patientService = require('../services/patientService');
const asyncHandler = require('express-async-handler');

const addPatient = asyncHandler(async (req, res) => {
  const patient = await patientService.createPatient(req.body);
  res.status(201).json(patient);
});

const getPatient = asyncHandler(async (req, res) => {
  const patient = await patientService.getPatientById(req.params.id);
  if (!patient) {
    res.status(404).json({ message: 'Patient not found' });
  } else {
    res.json(patient);
  }
});

const updatePatient = asyncHandler(async (req, res) => {
  const patient = await patientService.updatePatient(req.params.id, req.body);
  if (!patient) {
    res.status(404).json({ message: 'Patient not found' });
  } else {
    res.json(patient);
  }
});

const removePatient = asyncHandler(async (req, res) => {
  const patient = await patientService.deletePatient(req.params.id);
  if (!patient) {
    res.status(404).json({ message: 'Patient not found' });
  } else {
    res.json({ message: 'Patient removed successfully' });
  }
});

const listAllPatients = asyncHandler(async (req, res) => {
  const patients = await patientService.getAllPatients();
  res.json(patients);
});

module.exports = {
  addPatient,
  getPatient,
  updatePatient,
  removePatient,
  listAllPatients,
};