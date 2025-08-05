const express = require('express');
const { addMedication, getMedication, updateMedication, removeMedication, listAllMedications } = require('../controllers/medicationController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/')
  .post(protect, addMedication)
  .get(protect, listAllMedications);

router.route('/:id')
  .get(protect, getMedication)
  .put(protect, updateMedication)
  .delete(protect, removeMedication);

module.exports = router;