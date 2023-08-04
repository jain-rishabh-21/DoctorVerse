const express = require('express');
const router = express.Router();
const { getDoctor, getDoctorById, createDoctor, updateDoctor, deleteDoctor } = require('../controller/doctor');
const { adminVerify } = require('../Authentication/jwt');
// GET-ALL-DOCTOR-ENDPOINT
router.get('/getDoctor', getDoctor);
// GET-DOCTOR-BY-ID-ENDPOINT
router.get('/getDoctorById/:id', getDoctorById);
// CREATE-DOCTOR-ENDPOINT
router.post('/createDoctor', adminVerify, createDoctor);
// UPDATE-DOCTOR-ENDPOINT
router.put('/updateDoctor/:id', adminVerify, updateDoctor);
// DELETE-DOCTOR-ENDPOINT
router.delete('/deleteDoctor/:id', adminVerify, deleteDoctor);
module.exports = router;
