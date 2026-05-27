const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({

  employeeName: {
    type: String,
    required: true
  },

  mobile: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  linkedin: {
    type: String
  },

  designation: {
    type: String,
    required: true
  },

  joiningDate: {
    type: Date,
    required: true
  },

  leavingDate: {
    type: Date
  },

  reasonForLeaving: {
    type: String
  },

  employmentType: {
    type: String,
    enum: [
      "Full-Time",
      "Part-Time",
      "Intern",
      "Contract"
    ],
    required: true
  },

  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }

}, {
  timestamps: true
});

module.exports = mongoose.model(
  "Employee",
  employeeSchema
);