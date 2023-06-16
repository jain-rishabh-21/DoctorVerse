const validator = require('validator');
const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  specialization: {
    type: String,
    required: true
  },
  /** Preferred language for effective patient-doctor communication and enhanced comprehension. */
  language: {
    type: String,
    required: true
  },
  /**
   * Highlight your experience in implementing quality improvement initiatives,
   * adherence to evidence-based practices, and involvement in patient safety programs
   * to demonstrate your commitment to providing high-quality care.
   */
  qualityAssurance: {
    type: String,
    required: true
  },
  emailAddress: {
    type: String,
    unique: true,
    // required: true,
    trim: true,
    lowercase: true,
    validate (value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid');
      }
    }
  },
  // Time at which clinic will open
  openTime: {
    hours: {
      type: Number,
      // required: true,
      min: 0,
      max: 23
    },
    minutes: {
      type: Number,
      // required: true,
      min: 0,
      max: 59
    },
    seconds: {
      type: Number,
      // required: true,
      min: 0,
      max: 59
    }
  },
  // Time at which clinic will get closed
  closeTime: {
    hours: {
      type: Number,
      // required: true,
      min: 0,
      max: 23
    },
    minutes: {
      type: Number,
      // required: true,
      min: 0,
      max: 59
    },
    seconds: {
      type: Number,
      // required: true,
      min: 0,
      max: 59
    }
  },
  clinicHygiene: {
    type: Number,
    // required: true,
    min: 1,
    max: 5
  },
  education: {
    type: String,
    required: true
  },
  placeOfPractice: {
    type: String,
    required: true
  },
  experience: {
    type: Number,
    required: true
  },
  reviews: [
    {
      review: {
        type: String,
        required: true
      }
    }
  ]
});

const Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor;
