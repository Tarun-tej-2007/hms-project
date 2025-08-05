const Appointment = require('../models/Appointment');

const createAppointment = async (appointmentData) => {
  // Add validation logic here (e.g., check for doctor availability)
  const appointment = new Appointment(appointmentData);
  await appointment.save();
  return appointment;
};

const getAppointmentById = async (id) => {
  return await Appointment.findById(id).populate('patient doctor');
};

const updateAppointment = async (id, appointmentData) => {
  return await Appointment.findByIdAndUpdate(id, appointmentData, { new: true });
};

const deleteAppointment = async (id) => {
  return await Appointment.findByIdAndDelete(id);
};

const getAllAppointments = async () => {
  return await Appointment.find({}).populate('patient doctor');
};

const findByPatientId = async (patientId) => {
  return await Appointment.find({ patient: patientId }).populate('doctor');
};

const findByDoctorId = async (doctorId) => {
  return await Appointment.find({ doctor: doctorId }).populate('patient');
};

const findByDate = async (date) => {
  return await Appointment.find({ date }).populate('patient doctor');
};

module.exports = {
  createAppointment,
  getAppointmentById,
  updateAppointment,
  deleteAppointment,
  getAllAppointments,
  findByPatientId,
  findByDoctorId,
  findByDate,
};