const Patient = require("../models/Patient")
const queue = require("../utils/priorityQueue")

const addPatient = (req, res) => {
    const { name, triageLvl } = req.body;

    if (!name || typeof triageLvl !== "number" || triageLvl < 1 || triageLvl > 5) {
        return res.status(400).json({ message: 'Invalid Patient Data' })
    }

    const patient = new Patient(name, triageLvl);
    queue.enqueue(patient);

    if (triageLvl === 1 && global.io) {
        global.importScripts.emit('critical_alert', { patient });
    }

    res.status(201).json(patient);
};

const getQueue = (req, res) => {
    res.json(queue.getQueue())
}

const treatPatient = (req, res) => {
    const patient = queue.findById(req.params.id);
    if (!patient) return res.status(404).json({ message: "Patient not found" })

    patient.status = "being treated"
    res.status(200).json(patient);
};



const dischargePatient = (req, res) => {
    const removed = queue.removeById(req.params.id);
    if (!removed) return res.status(404).json({ message: "Patient not found" });
    // queue.removeById(req.params.id);
    res.json({ message: "Patient discharged!" })
}

module.exports = { addPatient, getQueue, treatPatient, dischargePatient }
