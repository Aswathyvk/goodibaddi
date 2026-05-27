import { useEffect, useState } from "react";

import axios from "axios";

import {
  useParams,
  useNavigate
} from "react-router-dom";

import { toast } from "react-toastify";


function EditEmployee() {

  const { id } = useParams();

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const [formData, setFormData] = useState({

    employeeName: "",
    mobile: "",
    email: "",
    designation: "",
    employmentType: ""

  });


  useEffect(() => {

    fetchEmployee();

  }, []);


  const fetchEmployee = async () => {

    try {

      const response = await axios.get(

        "http://localhost:5000/api/employees",

        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }

      );

      const employee =
        response.data.employees.find(

          (emp) => emp._id === id

        );

      if (employee) {

        setFormData({

          employeeName:
            employee.employeeName,

          mobile:
            employee.mobile,

          email:
            employee.email,

          designation:
            employee.designation,

          employmentType:
            employee.employmentType

        });

      }

    } catch (error) {

      console.log(error);

      toast.error(
        "Failed to fetch employee"
      );

    }

  };


  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value

    });

  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.put(

        `http://localhost:5000/api/employees/update/${id}`,

        formData,

        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }

      );

      toast.success(
        "Employee updated successfully"
      );

      navigate("/employees");

    } catch (error) {

      console.log(error);

      toast.error(
        "Failed to update employee"
      );

    }

  };


  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#f3f4f6",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px"
      }}
    >

      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "12px",
          width: "100%",
          maxWidth: "500px",
          boxShadow:
            "0 4px 10px rgba(0,0,0,0.1)"
        }}
      >

        <h1
          style={{
            textAlign: "center",
            marginBottom: "25px"
          }}
        >
          Edit Employee
        </h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="employeeName"
            placeholder="Employee Name"
            value={formData.employeeName}
            onChange={handleChange}
            style={inputStyle}
          />


          <input
            type="text"
            name="mobile"
            placeholder="Mobile"
            value={formData.mobile}
            onChange={handleChange}
            style={inputStyle}
          />


          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
          />


          <input
            type="text"
            name="designation"
            placeholder="Designation"
            value={formData.designation}
            onChange={handleChange}
            style={inputStyle}
          />


          <input
            type="text"
            name="employmentType"
            placeholder="Employment Type"
            value={formData.employmentType}
            onChange={handleChange}
            style={inputStyle}
          />


          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              background: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "16px"
            }}
          >
            Update Employee
          </button>

        </form>

      </div>

    </div>

  );

}


const inputStyle = {

  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "6px",
  border: "1px solid #d1d5db",
  fontSize: "14px"

};


export default EditEmployee;