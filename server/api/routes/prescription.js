const express = require('express');
const router = express.Router();
const Prescription = require('../models/prescription');

// Create a new prescription
router.post('/prescriptions', async (req, res) => {
  try {
    const { patientId, doctorId, medications, AdviceGiven } = req.body;
    const prescription = new Prescription({
      patientId,
      doctorId,
      medications,
      AdviceGiven
    });
    const savedPrescription = await prescription.save();
    res.status(201).json(savedPrescription);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all prescriptions
router.get('/prescriptions', async (req, res) => {
  try {
    const prescriptions = await Prescription.find();
    res.status(200).json(prescriptions);
  } catch (error) {
    res.status(500).json({ message: 'Error while fetching prescriptions' });
  }
});

// Get a specific prescription by ID
router.get('/prescriptions/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const prescription = await Prescription.findById(id);
    if (!prescription) {
      return res.status(404).json({ message: 'Prescription not found' });
    }
    res.status(200).json(prescription);
  } catch (error) {
    res.status(500).json({ message: 'Error while fetching prescription' });
  }
});

// Update a prescription by ID
router.put('/prescriptions/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const prescription = await Prescription.findByIdAndUpdate(id, req.body, {
      new: true
    });
    if (!prescription) {
      return res.status(404).json({ message: 'Prescription not found' });
    }
    res.status(200).json(prescription);
  } catch (error) {
    res.status(500).json({ message: 'Error while updating prescription' });
  }
});

// Delete a prescription by ID
router.delete('/prescriptions/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const prescription = await Prescription.findByIdAndDelete(id);
    if (!prescription) {
      return res.status(404).json({ message: 'Prescription not found' });
    }
    res.status(200).json(prescription);
  } catch (error) {
    res.status(500).json({ message: 'Error while deleting prescription' });
  }
});

// Get a Prescription based on userId
router.get('/prescriptions/byUser/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const prescription = await Prescription.find({ patientId: id });
    if (!prescription) {
      return res.status(404).json({ message: 'Patient Prescription not found' });
    }
    res.status(200).json(prescription);
  } catch (error) {
    res.status(500).json({ message: 'Error while fetching prescription' });
  }
});

module.exports = router;
