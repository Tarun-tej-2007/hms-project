const Bill = require('../models/Bill');

const createBill = async (billData) => {
  const bill = new Bill(billData);
  await bill.save();
  return bill;
};

const getBillById = async (id) => {
  return await Bill.findById(id).populate('patient');
};

const updateBillPaymentStatus = async (id, status, paymentMethod) => {
  return await Bill.findByIdAndUpdate(
    id, { paymentStatus: status, paymentMethod }, { new: true }
  );
};

const getAllBills = async () => {
  return await Bill.find({}).populate('patient');
};

const findByPatientId = async (patientId) => {
  return await Bill.find({ patient: patientId }).populate('patient');
};

const findByPaymentStatus = async (status) => {
  return await Bill.find({ paymentStatus: status }).populate('patient');
};

const getTotalRevenue = async () => {
  const bills = await Bill.find({ paymentStatus: 'Paid' });
  const total = bills.reduce((sum, bill) => sum + bill.totalAmount, 0);
  return total;
};

module.exports = {
  createBill,
  getBillById,
  updateBillPaymentStatus,
  getAllBills,
  findByPatientId,
  findByPaymentStatus,
  getTotalRevenue,
};