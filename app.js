const express = require("express")
const cors = require("cors")
const patientRoutes = require("./routes/patientRoutes")

const app = express()
app.use(cors())
app.use(express.json())
app.use('/patient', patientRoutes);

module.exports = app;