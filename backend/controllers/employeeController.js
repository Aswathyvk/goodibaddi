const Employee = require("../models/Employee");


// ADD EMPLOYEE
const addEmployee = async (req, res) => {

  try {

    const {
      employeeName,
      mobile,
      email,
      linkedin,
      designation,
      joiningDate,
      leavingDate,
      reasonForLeaving,
      employmentType
    } = req.body;

    const newEmployee = new Employee({

      employeeName,
      mobile,
      email,
      linkedin,
      designation,
      joiningDate,
      leavingDate,
      reasonForLeaving,
      employmentType,

      createdBy: req.user.id

    });

    await newEmployee.save();

    res.status(201).json({

      success: true,

      message: "Employee added successfully",

      employee: newEmployee

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      success: false,

      message: "Server Error"

    });

  }

};


// GET EMPLOYEES
const getEmployees = async (req, res) => {

  try {

    const employees = await Employee.find();

    res.status(200).json({

      success: true,

      employees

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      success: false,

      message: "Server Error"

    });

  }

};


// SEARCH EMPLOYEES
const searchEmployees = async (req, res) => {

  try {

    const search = req.query.name || "";

    const employees = await Employee.find({

      employeeName: {
        $regex: search,
        $options: "i"
      }

    });

    res.status(200).json({

      success: true,

      employees

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      success: false,

      message: "Server Error"

    });

  }

};

// DELETE EMPLOYEE
const deleteEmployee = async (req, res) => {

  try {

    const employee = await Employee.findByIdAndDelete(
      req.params.id
    );

    if (!employee) {

      return res.status(404).json({

        success: false,

        message: "Employee not found"

      });

    }

    res.status(200).json({

      success: true,

      message: "Employee deleted successfully"

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      success: false,

      message: "Server Error"

    });

  }

};

// UPDATE EMPLOYEE
const updateEmployee = async (req, res) => {

  try {

    const updatedEmployee =
      await Employee.findByIdAndUpdate(

        req.params.id,

        req.body,

        {
          new: true
        }

      );

    if (!updatedEmployee) {

      return res.status(404).json({

        success: false,

        message: "Employee not found"

      });

    }

    res.status(200).json({

      success: true,

      message: "Employee updated successfully",

      employee: updatedEmployee

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      success: false,

      message: "Server Error"

    });

  }

};


// GET SINGLE EMPLOYEE
const getEmployeeById = async (req, res) => {

  try {

    const employee =
      await Employee.findById(
        req.params.id
      );

    if (!employee) {

      return res.status(404).json({

        success: false,

        message: "Employee not found"

      });

    }

    res.status(200).json({

      success: true,

      employee

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      success: false,

      message: "Server Error"

    });

  }

};

// GET DASHBOARD STATS
const getDashboardStats = async (req, res) => {

  try {

    const totalEmployees =
      await Employee.countDocuments();

    const fullTimeEmployees =
      await Employee.countDocuments({
        employmentType: "Full-Time"
      });

    const contractEmployees =
      await Employee.countDocuments({
        employmentType: "Contract"
      });

    res.status(200).json({

      success: true,

      stats: {
        totalEmployees,
        fullTimeEmployees,
        contractEmployees
      }

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
  addEmployee,
  getEmployees,
  searchEmployees,
  deleteEmployee,
  updateEmployee,
  getEmployeeById,
  getDashboardStats
};
 