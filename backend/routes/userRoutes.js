import express from "express";
import { getMedicalList, getAppointmentList, rescheduleAppointment, requestAppointment, cancelAppointment } from "../controllers/userController.js";
import requireAuth from "../middleware/requireAuthUser.js";
const router = express.Router();
router.use(requireAuth);
router.get('/medical-list',getMedicalList);
router.post('/request-appointment',requestAppointment);
router.post('/reschedule-appointment',rescheduleAppointment);
router.post('/cancel-appointment',cancelAppointment);
router.get('/appointment-list',getAppointmentList);

export default router;