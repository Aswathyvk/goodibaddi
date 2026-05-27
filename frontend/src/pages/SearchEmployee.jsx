import { useEffect, useState } from "react";

import axios from "axios";

function SearchEmployee() {

  const [search, setSearch] = useState("");

  const [employees, setEmployees] = useState([]);

  const token = localStorage.getItem("token");


  const searchEmployees = async () => {

    try {

      const response = await axios.get(

        `http://localhost:5000/api/employees/search?name=${search}`,

        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }

      );

      console.log(response.data);

      setEmployees(response.data.employees);

    } catch (error) {

      console.log(error);

    }

  };


  useEffect(() => {

    searchEmployees();

  }, [search]);


  return (

    <div style={{ padding: "30px" }}>

      <h1>Search Employee</h1>

      <input
        type="text"
        placeholder="Search Employee Name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "300px"
        }}
      />

      <br /><br />

      <table
        border="1"
        cellPadding="10"
      >

        <thead>

          <tr>

            <th>Name</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Designation</th>

          </tr>

        </thead>

        <tbody>

          {employees.map((employee) => (

            <tr key={employee._id}>

              <td>{employee.employeeName}</td>
              <td>{employee.mobile}</td>
              <td>{employee.email}</td>
              <td>{employee.designation}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default SearchEmployee;