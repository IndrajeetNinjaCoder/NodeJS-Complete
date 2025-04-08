const express = require("express");

const {handleGetAllUsers} = require("../controllers/user")

const router = express.Router();

// router.get("/api/user", handleGetAllUsers)

router.route("/").get(handleGetAllUsers)

module.exports = router