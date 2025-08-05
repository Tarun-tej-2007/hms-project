const mongoose = require('mongoose');

const prescriptionSchema = mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true,
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
    required: true,
  },
  date: { type: String, required: true },
  medications: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Medication',
  }],
  instructions: { type: String },
});

const Prescription = mongoose.model('Prescription', prescriptionSchema);
module.exports = Prescription;