import { prisma } from "../server.js";
//get medicals
const getMedicalList = async (req, res) => {
    try {
      const medicalList = await prisma.medical_professional.findMany({
        select: {
          medi_id: true,
          name: true,
          email: true,
          phone_number: true,
          address: true,
          maps_link: true,
          specialty: true,
          license_number: true,
          languages: true,
        },
      });
      res.status(200).json(medicalList);
    } catch (err) {
      res.status(500).json({ error: "Failed to retrieve medical professionals list" });
    }
};

//post request appointment
const requestAppointment = async (req, res) => {
    const { professional_id, appointment_date } = req.body;
    console.log(professional_id,appointment_date);
    const {user_id} = req.user; 
    try {
      const appointment = await prisma.appointments.create({
        data: {
          user_id: user_id,
          professional_id: professional_id,
          appointment_date: new Date(appointment_date),
          status: "requested",
        },
      });
      res.status(200).json(appointment);
    } catch (err) {
      res.status(500).json({ error: "Failed to request an appointment" });
      console.log(err);
    }
};

//post reschedule
const rescheduleAppointment = async (req, res) => {
    const { appointment_id, new_date } = req.body;
    const {user_id} = req.user;
  
    try {
      const appointment = await prisma.appointments.updateMany({
        where: {
          appointment_id: appointment_id,
          user_id: user_id,
          status: "scheduled",
        },
        data: {
          appointment_date: new Date(new_date),
          status: "rescheduled",
        },
      });
  
      if (appointment.count === 0) {
        return res.status(400).json({ error: "Failed to reschedule appointment, or appointment not found, or appointment not scheduled yet" });
      }
  
      res.status(200).json({ message: "Appointment rescheduled successfully" });
    } catch (err) {
      res.status(500).json({ error: "Failed to reschedule appointment" });
    }
};

//post cnacle
const cancelAppointment = async (req, res) => {
    const { appointment_id } = req.body;
    const {user_id} = req.user;
  
    try {
      const appointment = await prisma.appointments.updateMany({
        where: {
          appointment_id: appointment_id,
          user_id: user_id,
          status: "scheduled",
        },
        data: {
          status: "canceled",
        },
      });
  
      if (appointment.count === 0) {
        return res.status(400).json({ error: "Failed to cancel appointment, or appointment not found, or is not scheduled" });
      }
  
      res.status(200).json({ message: "Appointment canceled successfully" });
    } catch (err) {
      res.status(500).json({ error: "Failed to cancel appointment" });
    }
};
  
//get app list of user
const getAppointmentList = async (req, res) => {
    const {user_id} = req.user;
    try {
        const appointments = await prisma.appointments.findMany({
            where: {
                user_id: user_id,
            },
            include: {
                medical_professional: {
                    select: {
                        name: true,
                        specialty: true,
                        phone_number: true,
                    },
                },
            },
        });
      res.status(200).json(appointments);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to retrieve appointment list" });
    }
};

export {
    getAppointmentList,
    getMedicalList,
    requestAppointment,
    rescheduleAppointment,
    cancelAppointment
}