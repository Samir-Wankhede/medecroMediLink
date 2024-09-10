import { prisma } from "../server.js";

const getProfessionalAppointmentList = async (req, res) => {
    const {medi_id} = req.user; // Assuming the logged-in professional ID is stored in `req.user`
  
    try {
      const appointments = await prisma.appointments.findMany({
        where: {
          professional_id: medi_id,
        }
      });
  
      res.status(200).json(appointments);
    } catch (err) {
      res.status(500).json({ error: "Failed to retrieve appointment list" });
    }
};

const scheduleAppointment = async (req, res) => {
    const { appointment_id, appointment_date } = req.body;
    const {medi_id} = req.user;
    try {
      const appointment = await prisma.appointments.updateMany({
        where: {
          appointment_id: appointment_id,
          professional_id: medi_id,
          status: "requested",
        },
        data: {
          appointment_date: new Date(appointment_date),
          status: "scheduled",
        },
      });
  
      if (appointment.count === 0) {
        return res.status(400).json({ error: "Failed to schedule appointment, or appointment not found" });
      }
  
      res.status(200).json({ message: "Appointment scheduled successfully" });
    } catch (err) {
      res.status(500).json({ error: "Failed to schedule appointment" });
    }
};
 
const rejectAppointment = async (req, res) => {
    const { appointment_id } = req.body;
    const {medi_id} = req.user;
  
    try {
      const appointment = await prisma.appointments.updateMany({
        where: {
          appointment_id: appointment_id,
          professional_id: medi_id,
          status: "requested",
        },
        data: {
          status: "rejected",
        },
      });
  
      if (appointment.count === 0) {
        return res.status(400).json({ error: "Failed to reject appointment, or appointment not found, or app is scheduled" });
      }
  
      res.status(200).json({ message: "Appointment rejected successfully" });
    } catch (err) {
      res.status(500).json({ error: "Failed to reject appointment" });
    }
};

const sendPrescription = async (req, res) => {
    const { appointment_id, prescription } = req.body;
    const {medi_id} = req.user;
  
    try {
      const appointment = await prisma.appointments.updateMany({
        where: {
          appointment_id: appointment_id,
          professional_id: medi_id,
          status: "scheduled",
        },
        data: {
          prescription: prescription,
          status: "completed",
        },
      });
  
      if (appointment.count === 0) {
        return res.status(400).json({ error: "Failed to send prescription, or appointment not found" });
      }
  
      res.status(200).json({ message: "Prescription sent successfully" });
    } catch (err) {
      res.status(500).json({ error: "Failed to send prescription" });
    }
};
  
export {
    getProfessionalAppointmentList,
    scheduleAppointment,
    rejectAppointment,
    sendPrescription,
}  