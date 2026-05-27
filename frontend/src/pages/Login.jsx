import { useState } from "react";

import { login } from "../services/authService";

import { toast } from "react-toastify";


function Login() {

  const [formData, setFormData] = useState({

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

      const response = await login(formData);

      console.log(
        "FULL RESPONSE:",
        response
      );

      console.log(
        "DATA:",
        response.data
      );


      // SAVE TOKEN

      localStorage.setItem(

        "token",

        response.data.token

      );


      toast.success(
        "Login Successful"
      );


      // REDIRECT

      window.location.href =
        "/dashboard";

    } catch (error) {

      console.log(
        "LOGIN ERROR:",
        error
      );

      toast.error(

        error.response?.data?.message ||

        "Login Failed"

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
          Login
        </h1>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="email"
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
            autoComplete="current-password"
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
              background: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "16px"
            }}
          >
            Login
          </button>

        </form>

      </div>

    </div>

  );

}

export default Login;