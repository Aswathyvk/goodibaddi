const Feedback = require("../models/Feedback");


// ADD FEEDBACK
const addFeedback = async (req, res) => {

  try {

    const {
      employeeId,
      rating,
      positives,
      negatives,
      comments
    } = req.body;

    const feedback = new Feedback({

      employeeId,

      companyId: req.user.id,

      rating,

      positives,

      negatives,

      comments

    });

    await feedback.save();

    res.status(201).json({

      success: true,

      message: "Feedback added successfully",

      feedback

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      success: false,

      message: "Server Error"

    });

  }

};


// GET FEEDBACK BY EMPLOYEE
const getEmployeeFeedback = async (req, res) => {

  try {

    const feedbacks = await Feedback.find({

      employeeId: req.params.employeeId

    });

    res.status(200).json({

      success: true,

      feedbacks

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      success: false,

      message: "Server Error"

    });

  }

};


module.exports = {
  addFeedback,
  getEmployeeFeedback
};