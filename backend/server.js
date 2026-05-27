const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

dotenv.config();

// Connect MongoDB
connectDB();

const app = express();


// Middleware
app.use(cors());

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true
  })
);


// Home Route
app.get("/", (req, res) => {

  res.send(
    "GoodiBaddi Backend Running"
  );

});


// AUTH ROUTES
app.use(
  "/api/auth",
  require("./routes/authRoutes")
);


// PROTECTED ROUTES
app.use(
  "/api/protected",
  require("./routes/protectedRoutes")
);


// EMPLOYEE ROUTES
app.use(
  "/api/employees",
  require("./routes/employeeRoutes")
);


// FEEDBACK ROUTES
app.use(
  "/api/feedback",
  require("./routes/feedbackRoutes")
);


// 404 HANDLER
app.use((req, res) => {

  res.status(404).json({

    success: false,

    message: "Route not found"

  });

});


const PORT =
  process.env.PORT || 5000;


app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );

});