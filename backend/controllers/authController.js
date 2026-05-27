const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// SIGNUP
const signup = async (req, res) => {

    try {

        const { name, email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            user
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


// LOGIN
const login = async (req, res) => {

    try {

        const { email, password } = req.body;

        // Find user
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User not found"
            });
        }

        // Compare password
        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid password"
            });
        }

        // Create token
        const token = jwt.sign(
            {
                id: user._id,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        );

        res.status(200).json({
            success: true,
            message: "Login successful",
            token
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = {
    signup,
    login
};