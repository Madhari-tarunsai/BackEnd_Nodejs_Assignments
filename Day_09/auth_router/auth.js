const express = require("express");
const router = express.Router();
const { authdetails } = require("../controllers/authcontrollers.js");

router.post("/login", authdetails); // POST /api/v1/login/login

module.exports = router;
