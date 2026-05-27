const express = require("express");

const router = express.Router();

const {
  addEmployee,
  getEmployees,
  searchEmployees,
  deleteEmployee,
  updateEmployee,
  getEmployeeById,
  getDashboardStats
} = require("../controllers/employeeController");

const authMiddleware = require(
  "../middleware/authMiddleware"
);


// ADD EMPLOYEE
router.post(
  "/add",
  authMiddleware,
  addEmployee
);


// DASHBOARD STATS
router.get(
  "/stats",
  authMiddleware,
  getDashboardStats
);


// GET ALL EMPLOYEES
router.get(
  "/",
  authMiddleware,
  getEmployees
);


// SEARCH EMPLOYEE
router.get(
  "/search",
  authMiddleware,
  searchEmployees
);


// GET SINGLE EMPLOYEE
router.get(
  "/:id",
  authMiddleware,
  getEmployeeById
);


// DELETE EMPLOYEE
router.delete(
  "/delete/:id",
  authMiddleware,
  deleteEmployee
);


// UPDATE EMPLOYEE
router.put(
  "/update/:id",
  authMiddleware,
  updateEmployee
);

module.exports = router;const express = require("express");

const router = express.Router();

const {
  addEmployee,
  getEmployees,
  searchEmployees,
  deleteEmployee,
  updateEmployee,
  getEmployeeById,
  getDashboardStats
} = require("../controllers/employeeController");

const authMiddleware = require(
  "../middleware/authMiddleware"
);


// ADD EMPLOYEE
router.post(
  "/add",
  authMiddleware,
  addEmployee
);


// DASHBOARD STATS
router.get(
  "/stats",
  authMiddleware,
  getDashboardStats
);


// GET ALL EMPLOYEES
router.get(
  "/",
  authMiddleware,
  getEmployees
);


// SEARCH EMPLOYEE
router.get(
  "/search",
  authMiddleware,
  searchEmployees
);


// GET SINGLE EMPLOYEE
router.get(
  "/:id",
  authMiddleware,
  getEmployeeById
);


// DELETE EMPLOYEE
router.delete(
  "/delete/:id",
  authMiddleware,
  deleteEmployee
);


// UPDATE EMPLOYEE
router.put(
  "/update/:id",
  authMiddleware,
  updateEmployee
);

module.exports = router;