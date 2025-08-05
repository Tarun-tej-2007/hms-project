const express = require('express');
const { generateBill, getBill, updatePaymentStatus, listAllBills, getTotalRevenue } = require('../controllers/billingController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/')
  .post(protect, generateBill)
  .get(protect, listAllBills);

router.get('/revenue', protect, getTotalRevenue);

router.route('/:id')
  .get(protect, getBill)
  .put(protect, updatePaymentStatus);

module.exports = router;