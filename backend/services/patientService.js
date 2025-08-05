const Patient = require('../models/Patient');

const createPatient = async (patientData) => {
  const patient = new Patient(patientData);
  await patient.save();
  return patient;
};

const getPatientById = async (id) => {
  return await Patient.findById(id);
};

const updatePatient = async (id, patientData) => {
  return await Patient.findByIdAndUpdate(id, patientData, { new: true });
};

const deletePatient = async (id) => {
  return await Patient.findByIdAndDelete(id);
};

const getAllPatients = async () => {
  return await Patient.find({});
};

const findPatientsByDisease = async (disease) => {
  return await Patient.find({ disease });
};

module.exports = {
  createPatient,
  getPatientById,
  updatePatient,
  deletePatient,
  getAllPatients,
  findPatientsByDisease,
};