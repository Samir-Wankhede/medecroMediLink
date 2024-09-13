"use client";
import withDoctorAuthentication from '@/authManagement/withDoctorAuthentication';
import NavBarApp from '@/components/NavBarApp';
import Toggle from '@/components/Toggle';
import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';

const DoctorAppointmentHistory = () => {
  const [appointmentStatus, setAppointmentStatus] = useState('waiting');
  const [selectedAppointmentId, setSelectedAppointmentId] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [rescheduleData, setRescheduleData] = useState({
    date: new Date(),
    time: "12:00"
  });

  useEffect(() => {
    fetchAppointments();
  }, []);

  useEffect(() => {
    console.log(appointments); // Check the structure of the data
  }, [appointments]);

  const fetchAppointments = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/professional/appointment-list',{
        method: "GET",
        headers: {"Content-Type":"application/json"},
        credentials: "include",
      });
      if (response.ok){
        const data = await response.json();
        setAppointments(data);
        console.log(data)
      }
    } catch (error) {
      console.error("Failed to fetch appointments", error);
    }
  };

  const handleToggleChange = (status) => {
    if (status=="scheduled"){
      setAppointmentStatus("scheduled"||"rescheduled");
    }else if (status == "waiting"){
      setAppointmentStatus("requested");
    }else
    setAppointmentStatus(status);
  };

  const handleAccept = async (appointmentId) => {
    try {
      const appointment =  appointments.find((app)=>app.appointment_id===appointmentId);
      console.log(appointment, appointmentId)
      if (appointment){
        const res = await fetch(`http://localhost:4000/api/professional/schedule-appointment`,{
          method: "POST",
          headers: {"Content-Type":"application/json"},
          credentials: 'include',
          body: JSON.stringify({"appointment_id": parseInt(appointmentId), "appointment_date": appointment.appointment_date})
        }); // Replace with actual endpoint
        if (res.ok){
          console.log("here!!!")
          alert(`Accepted appointment ${appointmentId}`);
          fetchAppointments(); // Refresh appointment list
        }
      }
    } catch (error) {
      console.error("Failed to accept appointment", error);
    }
  };

  const handleReschedule = async (appointmentId) => {
    try {
      const response = await fetch(`http://localhost:4000/api/professional/schedule-appointment`, {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        credentials: 'include',
        body: JSON.stringify({"appointment_id": parseInt(appointmentId), "appointment_date": `${rescheduleData.date}T${rescheduleData.time}:00.000Z`})
      }); 
      if (response.ok){
        alert(`Rescheduled appointment ${appointmentId}`);
        fetchAppointments(); 
      }
    } catch (error) {
      console.error("Failed to reschedule appointment", error);
    }
  };

  const handleUploadPrescription = async(appointmentId, event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'brainop-react-internship-test');
    try {
      const response = await fetch('https://api.cloudinary.com/v1_1/dojd1iecm/image/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      const imageUrl = data.secure_url;
      console.log(imageUrl)
      const res = await fetch(`http://localhost:4000/api/professional/send-prescription`, {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        credentials: 'include',
        body: JSON.stringify({
          "appointment_id": parseInt(appointmentId),
          "prescription": `${imageUrl}`
        }),
      });
      if (res.ok){
        alert(`Uploaded prescription for appointment ${appointmentId}`);
        fetchAppointments();
      }
    } catch (error) {
      console.error('Failed to upload prescription', error);
    }
  };

  const renderAppointments = () => {
    return (appointments || []).filter((app)=>{
      return app.status === appointmentStatus;
    }).map((appointment) => (
      <div key={appointment.appointment_id} className="p-4 border-b">
        <p><strong>Doctor:</strong> {appointment.medical_professional.name}</p>
        <p><strong>Date and Time:</strong> {new Date(appointment.appointment_date).toLocaleString()}</p>

        {appointmentStatus === 'requested' && (
          <div className="mt-4 space-x-2">
            <button
              onClick={() => handleAccept(appointment.appointment_id)}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              Accept
            </button>
            <button
              onClick={() => setSelectedAppointmentId(appointment.appointment_id)}
              className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
            >
              Reschedule
            </button>
            {appointment.appointment_id === selectedAppointmentId && (
              <div className="mt-4">
                <DatePicker
                  selected={rescheduleData.date}
                  onChange={(date) => setRescheduleData({ ...rescheduleData, date })}
                  className="border border-gray-300 p-2 rounded-md"
                />
                <TimePicker
                  onChange={(time) => setRescheduleData({ ...rescheduleData, time })}
                  value={rescheduleData.time}
                  className="border border-gray-300 p-2 rounded-md mt-2"
                />
                <button
                  onClick={() => handleReschedule(appointment.appointment_id)}
                  className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600"
                >
                  Confirm Reschedule
                </button>
              </div>
            )}
          </div>
        )}

        {appointmentStatus === 'scheduled' || appointmentStatus === 'rescheduled' && (
          <button
            className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600"
            onClick={() => alert(`Joining call for appointment ${appointment.appointment_id}`)}
          >
            Join Call
          </button>
        )}

        {appointmentStatus === 'completed' && (
          <div className="mt-4">
            <p>
              <strong>Prescription:</strong>
            </p>
            {appointment.prescription ? (
              <img
                src={appointment.prescription}
                alt="Prescription"
                className="w-full h-auto rounded-md shadow-md"
              />
            ) : (
              <div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleUploadPrescription(appointment.appointment_id, e)}
                  className="mt-2 text-sm"
                />
              </div>
            )}
          </div>
        )}
      </div>
    ));
  };

  return (
    <div>
      <NavBarApp />
      <div className="px-4 py-6 sm:px-6 sm:py-10 md:px-12 lg:px-24">
        <Toggle onToggleChange={handleToggleChange} />
        <div className="p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center sm:text-left">
            {appointmentStatus === 'waiting'
              ? 'Appointments Waiting for Action'
              : appointmentStatus === 'scheduled'
              ? 'Scheduled Appointments'
              : 'Completed Appointments'}
          </h2>
          <div>{renderAppointments()}</div>
        </div>
      </div>
    </div>
  );
};

export default withDoctorAuthentication(DoctorAppointmentHistory);
