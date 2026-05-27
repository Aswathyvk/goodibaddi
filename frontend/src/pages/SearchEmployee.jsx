import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function SearchEmployee() {

  const [search, setSearch] = useState("");
  const [employees, setEmployees] = useState([]);

  const token = localStorage.getItem("token");

  const searchEmployees = async () => {

    try {

      const response = await axios.get(
        `https://goodibaddi-backend.onrender.com/api/employees/search?name=${search}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setEmployees(response.data.employees);

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    searchEmployees();

  }, [search]);

  return (

    <div
      style={{
        padding: "30px",
        background: "#f4f7fb",
        minHeight: "100vh",
      }}
    >

      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          background: "white",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >

        <h1
          style={{
            marginBottom: "20px",
            color: "#0b132b",
          }}
        >
          Search Employee
        </h1>

        <input
          type="text"
          placeholder="Search Employee Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "12px",
            width: "350px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            marginBottom: "20px",
            outline: "none",
          }}
        />

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >

          <thead>

            <tr
              style={{
                background: "#0b132b",
                color: "white",
              }}
            >

              <th style={tableHeader}>Name</th>
              <th style={tableHeader}>Mobile</th>
              <th style={tableHeader}>Email</th>
              <th style={tableHeader}>Designation</th>
              <th style={tableHeader}>Action</th>

            </tr>

          </thead>

          <tbody>

            {employees.length > 0 ? (

              employees.map((employee) => (

                <tr
                  key={employee._id}
                  style={{
                    borderBottom: "1px solid #ddd",
                  }}
                >

                  <td style={tableCell}>
                    {employee.employeeName}
                  </td>

                  <td style={tableCell}>
                    {employee.mobile}
                  </td>

                  <td style={tableCell}>
                    {employee.email}
                  </td>

                  <td style={tableCell}>
                    {employee.designation}
                  </td>

                  <td style={tableCell}>

                    <Link
                      to={`/profile/${employee._id}`}
                      style={{
                        background: "#0b132b",
                        color: "white",
                        padding: "8px 14px",
                        borderRadius: "6px",
                        textDecoration: "none",
                        fontSize: "14px",
                      }}
                    >
                      View Profile
                    </Link>

                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td
                  colSpan="5"
                  style={{
                    textAlign: "center",
                    padding: "20px",
                  }}
                >
                  No employees found
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>

  );

}

const tableHeader = {
  padding: "14px",
  textAlign: "left",
};

const tableCell = {
  padding: "12px",
};

export default SearchEmployee;