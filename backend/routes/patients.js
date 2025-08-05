const express = require('express');
const { addPatient, getPatient, updatePatient, removePatient, listAllPatients } = require('../controllers/patientController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/')
  .post(protect, addPatient)
  .get(protect, listAllPatients);

router.route('/:id')
  .get(protect, getPatient)
  .put(protect, updatePatient)
  .delete(protect, removePatient);

module.exports = router;