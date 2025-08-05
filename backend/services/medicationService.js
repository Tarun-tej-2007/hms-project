const Medication = require('../models/Medication');

const createMedication = async (medicationData) => {
  const medication = new Medication(medicationData);
  await medication.save();
  return medication;
};

const getMedicationById = async (id) => {
  return await Medication.findById(id);
};

const getMedicationByName = async (name) => {
  return await Medication.findOne({ name });
};

const updateMedication = async (id, medicationData) => {
  return await Medication.findByIdAndUpdate(id, medicationData, { new: true });
};

const deleteMedication = async (id) => {
  return await Medication.findByIdAndDelete(id);
};

const getAllMedications = async () => {
  return await Medication.find({});
};

module.exports = {
  createMedication,
  getMedicationById,
  getMedicationByName,
  updateMedication,
  deleteMedication,
  getAllMedications,
};