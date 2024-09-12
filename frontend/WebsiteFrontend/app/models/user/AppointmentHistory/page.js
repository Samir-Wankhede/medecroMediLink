"use client";
import NavBarApp from '@/components/NavBarApp';
import Toggle from '@/components/Toggle';
import React, { useState } from 'react';

const AppointmentHistory = () => {
  const [appointmentStatus, setAppointmentStatus] = useState('waiting');

  const appointments = {
    waiting: [
      { id: 1, doctor: 'Dr. Smith', time: '12:00 PM', date: '2024-09-15', status: 'Waiting' },
      { id: 2, doctor: 'Dr. Johnson', time: '14:00 PM', date: '2024-09-17', status: 'Waiting' },
      { id: 3, doctor: 'Dr. Allen', time: '16:00 PM', date: '2024-09-19', status: 'Waiting' },
      // Add more waiting appointments here
    ],
    scheduled: [
      { id: 2, doctor: 'Dr. Johnson', time: '3:00 PM', date: '2024-09-16', status: 'Scheduled' },
      // Add more scheduled appointments here
    ],
    completed: [
      { id: 3, doctor: 'Dr. Allen', time: '11:00 AM', date: '2024-09-10', status: 'Completed' },
      // Add more completed appointments here
    ],
  };

  const handleToggleChange = (status) => {
    setAppointmentStatus(status);
  };

  const renderAppointments = () => {
    return appointments[appointmentStatus].map((appointment) => (
      <div key={appointment.id} className="p-4 border-b">
        <p><strong>Doctor:</strong> {appointment.doctor}</p>
        <p><strong>Date:</strong> {appointment.date}</p>
        <p><strong>Time:</strong> {appointment.time}</p>

        {appointmentStatus === 'scheduled' && (
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
            Join Call
          </button>
        )}
      </div>
    ));
  };

  return (
    <div>
      <NavBarApp />
      <Toggle onToggleChange={handleToggleChange} />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">
          {appointmentStatus === 'waiting'
            ? 'Appointments in Waiting List'
            : appointmentStatus === 'scheduled'
            ? 'Scheduled Appointments'
            : 'Completed Appointments'}
        </h2>
        <div>{renderAppointments()}</div>
      </div>
    </div>
  );
};

export default AppointmentHistory;
