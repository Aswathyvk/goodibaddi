import { useState } from "react";

import axios from "axios";

import { toast } from "react-toastify";


function AddEmployee() {

  const [formData, setFormData] = useState({

    employeeName: "",
    mobile: "",
    email: "",
    linkedin: "",
    designation: "",
    joiningDate: "",
    leavingDate: "",
    reasonForLeaving: "",
    employmentType: ""

  });


  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    });

  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const token =
        localStorage.getItem("token");

      const response = await axios.post(

        "http://localhost:5000/api/employees/add",

        formData,

        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }

      );

      console.log(response.data);

      toast.success(
        "Employee Added Successfully"
      );

      setFormData({

        employeeName: "",
        mobile: "",
        email: "",
        linkedin: "",
        designation: "",
        joiningDate: "",
        leavingDate: "",
        reasonForLeaving: "",
        employmentType: ""

      });

    } catch (error) {

      console.log(error);

      toast.error(

        error.response?.data?.message ||

        "Failed to Add Employee"

      );

    }

  };


  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#f3f4f6",
        padding: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >

      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "12px",
          width: "100%",
          maxWidth: "600px",
          boxShadow:
            "0 4px 10px rgba(0,0,0,0.1)"
        }}
      >

        <h1
          style={{
            marginBottom: "25px",
            textAlign: "center"
          }}
        >
          Add Employee
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
            placeholder="Mobile Number"
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
            name="linkedin"
            placeholder="LinkedIn URL"
            value={formData.linkedin}
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

          <label>
            Joining Date
          </label>

          <input
            type="date"
            name="joiningDate"
            value={formData.joiningDate}
            onChange={handleChange}
            style={inputStyle}
          />

          <label>
            Leaving Date
          </label>

          <input
            type="date"
            name="leavingDate"
            value={formData.leavingDate}
            onChange={handleChange}
            style={inputStyle}
          />

          <textarea
            name="reasonForLeaving"
            placeholder="Reason For Leaving"
            value={formData.reasonForLeaving}
            onChange={handleChange}
            style={{
              ...inputStyle,
              minHeight: "100px"
            }}
          />

          <select
            name="employmentType"
            value={formData.employmentType}
            onChange={handleChange}
            style={inputStyle}
          >

            <option value="">
              Select Employment Type
            </option>

            <option value="Full-Time">
              Full-Time
            </option>

            <option value="Part-Time">
              Part-Time
            </option>

            <option value="Intern">
              Intern
            </option>

            <option value="Contract">
              Contract
            </option>

          </select>

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
              fontSize: "16px",
              marginTop: "10px"
            }}
          >
            Add Employee
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


export default AddEmployee;