import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { ToastContainer } from "react-toastify";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import AddEmployee from "./pages/AddEmployee";
import EmployeeList from "./pages/EmployeeList";
import SearchEmployee from "./pages/SearchEmployee";
import EditEmployee from "./pages/EditEmployee";
import AddFeedback from "./pages/AddFeedback";
import EmployeeProfile from "./pages/EmployeeProfile";

import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";

function App() {

  return (

    <BrowserRouter>

      {/* NAVBAR */}

      <Navbar />

      {/* ROUTES */}

      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/add-employee"
          element={
            <ProtectedRoute>
              <AddEmployee />
            </ProtectedRoute>
          }
        />

        <Route
          path="/employees"
          element={
            <ProtectedRoute>
              <EmployeeList />
            </ProtectedRoute>
          }
        />

        <Route
          path="/search"
          element={
            <ProtectedRoute>
              <SearchEmployee />
            </ProtectedRoute>
          }
        />

        <Route
          path="/edit/:id"
          element={
            <ProtectedRoute>
              <EditEmployee />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile/:id"
          element={
            <ProtectedRoute>
              <EmployeeProfile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/add-feedback"
          element={
            <ProtectedRoute>
              <AddFeedback />
            </ProtectedRoute>
          }
        />

      </Routes>

      {/* TOAST CONTAINER */}

      <ToastContainer />

    </BrowserRouter>

  );

}

export default App;