const express = require("express");
const router =new express.Router();
const Doctor = require("../model/doctor");
const verifyToken = require("../middleware/tokenVerify");

// Create a new doctor
router.post("/doctors", verifyToken, async (req, res) => {
    try {
      const doctor = new Doctor(req.body);
      await doctor.save();
      res.status(201).send(doctor);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  // Get all doctors
  router.get("/doctors", async (req, res) => {
    try {
      const doctors = await Doctor.find();
      res.send(doctors);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  // Get a specific doctor by ID
  router.get("/doctors/:id", async (req, res) => {
    try {
      const doctor = await Doctor.findById(req.params.id);
      if (!doctor) {
        return res.status(404).send();
      }
      res.send(doctor);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  // Update a doctor by ID
  router.patch("/doctors/:id",verifyToken, async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = [
      "name",
      "specialization",
      "language",
      "qualityAssurance",
      "emailAddress",
      "openTime",
      "closeTime",
      "clinicHygiene",
      "education",
      "placeOfPractice",
      "experience",
      "reviews",
    ];
    const isValidOperation = updates.every((update) =>
      allowedUpdates.includes(update)
    );
  
    if (!isValidOperation) {
      return res.status(400).send({ error: "Invalid updates!" });
    }
  
    try {
      const doctor = await Doctor.findById(req.params.id);
      if (!doctor) {
        return res.status(404).send();
      }
  
      updates.forEach((update) => (doctor[update] = req.body[update]));
      await doctor.save();
  
      res.send(doctor);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  // Delete a doctor by ID
  router.delete("/doctors/:id",verifyToken, async (req, res) => {
    try {
      const doctor = await Doctor.findByIdAndDelete(req.params.id);
      if (!doctor) {
        return res.status(404).send();
      }
      res.send(doctor);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
    module.exports = router;