"use client";
import withUserAuthentication from "@/authManagement/withUserAuthentication";
import DoctorsList from "@/components/DoctorCard";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

const Page = () => {
  return (
    <>
      <HeroHighlight>
        <div className=" min-h-screen">
          <h1 className="text-3xl font-bold text-center mb-6 text-black pt-6 ">
              Book Appointment
          </h1>
          <DoctorsList />
        </div>
      </HeroHighlight>
    </>
  );
};

export default withUserAuthentication(Page);
