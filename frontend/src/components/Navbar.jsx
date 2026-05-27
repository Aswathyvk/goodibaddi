import { Link, useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    const token = localStorage.getItem("token");


    const logoutHandler = () => {

        localStorage.removeItem("token");

        navigate("/");

    };


    return (

        <div
            style={{
                background: "#111827",
                color: "white",
                padding: "15px 30px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap"
            }}
        >

            {/* LOGO */}

            <h2>
                GoodiBaddi
            </h2>


            {/* NAVIGATION */}

            <div
                style={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "center",
                    flexWrap: "wrap"
                }}
            >

                {!token && (

                    <>

                        <Link
                            to="/"
                            style={{
                                color: "white",
                                textDecoration: "none"
                            }}
                        >
                            Login
                        </Link>

                        <Link
                            to="/signup"
                            style={{
                                color: "white",
                                textDecoration: "none"
                            }}
                        >
                            Signup
                        </Link>

                    </>

                )}


                {token && (

                    <>

                        <Link
                            to="/dashboard"
                            style={{
                                color: "white",
                                textDecoration: "none"
                            }}
                        >
                            Dashboard
                        </Link>

                        <Link
                            to="/add-employee"
                            style={{
                                color: "white",
                                textDecoration: "none"
                            }}
                        >
                            Add Employee
                        </Link>

                        <Link
                            to="/employees"
                            style={{
                                color: "white",
                                textDecoration: "none"
                            }}
                        >
                            Employee List
                        </Link>

                        <Link
                            to="/search"
                            style={{
                                color: "white",
                                textDecoration: "none"
                            }}
                        >
                            Search
                        </Link>

                        <Link
                            to="/add-feedback"
                            style={{
                                color: "white",
                                textDecoration: "none"
                            }}
                        >
                            Feedback
                        </Link>


                        {/* LOGOUT */}

                        <button
                            onClick={logoutHandler}
                            style={{
                                background: "#ef4444",
                                border: "none",
                                color: "white",
                                padding: "8px 15px",
                                borderRadius: "5px",
                                cursor: "pointer"
                            }}
                        >
                            Logout
                        </button>

                    </>

                )}

            </div>

        </div>

    );

}

export default Navbar;