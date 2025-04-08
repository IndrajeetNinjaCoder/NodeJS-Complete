const express = require("express");
const router = express.Router();

const {handleGenerateShortURL, handleGetAllURL, handleGetUrlById, handleGetAnalysis} = require("../controllers/url")

// router.route("/shorturl").post(handleGenerateShortURL)

router.post("/", handleGenerateShortURL)
router.get("/all", handleGetAllURL)
router.get("/:shortID", handleGetUrlById)
router.get("/analytics/:shortID", handleGetAnalysis)

module.exports = router;