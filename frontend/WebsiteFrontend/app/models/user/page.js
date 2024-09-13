"use client"
import GetMedicalHelp from "@/components/GetMedicalHelp";
import NavBarApp from "@/components/NavBarApp";
import AppHistory from "@/components/AppHistory";
import GeneralInfo from "@/components/GeneralInfo";
import Image from "next/image";
import withAuthentication from "@/authManagement/withAuthentication";

const User = () => {
  return (
    <>
      <NavBarApp />
      <div className="min-h-screen bg-white flex flex-col justify-between px-4 md:px-8 lg:px-16">
        <div className="p-6 flex flex-col items-center justify-center h-full space-y-10 md:space-y-12">
        
          {/* Main Content: MediLinkName and AppHistory */}
          <div className="flex flex-wrap md:flex-nowrap items-center justify-center md:space-x-12 w-full mb-32">

            {/* Get Medical Help button */}
            <div className="flex flex-col justify-center items-center w-full md:w-1/2 space-y-6">
              <GetMedicalHelp />
            </div>
            
            <div className="flex flex-col justify-center items-center w-full md:w-1/2 space-y-6">
              <AppHistory />
            </div>
            
            {/* Image next to content */}
            <div className="w-full md:w-1/2 flex justify-center items-center">
              <Image
                src="/images/doc.svg"
                alt="online doctor"
                width={500}
                height={500}
                className="max-w-full h-auto md:block"
              />
            </div>
          </div>

          {/* General Info Section */}
          <div className="w-full mt-12">
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 w-full" />
            <div className="w-full mt-14 text-center">
              <h1 className="text-black text-lg sm:text-xl md:text-2xl">
                Some general illness and precautions
              </h1>
              <GeneralInfo />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withAuthentication(User);
