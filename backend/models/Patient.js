const mongoose = require('mongoose');

const patientSchema = mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  disease: { type: String, required: true },
  contactNumber: { type: String },
  address: { type: String },
  bloodGroup: { type: String },
  medicationIds: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Medication',
  }],
});

const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;