import express from "express";
import requireAuth from "../middleware/requireAuthProfessionals.js";
import { getProfessionalAppointmentList, scheduleAppointment, rejectAppointment, sendPrescription } from "../controllers/professionalController.js";
const router = express.Router();
router.use(requireAuth);
router.get('/appointment-list',getProfessionalAppointmentList);
router.post('/schedule-appointment',scheduleAppointment);
router.post('/reject-appointment',rejectAppointment);
router.post('/send-prescription',sendPrescription);

export default router;