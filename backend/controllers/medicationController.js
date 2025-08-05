const medicationService = require('../services/medicationService');
const asyncHandler = require('express-async-handler');

const addMedication = asyncHandler(async (req, res) => {
  const medication = await medicationService.createMedication(req.body);
  res.status(201).json(medication);
});

const getMedication = asyncHandler(async (req, res) => {
  const medication = await medicationService.getMedicationById(req.params.id);
  if (!medication) {
    res.status(404).json({ message: 'Medication not found' });
  } else {
    res.json(medication);
  }
});

const updateMedication = asyncHandler(async (req, res) => {
  const medication = await medicationService.updateMedication(req.params.id, req.body);
  if (!medication) {
    res.status(404).json({ message: 'Medication not found' });
  } else {
    res.json(medication);
  }
});

const removeMedication = asyncHandler(async (req, res) => {
  const medication = await medicationService.deleteMedication(req.params.id);
  if (!medication) {
    res.status(404).json({ message: 'Medication not found' });
  } else {
    res.json({ message: 'Medication removed successfully' });
  }
});

const listAllMedications = asyncHandler(async (req, res) => {
  const medications = await medicationService.getAllMedications();
  res.json(medications);
});

module.exports = {
  addMedication,
  getMedication,
  updateMedication,
  removeMedication,
  listAllMedications,
};