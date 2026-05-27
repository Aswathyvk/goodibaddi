import { useEffect, useState } from "react";

import axios from "axios";

import { Link } from "react-router-dom";

import { toast } from "react-toastify";


function EmployeeList() {

    const [employees, setEmployees] = useState([]);

    const [loading, setLoading] = useState(true);

    const token = localStorage.getItem("token");


    useEffect(() => {

        fetchEmployees();

    }, []);


    const fetchEmployees = async () => {

        try {

            const response = await axios.get(
                "https://goodibaddi-backend.onrender.com/api/employees",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            console.log(response.data);

            setEmployees(response.data.employees);

            setLoading(false);

        } catch (error) {

            console.log(error);

            toast.error(
                "Failed to fetch employees"
            );

            setLoading(false);
        }
    };


    // DELETE EMPLOYEE
    const deleteEmployee = async (id) => {

        try {

            await axios.delete(

                `https://goodibaddi-backend.onrender.com/api/employees/delete/${id}`,

                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }

            );

            toast.success(
                "Employee deleted successfully"
            );

            fetchEmployees();

        } catch (error) {

            console.log(error);

            toast.error(
                "Failed to delete employee"
            );

        }

    };


    if (loading) {
        return <h2>Loading...</h2>;
    }


    return (

        <div
            style={{
                minHeight: "100vh",
                background: "#f3f4f6",
                padding: "30px"
            }}
        >

            <div
                style={{
                    background: "white",
                    padding: "25px",
                    borderRadius: "12px",
                    boxShadow:
                        "0 4px 10px rgba(0,0,0,0.1)"
                }}
            >

                <h1
                    style={{
                        marginBottom: "20px"
                    }}
                >
                    Employee List
                </h1>


                {/* RESPONSIVE TABLE */}

                <div
                    style={{
                        overflowX: "auto"
                    }}
                >

                    <table
                        style={{
                            width: "100%",
                            borderCollapse: "collapse",
                            minWidth: "900px"
                        }}
                    >

                        <thead>

                            <tr
                                style={{
                                    background: "#2563eb",
                                    color: "white"
                                }}
                            >

                                <th style={tableHeader}>
                                    Name
                                </th>

                                <th style={tableHeader}>
                                    Mobile
                                </th>

                                <th style={tableHeader}>
                                    Email
                                </th>

                                <th style={tableHeader}>
                                    Designation
                                </th>

                                <th style={tableHeader}>
                                    Employment Type
                                </th>

                                <th style={tableHeader}>
                                    Actions
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {
                                employees.map((employee) => (

                                    <tr
                                        key={employee._id}
                                        style={{
                                            borderBottom:
                                                "1px solid #e5e7eb"
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
                                            {employee.employmentType}
                                        </td>

                                        <td style={tableCell}>

                                            <Link
                                                to={`/profile/${employee._id}`}
                                            >

                                                <button
                                                    style={{
                                                        ...buttonStyle,
                                                        background: "#16a34a"
                                                    }}
                                                >
                                                    View
                                                </button>

                                            </Link>

                                            {" "}

                                            <Link
                                                to={`/edit/${employee._id}`}
                                            >

                                                <button
                                                    style={{
                                                        ...buttonStyle,
                                                        background: "#2563eb"
                                                    }}
                                                >
                                                    Edit
                                                </button>

                                            </Link>

                                            {" "}

                                            <button
                                                onClick={() =>
                                                    deleteEmployee(employee._id)
                                                }
                                                style={{
                                                    ...buttonStyle,
                                                    background: "#dc2626"
                                                }}
                                            >
                                                Delete
                                            </button>

                                        </td>

                                    </tr>

                                ))
                            }

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    );
}


const tableHeader = {

    padding: "14px",
    textAlign: "left"

};


const tableCell = {

    padding: "14px"

};


const buttonStyle = {

    padding: "8px 12px",
    border: "none",
    borderRadius: "5px",
    color: "white",
    cursor: "pointer",
    marginRight: "5px"

};


export default EmployeeList;