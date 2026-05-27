import { useState } from "react";

import axios from "axios";

import { toast } from "react-toastify";


function AddFeedback() {

  const [formData, setFormData] = useState({

    employeeId: "",
    rating: "",
    positives: "",
    negatives: "",
    comments: ""

  });

  const token = localStorage.getItem("token");


  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    });

  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(

        "https://goodibaddi-backend.onrender.com/api/feedback/add",

        {

          employeeId:
            formData.employeeId,

          rating:
            formData.rating,

          positives:
            formData.positives
              .split(","),

          negatives:
            formData.negatives
              .split(","),

          comments:
            formData.comments

        },

        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }

      );

      console.log(response.data);

      toast.success(
        "Feedback added successfully"
      );

      setFormData({

        employeeId: "",
        rating: "",
        positives: "",
        negatives: "",
        comments: ""

      });

    } catch (error) {

      console.log(error);

      toast.error(
        "Failed to add feedback"
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
          maxWidth: "600px",
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
          Add Feedback
        </h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="employeeId"
            placeholder="Employee ID"
            value={formData.employeeId}
            onChange={handleChange}
            style={inputStyle}
          />


          <input
            type="number"
            name="rating"
            placeholder="Rating (1-5)"
            value={formData.rating}
            onChange={handleChange}
            style={inputStyle}
          />


          <input
            type="text"
            name="positives"
            placeholder="Positive Feedback (comma separated)"
            value={formData.positives}
            onChange={handleChange}
            style={inputStyle}
          />


          <input
            type="text"
            name="negatives"
            placeholder="Negative Feedback (comma separated)"
            value={formData.negatives}
            onChange={handleChange}
            style={inputStyle}
          />


          <textarea
            name="comments"
            placeholder="Additional Comments"
            value={formData.comments}
            onChange={handleChange}
            style={{
              ...inputStyle,
              minHeight: "120px"
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
            Add Feedback
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


export default AddFeedback;