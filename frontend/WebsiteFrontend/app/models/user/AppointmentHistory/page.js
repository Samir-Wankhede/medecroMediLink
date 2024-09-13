"use client";
import withUserAuthentication from '@/authManagement/withUserAuthentication';
import NavBarApp from '@/components/NavBarApp';
import Toggle from '@/components/Toggle';
import { useAuthContext } from '@/hooks/useAuthContext';
import React, { useState, useEffect } from 'react';

const AppointmentHistory = () => {
  const [appointmentStatus, setAppointmentStatus] = useState('waiting');
  const [appointments, setAppointments] = useState([]);
  const {user} = useAuthContext();

  useEffect(()=>{
    const fetchRecords = async() => {
      if(user){
        const response = await fetch('http://localhost:4000/api/user/appointment-list',{
          method: "GET",
          headers: {"Content-Type":"application/json"},
          credentials: 'include'
        })
        if (response.ok){
          const data = await response.json();
          console.log(data)
          setAppointments(data);
        }
      }
    }
    fetchRecords();
  },[])

  const handleToggleChange = (status) => {
    if (status=="scheduled"){
      setAppointmentStatus("scheduled"||"rescheduled");
    }else if (status == "waiting"){
      setAppointmentStatus("requested");
    }else
    setAppointmentStatus(status);
  };

  const renderAppointments = () => {
    return appointments.filter((app)=>{
      return app.status == appointmentStatus;
    }).map((appointment) => (
      <div key={appointment.appointment_id} className="p-4 border-b">
        <p><strong>Doctor:</strong> {appointment.medical_professional.name}</p>
        <p><strong>Date and Time:</strong> {new Date(appointment.appointment_date).toLocaleString()}</p>

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

export default withUserAuthentication(AppointmentHistory) ;
