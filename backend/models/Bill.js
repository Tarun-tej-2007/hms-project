const mongoose = require('mongoose');

const billSchema = mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true,
  },
  date: { type: String, required: true },
  consultationFee: { type: Number, default: 0.0 },
  medicationCharges: { type: Number, default: 0.0 },
  otherCharges: { type: Number, default: 0.0 },
  paymentStatus: {
    type: String,
    enum: ['Paid', 'Pending', 'Overdue'],
    default: 'Pending',
  },
  paymentMethod: { type: String },
});

// A virtual property to calculate the total amount
billSchema.virtual('totalAmount').get(function() {
  return this.consultationFee + this.medicationCharges + this.otherCharges;
});

const Bill = mongoose.model('Bill', billSchema);
module.exports = Bill;