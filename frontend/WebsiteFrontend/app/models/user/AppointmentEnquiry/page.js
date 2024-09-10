"use client";
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import doctorsData from '@/app/data/doctorData/page';

export default function AppointmentEnquiry() {
  const searchParams = useSearchParams();
  const doctorId = searchParams.get("doctorId");
  const appointmentType = searchParams.get("appointmentType");

  const [doctor, setDoctor] = useState(null);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    const selectedDoctor = doctorsData.find(doc => doc.name === doctorId);
    setDoctor(selectedDoctor);
  }, [doctorId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment booked with ${doctor?.name} on ${date} at ${time} (${appointmentType})`);
  };

  if (!doctor) {
    return <p>Loading doctor details...</p>;
  }

  return (
    <div className="bg-white min-h-screen p-4">
      <h1 className="text-2xl font-bold text-center mb-6">
        Book an Appointment with {doctor.name}
      </h1>

      <div className="text-lg mb-6">
        <p><strong>Specialization:</strong> {doctor.specialization}</p>
        <p><strong>Location:</strong> {doctor.location}</p>
        <p><strong>Languages:</strong> {doctor.languages.join(', ')}</p>
        <p><strong>Phone No:</strong> {doctor.phone}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <div>
          <label>Time:</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        {appointmentType === 'offline' && (
          <div>
            <label>Preferred Location (Offline):</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
        )}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Book Appointment
        </button>
      </form>
    </div>
  );
}
