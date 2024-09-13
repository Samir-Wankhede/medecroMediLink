"use client";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import doctorsData from "@/app/data/doctorData/page";
import withUserAuthentication from "@/authManagement/withUserAuthentication";

function AppointmentEnquiry() {
  const searchParams = useSearchParams();
  const doctorId = searchParams.get("doctorId");
  const doctorname = searchParams.get("doctorName");
  const appointmentType = searchParams.get("appointmentType");

  const [doctor, setDoctor] = useState(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const router = useRouter();

  useEffect(() => {
    setDoctor(doctorname);
  }, [doctorname]);

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:4000/api/user/request-appointment',{
      method: "POST",
      headers: {"Content-Type":"application/json"},
      credentials: 'include',
      body: JSON.stringify({"professional_id": parseInt(doctorId), "appointment_date": `${date}T${time}:00.000Z`})
    })
    if (response.ok){
      alert(
        `Appointment booked with ${doctor} on ${date} at ${time} (${appointmentType})`
      );
    }
    else{
      alert(
        `An error occured in booking`
      );
    }
    return router.replace('/models/user');
  };

  if (!doctor) {
    return <p>Loading doctor details...</p>;
  }

  return (
    <div className="bg-white min-h-screen p-4">
      <h1 className="text-2xl font-bold text-center mb-6">
        Book an Appointment with {doctor}
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 mx-auto justify-center flex-col items-center"
      >
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
        {appointmentType === "offline" && (
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
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 m-6 rounded-md hover:bg-blue-600"
          >
            Book Appointment
          </button>
        </div>
      </form>
    </div>
  );
}

export default withUserAuthentication(AppointmentEnquiry);