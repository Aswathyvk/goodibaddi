import { useEffect, useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

import Card from "../components/Card";

function Dashboard() {

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const [stats, setStats] = useState({

    totalEmployees: 0,
    fullTimeEmployees: 0,
    contractEmployees: 0

  });


  useEffect(() => {

    fetchStats();

  }, []);


  const fetchStats = async () => {

    try {

      const response = await axios.get(

        "https://goodibaddi.onrender.com/api/employees/stats",

        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }

      );

      console.log(response.data);

      setStats(response.data.stats);

    } catch (error) {

      console.log(error);

    }

  };


  return (

    <div
      style={{
        padding: "30px",
        background: "#f5f5f5",
        minHeight: "100vh"
      }}
    >

      <h1>
        GoodiBaddi Dashboard
      </h1>

      <p>
        HR Verification Platform
      </p>


      {/* STATS */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginTop: "30px"
        }}
      >

        <div
          style={{
            background: "#2563eb",
            color: "white",
            padding: "20px",
            borderRadius: "10px"
          }}
        >

          <h2>
            {stats.totalEmployees}
          </h2>

          <p>
            Total Employees
          </p>

        </div>


        <div
          style={{
            background: "#16a34a",
            color: "white",
            padding: "20px",
            borderRadius: "10px"
          }}
        >

          <h2>
            {stats.fullTimeEmployees}
          </h2>

          <p>
            Full-Time Employees
          </p>

        </div>


        <div
          style={{
            background: "#ea580c",
            color: "white",
            padding: "20px",
            borderRadius: "10px"
          }}
        >

          <h2>
            {stats.contractEmployees}
          </h2>

          <p>
            Contract Employees
          </p>

        </div>

      </div>


      {/* ACTION CARDS */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          marginTop: "40px"
        }}
      >

        <Card
          title="Add Employee"
          description="Create new employee records"
          buttonText="Open"
          onClick={() =>
            navigate("/add-employee")
          }
        />

        <Card
          title="Employee List"
          description="View all employees"
          buttonText="Open"
          onClick={() =>
            navigate("/employees")
          }
        />

        <Card
          title="Search Employee"
          description="Search employee profiles"
          buttonText="Open"
          onClick={() =>
            navigate("/search")
          }
        />

        <Card
          title="Add Feedback"
          description="Add HR feedback"
          buttonText="Open"
          onClick={() =>
            navigate("/add-feedback")
          }
        />

      </div>

    </div>

  );

}

export default Dashboard;