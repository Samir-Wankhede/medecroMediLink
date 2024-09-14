"use client";
import GetMedicalHelp from "@/components/GetMedicalHelp";
import NavBarApp from "@/components/NavBarApp";
import AppHistory from "@/components/AppHistory";
import GeneralInfo from "@/components/GeneralInfo";
import Image from "next/image";
import withAuthentication from "@/authManagement/withAuthentication";
import { HeroHighlight } from "@/components/ui/hero-highlight";

const User = () => {
  return (
    <>
      <NavBarApp />
      <HeroHighlight>
        <div className="min-h-screen flex flex-col justify-between px-4 md:px-8 lg:px-16">
          <div className="p-6 flex flex-col items-start h-full space-y-8 md:space-y-10">
            <div className="flex flex-col md:flex-row justify-between w-full items-center mt-32">
              <div className="w-full md:w-1/2 flex justify-start">
                <Image
                  src="/images/AllrounderDoc.png"
                  alt="Allrounder Doctor"
                  width={1000}
                  height={1000}
                  className="max-w-full h-auto animate-float"
                />
              </div>
              <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-4 md:mt-0 md:pr-20">

                <GetMedicalHelp />
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between w-full items-center mt-12">
              <div className="w-full md:w-1/2 flex justify-center md:justify-start md:pl-52">
                <AppHistory />
              </div>
              <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-4 md:mt-0">
                <Image
                  src="/images/stethoscope.png"
                  alt="Stethoscope"
                  width={450}
                  height={450}
                  className="max-w-full h-auto animate-float"
                />
              </div>
            </div>

            {/* General Info Section */}
            <div className="w-full mt-10">
              <hr className="h-px my-6 border-0 border-cyan-400 bg-cyan-400 w-full" />
              <div className="w-full mt-8 text-center">
                <h1 className="text-gray-800 text-lg sm:text-xl md:text-4xl">
                  Some General illness and Precautions
                </h1>
                <GeneralInfo />
              </div>
            </div>
          </div>
        </div>
      </HeroHighlight>
    </>
  );
};

export default withAuthentication(User);
