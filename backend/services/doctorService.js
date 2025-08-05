const Doctor = require('../models/Doctor');

const createDoctor = async (doctorData) => {
  const doctor = new Doctor(doctorData);
  await doctor.save();
  return doctor;
};

const getDoctorById = async (id) => {
  return await Doctor.findById(id);
};

const updateDoctor = async (id, doctorData) => {
  return await Doctor.findByIdAndUpdate(id, doctorData, { new: true });
};

const deleteDoctor = async (id) => {
  return await Doctor.findByIdAndDelete(id);
};

const getAllDoctors = async () => {
  return await Doctor.find({});
};

const findBySpecialization = async (specialization) => {
  return await Doctor.find({ specialization });
};

const findAvailableDoctors = async () => {
  return await Doctor.find({ isAvailable: true });
};

module.exports = {
  createDoctor,
  getDoctorById,
  updateDoctor,
  deleteDoctor,
  getAllDoctors,
  findBySpecialization,
  findAvailableDoctors,
};