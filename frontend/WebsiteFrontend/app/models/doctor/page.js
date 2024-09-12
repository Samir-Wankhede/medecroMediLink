"use client";
import NavBarApp from '@/components/NavBarApp';
import Toggle from '@/components/Toggle';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';

const DoctorAppointmentHistory = () => {
  const [appointmentStatus, setAppointmentStatus] = useState('waiting');
  
  // State to track which appointment is selected for rescheduling
  const [selectedAppointmentId, setSelectedAppointmentId] = useState(null);

  const [appointments, setAppointments] = useState({
    waiting: [
      {
        id: 1,
        patient: 'John Doe',
        time: '12:00 PM',
        date: '2024-09-15',
        status: 'Waiting',
        requestedTime: '12:00 PM',
        requestedDate: '2024-09-15',
      },
      // Add more waiting appointments here
    ],
    scheduled: [
      {
        id: 2,
        patient: 'Jane Smith',
        time: '3:00 PM',
        date: '2024-09-16',
        status: 'Scheduled',
      },
      // Add more scheduled appointments here
    ],
    completed: [
      {
        id: 3,
        patient: 'Bob Johnson',
        time: '11:00 AM',
        date: '2024-09-10',
        status: 'Completed',
        prescriptionImage: null,
      },
      // Add more completed appointments here
    ],
  });

  const [rescheduleData, setRescheduleData] = useState({
    date: new Date(),
    time: "12:00"
  });

  const handleToggleChange = (status) => {
    setAppointmentStatus(status);
  };

  const handleAccept = (appointmentId) => {
    const appointment = appointments.waiting.find((a) => a.id === appointmentId);
    if (appointment) {
      const updatedWaiting = appointments.waiting.filter((a) => a.id !== appointmentId);
      const updatedScheduled = [...appointments.scheduled, { ...appointment, status: 'Scheduled' }];
      setAppointments({
        ...appointments,
        waiting: updatedWaiting,
        scheduled: updatedScheduled,
      });
      alert(`Accepted appointment ${appointmentId}`);
    }
  };

  const handleReschedule = (appointmentId) => {
    const appointment = appointments.waiting.find((a) => a.id === appointmentId);
    if (appointment) {
      const updatedWaiting = appointments.waiting.map((a) =>
        a.id === appointmentId
          ? { ...a, date: rescheduleData.date.toLocaleDateString(), time: rescheduleData.time }
          : a
      );
      setAppointments({
        ...appointments,
        waiting: updatedWaiting,
      });
      alert(`Rescheduled appointment ${appointmentId}`);
    }
  };

  const handleUploadPrescription = (appointmentId, event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      const updatedCompleted = appointments.completed.map((a) =>
        a.id === appointmentId ? { ...a, prescriptionImage: imageUrl } : a
      );
      setAppointments({
        ...appointments,
        completed: updatedCompleted,
      });
      alert(`Uploaded prescription for appointment ${appointmentId}`);
    }
  };

  const renderAppointments = () => {
    return appointments[appointmentStatus].map((appointment) => (
      <div key={appointment.id} className="p-4 border-b">
        <p className="text-sm md:text-base">
          <strong>Patient:</strong> {appointment.patient}
        </p>
        <p className="text-sm md:text-base">
          <strong>Date:</strong> {appointment.date}
        </p>
        <p className="text-sm md:text-base">
          <strong>Time:</strong> {appointment.time}
        </p>

        {appointmentStatus === 'waiting' && (
          <div className="mt-4 space-x-2">
            <button
              onClick={() => handleAccept(appointment.id)}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              Accept
            </button>
            <button
              onClick={() => setSelectedAppointmentId(appointment.id)} // Set the selected appointment
              className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
            >
              Reschedule
            </button>
            {appointment.id === selectedAppointmentId && (
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
                  onClick={() => handleReschedule(appointment.id)}
                  className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600"
                >
                  Confirm Reschedule
                </button>
              </div>
            )}
          </div>
        )}

        {appointmentStatus === 'scheduled' && (
          <button
            className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600"
            onClick={() => alert(`Joining call for appointment ${appointment.id}`)}
          >
            Join Call
          </button>
        )}

        {appointmentStatus === 'completed' && (
          <div className="mt-4">
            <p>
              <strong>Prescription:</strong>
            </p>
            {appointment.prescriptionImage ? (
              <img
                src={appointment.prescriptionImage}
                alt="Prescription"
                className="w-full h-auto rounded-md shadow-md"
              />
            ) : (
              <div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleUploadPrescription(appointment.id, e)}
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

export default DoctorAppointmentHistory;
