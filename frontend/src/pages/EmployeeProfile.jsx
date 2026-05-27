import { useEffect, useState } from "react";

import axios from "axios";

import { useParams } from "react-router-dom";

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

        `http://localhost:5000/api/employees/${id}`,

        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }

      );

      console.log(response.data);

      setEmployee(response.data.employee);

    } catch (error) {

      console.log(error);

    }

  };


  const fetchFeedbacks = async () => {

    try {

      const response = await axios.get(

        `http://localhost:5000/api/feedback/${id}`,

        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }

      );

      console.log(response.data);

      setFeedbacks(response.data.feedbacks);

    } catch (error) {

      console.log(error);

    }

  };


  if (!employee) {

    return <h2>Loading...</h2>;

  }


  return (

    <div style={{ padding: "30px" }}>

      <h1>Employee Profile</h1>

      <hr />

      <h2>{employee.employeeName}</h2>

      <p>
        <strong>Email:</strong>
        {" "}
        {employee.email}
      </p>

      <p>
        <strong>Mobile:</strong>
        {" "}
        {employee.mobile}
      </p>

      <p>
        <strong>Designation:</strong>
        {" "}
        {employee.designation}
      </p>

      <p>
        <strong>Employment Type:</strong>
        {" "}
        {employee.employmentType}
      </p>

      <hr />

      <h2>Feedback History</h2>

      {

        feedbacks.length === 0 ? (

          <p>No feedback found</p>

        ) : (

          feedbacks.map((feedback) => (

            <div
              key={feedback._id}
              style={{
                border: "1px solid gray",
                padding: "15px",
                marginBottom: "15px"
              }}
            >

              <h3>
                Rating:
                {" "}
                {feedback.rating}/5
              </h3>

              <p>

                <strong>Positives:</strong>

                {" "}

                {feedback.positives.join(", ")}

              </p>

              <p>

                <strong>Negatives:</strong>

                {" "}

                {feedback.negatives.join(", ")}

              </p>

              <p>

                <strong>Comments:</strong>

                {" "}

                {feedback.comments}

              </p>

            </div>

          ))

        )

      }

    </div>

  );

}

export default EmployeeProfile;