const {nanoid} = require("nanoid")
const URL = require("../models/url")

async function handleGenerateShortURL(req, res) {
    const id = nanoid(8);
    const body = req.body;
    if(!body.url)
        return res.status(400).json({error: "URL is required!"})

    await URL.create({
       
        shortID: id,
        redirectURL: body.url,
        visitHistory: []
    })

    return res.json({id: id})
}

async function handleGetAllURL(req, res) {
    const urls = await URL.find({});

    return res.json({urls: urls})
}

async function handleGetUrlById(req, res) {
    const shortID = req.params.shortID
    const entry = await URL.findOneAndUpdate({
        shortID
    }, {
        $push: {
            visitHistory: {
                timestamp: Date.now()
            }
        }
    })
    res.redirect(entry.redirectURL)
}

async function handleGetAnalysis(req, res) {
    const shortID = req.params.shortID;
    const entry = await URL.findOne({shortID})
    return res.json({"Total CLicks": entry.visitHistory.length, analytics: entry.visitHistory})
}



module.exports = {handleGenerateShortURL, handleGetAllURL, handleGetUrlById, handleGetAnalysis}