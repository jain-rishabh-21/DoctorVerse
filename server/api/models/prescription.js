const mongoose = require('mongoose');

// Define Prescription Schema
const prescriptionSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true
  },
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
    required: true
  },
  medications: [{
    name: {
      type: String,
      required: true
    },
    dosage: {
      type: String,
      required: true
    },
    duration: {
      type: String,
      required: true
    },
  }],
  AdviceGiven:[{
     type:String,
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Define Prescription model
const Prescription = mongoose.model('Prescription', prescriptionSchema);

module.exports = Prescription;
