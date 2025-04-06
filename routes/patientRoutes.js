const express = require("express")
const router = express.Router()
const { addPatient, getQueue, treatPatient, dischargePatient } = require("../controllers/patientController")

router.post("/", addPatient)
router.get("/", getQueue)
router.patch("/:id/treat", treatPatient)
router.delete("/:id", dischargePatient)

module.exports=router;