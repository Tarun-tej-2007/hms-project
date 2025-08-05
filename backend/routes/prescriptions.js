const express = require('express');
const { createPrescription, getPrescription, updatePrescription, removePrescription, listAllPrescriptions } = require('../controllers/prescriptionController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/')
  .post(protect, createPrescription)
  .get(protect, listAllPrescriptions);

router.route('/:id')
  .get(protect, getPrescription)
  .put(protect, updatePrescription)
  .delete(protect, removePrescription);

module.exports = router;