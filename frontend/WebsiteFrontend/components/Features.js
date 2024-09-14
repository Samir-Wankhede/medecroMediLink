import Image from 'next/image';

const FeaturesSection = () => (
  <section className="text-gray-600 font-extrabold">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-black">
          Key Features 
        </h1>
      </div>
      <div className="flex flex-wrap -m-4">
        <div className="xl:w-1/3 md:w-1/2 p-4">
          <div className="border border-gray-200 p-6 rounded-lg">
            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <h2 className="text-lg text-cyan-500 font-bold title-font mb-2">Simple and Intuitive Interface</h2>
            <p className="leading-relaxed text-base text-black">
              Easy Language Selection
            </p>
            <p className="leading-relaxed  text-black">
              User-Friendly Design: Navigate effortlessly with a design tailored for those unfamiliar with technology.
            </p>
          </div>
        </div>
        <div className="xl:w-1/3 md:w-1/2 p-4">
          <div className="border border-gray-200 p-6 rounded-lg">
            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
            <h2 className="text-lg text-cyan-500 font-bold title-font mb-2">Local Medical Centers at Your Fingertips</h2>
            <p className="leading-relaxed text-base text-black">
              Find Nearby Medical Centers
            </p>
            <p className="leading-relaxed  text-black">
              Comprehensive Profiles: View detailed profiles of medical centers, including their specialties, available languages, and more.
            </p>
          </div>
        </div>
        <div className="xl:w-1/3 md:w-1/2 p-4">
          <div className="border border-gray-200 p-6 rounded-lg">
            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <h2 className="text-lg  text-cyan-500 font-bold title-font mb-2">Seamless Consultation Options</h2>
            <p className="leading-relaxed text-base text-black">
              Flexible Appointments: Schedule consultations both offline and online at your convenience.
            </p>
            <p className="leading-relaxed text-black">
              Real-Time Tracking: Keep track of your appointments.
            </p>
          </div>
        </div>
        <div className="xl:w-1/3 md:w-1/2 p-4">
          <div className="border border-gray-200 p-6 rounded-lg">
            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
              </svg>
            </div>
            <h2 className="text-lg text-cyan-500 font-bold title-font mb-2">Clear and Effective Communication</h2>
            <p className="leading-relaxed  text-black">
              Consultation Summaries: Access detailed summaries and prescriptions after consultations.
            </p>
          </div>
        </div>
        <div className="xl:w-1/3 md:w-1/2 p-4">
          <div className="border border-gray-200 p-6 rounded-lg">
            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
              </svg>
            </div>
            <h2 className="text-lg text-cyan-500 font-bold title-font mb-2">Multi-Language Support</h2>
            <p className="leading-relaxed  text-black">
              Overcome Language Barriers: Communicate with healthcare providers in your chosen language to avoid misunderstandings.
            </p>
          </div>
        </div>
        <div className="xl:w-1/3 md:w-1/2 p-4">
          <div className="border border-gray-200 p-6 rounded-lg">
            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h2 className="text-lg text-cyan-500 font-bold title-font mb-2">Smooth Video Call Consultation</h2>
            <p className="leading-relaxed  text-black">
              Easy and Friendly Video Call: Schedule video calls with ease.
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>
);

export default FeaturesSection;
