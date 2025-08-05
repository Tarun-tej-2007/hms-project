const express = require('express');
const { addDoctor, getDoctor, updateDoctor, removeDoctor, listAllDoctors, listAvailableDoctors } = require('../controllers/doctorController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/')
  .post(protect, addDoctor)
  .get(protect, listAllDoctors);

router.get('/available', protect, listAvailableDoctors);

router.route('/:id')
  .get(protect, getDoctor)
  .put(protect, updateDoctor)
  .delete(protect, removeDoctor);

module.exports = router;