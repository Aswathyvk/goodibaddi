const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({

  employeeId: {

    type: mongoose.Schema.Types.ObjectId,

    ref: "Employee",

    required: true

  },

  companyId: {

    type: mongoose.Schema.Types.ObjectId,

    ref: "User"

  },

  rating: {

    type: Number,

    min: 1,

    max: 5

  },

  positives: [String],

  negatives: [String],

  comments: {

    type: String

  }

}, {

  timestamps: true

});

module.exports = mongoose.model(
  "Feedback",
  feedbackSchema
);