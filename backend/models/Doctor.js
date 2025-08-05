const mongoose = require('mongoose');

const doctorSchema = mongoose.Schema({
  name: { type: String, required: true },
  specialization: { type: String, required: true },
  contactNumber: { type: String },
  email: { type: String },
  consultationFee: { type: Number, default: 0.0 },
  isAvailable: { type: Boolean, default: true },
});

const Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor;