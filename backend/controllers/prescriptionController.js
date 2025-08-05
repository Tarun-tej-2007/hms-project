const prescriptionService = require('../services/prescriptionService');
const asyncHandler = require('express-async-handler');

const createPrescription = asyncHandler(async (req, res) => {
  const prescription = await prescriptionService.createPrescription(req.body);
  res.status(201).json(prescription);
});

const getPrescription = asyncHandler(async (req, res) => {
  const prescription = await prescriptionService.getPrescriptionById(req.params.id);
  if (!prescription) {
    res.status(404).json({ message: 'Prescription not found' });
  } else {
    res.json(prescription);
  }
});

const updatePrescription = asyncHandler(async (req, res) => {
  const prescription = await prescriptionService.updatePrescription(req.params.id, req.body);
  if (!prescription) {
    res.status(404).json({ message: 'Prescription not found' });
  } else {
    res.json(prescription);
  }
});

const removePrescription = asyncHandler(async (req, res) => {
  const prescription = await prescriptionService.deletePrescription(req.params.id);
  if (!prescription) {
    res.status(404).json({ message: 'Prescription not found' });
  } else {
    res.json({ message: 'Prescription removed successfully' });
  }
});

const listAllPrescriptions = asyncHandler(async (req, res) => {
  const prescriptions = await prescriptionService.getAllPrescriptions();
  res.json(prescriptions);
});

module.exports = {
  createPrescription,
  getPrescription,
  updatePrescription,
  removePrescription,
  listAllPrescriptions,
};