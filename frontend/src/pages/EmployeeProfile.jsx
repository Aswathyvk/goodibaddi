import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

function EmployeeProfile() {

  const { id } = useParams();

  const token = localStorage.getItem("token");

  const [employee, setEmployee] = useState(null);

  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {

    fetchEmployee();

    fetchFeedbacks();

  }, []);

  const fetchEmployee = async () => {

    try {

      const response = await axios.get(
<<<<<<< HEAD

        `https://goodibaddi-backend.onrender.com/api/employees/${id}`,

=======
        `http://localhost:5000/api/employees/${id}`,
>>>>>>> 3de6a74b (Improve employee profile UI and feedback history design)
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setEmployee(response.data.employee);

    } catch (error) {

      console.log(error);

    }

  };

  const fetchFeedbacks = async () => {

    try {

      const response = await axios.get(
<<<<<<< HEAD

        `https://goodibaddi-backend.onrender.com/api/feedback/${id}`,

=======
        `http://localhost:5000/api/feedback/${id}`,
>>>>>>> 3de6a74b (Improve employee profile UI and feedback history design)
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setFeedbacks(response.data.feedbacks);

    } catch (error) {

      console.log(error);

    }

  };

  if (!employee) {

    return (

      <div
        style={{
          padding: "40px",
          textAlign: "center",
        }}
      >
        <h2>Loading...</h2>
      </div>

    );

  }

  return (

    <div
      style={{
        background: "#f4f7fb",
        minHeight: "100vh",
        padding: "30px",
      }}
    >

      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
        }}
      >

        {/* Profile Card */}

        <div
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            marginBottom: "30px",
          }}
        >

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >

            <h1
              style={{
                color: "#0b132b",
              }}
            >
              Employee Profile
            </h1>

            <div
              style={{
                display: "flex",
                gap: "10px",
              }}
            >

              <Link
                to={`/add-feedback/${employee._id}`}
                style={{
                  background: "#0b132b",
                  color: "white",
                  padding: "10px 16px",
                  borderRadius: "8px",
                  textDecoration: "none",
                }}
              >
                Add Feedback
              </Link>

              <Link
                to={`/edit-employee/${employee._id}`}
                style={{
                  background: "#ff9800",
                  color: "white",
                  padding: "10px 16px",
                  borderRadius: "8px",
                  textDecoration: "none",
                }}
              >
                Edit Employee
              </Link>

            </div>

          </div>

          <hr />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginTop: "25px",
              flexWrap: "wrap",
            }}
          >

            {/* Avatar */}

            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                background: "#0b132b",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "30px",
                fontWeight: "bold",
              }}
            >
              {employee.employeeName?.charAt(0)}
            </div>

            <div>

              <h2
                style={{
                  marginBottom: "10px",
                }}
              >
                {employee.employeeName}
              </h2>

              <p>
                <strong>Email:</strong> {employee.email}
              </p>

              <p>
                <strong>Mobile:</strong> {employee.mobile}
              </p>

              <p>
                <strong>Designation:</strong> {employee.designation}
              </p>

              <p>
                <strong>Employment Type:</strong>{" "}
                {employee.employmentType}
              </p>

            </div>

          </div>

        </div>

        {/* Feedback Section */}

        <div
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          }}
        >

          <h2
            style={{
              marginBottom: "20px",
              color: "#0b132b",
            }}
          >
            Feedback History
          </h2>

          {

            feedbacks.length === 0 ? (

              <p>No feedback found</p>

            ) : (

              feedbacks.map((feedback) => (

                <div
                  key={feedback._id}
                  style={{
                    background: "#f9fafc",
                    padding: "20px",
                    borderRadius: "10px",
                    marginBottom: "20px",
                    borderLeft: "5px solid #0b132b",
                  }}
                >

                  <div
                    style={{
                      marginBottom: "15px",
                    }}
                  >

                    <span
                      style={{
                        background: "#0b132b",
                        color: "white",
                        padding: "6px 12px",
                        borderRadius: "20px",
                        fontSize: "14px",
                      }}
                    >
                      Rating: {feedback.rating}/5
                    </span>

                  </div>

                  <p>
                    <strong>Positives:</strong>{" "}
                    {feedback.positives.join(", ")}
                  </p>

                  <p>
                    <strong>Negatives:</strong>{" "}
                    {feedback.negatives.join(", ")}
                  </p>

                  <p>
                    <strong>Comments:</strong>{" "}
                    {feedback.comments}
                  </p>

                </div>

              ))

            )

          }

        </div>

      </div>

    </div>

  );

}

export default EmployeeProfile;