const express = require('express');
const router = express.Router();

// Import individual route files
const authRoutes = require('./auth');
const patientRoutes = require('./patients');
const doctorRoutes = require('./doctors');
const medicationRoutes = require('./medications');
const prescriptionRoutes = require('./prescriptions');
const billingRoutes = require('./billing');

// Mount the individual routers under their respective paths
router.use('/auth', authRoutes);
router.use('/patients', patientRoutes);
router.use('/doctors', doctorRoutes);
router.use('/medications', medicationRoutes);
router.use('/prescriptions', prescriptionRoutes);
router.use('/billing', billingRoutes);

// Export the main API router
module.exports = router;