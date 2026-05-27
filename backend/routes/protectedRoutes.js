const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");

router.get("/dashboard", auth, (req,res)=>{

    res.status(200).json({
        success:true,
        message:"Welcome to Dashboard",
        user:req.user
    });

});

module.exports = router;