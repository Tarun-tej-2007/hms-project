const Prescription = require('../models/Prescription');
const Patient = require('../models/Patient');

const createPrescription = async (prescriptionData) => {
  const prescription = new Prescription(prescriptionData);
  await prescription.save();

  // Update the patient's medication list
  await Patient.findByIdAndUpdate(
    prescription.patient,
    { $push: { medicationIds: { $each: prescription.medications } } }
  );

  return prescription;
};

const getPrescriptionById = async (id) => {
  return await Prescription.findById(id).populate('patient doctor medications');
};

const updatePrescription = async (id, prescriptionData) => {
  const prescription = await Prescription.findByIdAndUpdate(id, prescriptionData, { new: true });
  // Logic to update patient's medication list would be complex, requires old and new data.
  return prescription;
};

const deletePrescription = async (id) => {
  const prescription = await Prescription.findByIdAndDelete(id);
  // Logic to remove medications from patient's list
  return prescription;
};

const getAllPrescriptions = async () => {
  return await Prescription.find({}).populate('patient doctor medications');
};

const findByPatientId = async (patientId) => {
  return await Prescription.find({ patient: patientId }).populate('doctor medications');
};

const findByDoctorId = async (doctorId) => {
  return await Prescription.find({ doctor: doctorId }).populate('patient medications');
};

module.exports = {
  createPrescription,
  getPrescriptionById,
  updatePrescription,
  deletePrescription,
  getAllPrescriptions,
  findByPatientId,
  findByDoctorId,
};