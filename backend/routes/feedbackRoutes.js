const express = require("express");

const router = express.Router();

const {
  addFeedback,
  getEmployeeFeedback
} = require("../controllers/feedbackController");

const authMiddleware = require(
  "../middleware/authMiddleware"
);


// ADD FEEDBACK
router.post(
  "/add",
  authMiddleware,
  addFeedback
);


// GET EMPLOYEE FEEDBACK
router.get(
  "/:employeeId",
  authMiddleware,
  getEmployeeFeedback
);

module.exports = router;