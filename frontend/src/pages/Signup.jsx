import { useState } from "react";

import { signup } from "../services/authService";

import { toast } from "react-toastify";


function Signup() {

  const [formData, setFormData] = useState({

    name: "",
    email: "",
    password: ""

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

      const response = await signup(formData);

      console.log(response);

      toast.success(
        "Signup Successful"
      );

    } catch (error) {

      console.log(error);

      toast.error(

        error.response?.data?.message ||

        error.message ||

        "Signup Failed"

      );

    }

  };


  return (

    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f3f4f6",
        padding: "20px"
      }}
    >

      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "12px",
          width: "100%",
          maxWidth: "400px",
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
          Signup
        </h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              borderRadius: "6px",
              border: "1px solid #d1d5db"
            }}
          />


          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              borderRadius: "6px",
              border: "1px solid #d1d5db"
            }}
          />


          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "20px",
              borderRadius: "6px",
              border: "1px solid #d1d5db"
            }}
          />


          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              background: "#16a34a",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "16px"
            }}
          >
            Signup
          </button>

        </form>

      </div>

    </div>

  );

}

export default Signup;