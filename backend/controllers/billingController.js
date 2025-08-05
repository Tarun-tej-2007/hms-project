const billingService = require('../services/billingService');
const asyncHandler = require('express-async-handler');

const generateBill = asyncHandler(async (req, res) => {
  const bill = await billingService.createBill(req.body);
  res.status(201).json(bill);
});

const getBill = asyncHandler(async (req, res) => {
  const bill = await billingService.getBillById(req.params.id);
  if (!bill) {
    res.status(404).json({ message: 'Bill not found' });
  } else {
    res.json(bill);
  }
});

const updatePaymentStatus = asyncHandler(async (req, res) => {
  const { status, paymentMethod } = req.body;
  const bill = await billingService.updateBillPaymentStatus(req.params.id, status, paymentMethod);
  if (!bill) {
    res.status(404).json({ message: 'Bill not found' });
  } else {
    res.json(bill);
  }
});

const listAllBills = asyncHandler(async (req, res) => {
  const bills = await billingService.getAllBills();
  res.json(bills);
});

const getTotalRevenue = asyncHandler(async (req, res) => {
  const totalRevenue = await billingService.getTotalRevenue();
  res.json({ totalRevenue });
});

module.exports = {
  generateBill,
  getBill,
  updatePaymentStatus,
  listAllBills,
  getTotalRevenue,
};