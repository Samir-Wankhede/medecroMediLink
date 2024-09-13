"use client";
import withUserAuthentication from "@/authManagement/withUserAuthentication";
import DoctorsList from "@/components/DoctorCard";

const Page = () => {
  return (
    <div className="bg-white min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 text-black pt-6">
        Book Appointment
      </h1>
      <DoctorsList />
    </div>
  );
};

export default withUserAuthentication(Page);
