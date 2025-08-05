const mongoose = require('mongoose');

const medicationSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  dosage: { type: String, required: true },
  price: { type: Number, required: true },
  manufacturer: { type: String },
  description: { type: String },
});

const Medication = mongoose.model('Medication', medicationSchema);
module.exports = Medication;