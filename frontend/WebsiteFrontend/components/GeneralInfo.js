import React from 'react';

const GeneralInfo = () => {
  return (
    <section className="body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-slate-300">
          {/*  1 */}
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-extrabold title-font text-black">CHOUGH</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-black title-font mb-2">
              Precautions for Cough
              </h2>
              <p className="leading-relaxed  text-black font-bold">
              Stay Hydrated: Drink warm liquids like herbal teas or warm water to soothe the throat and thin mucus.
              </p>
              <p className="leading-relaxed text-black font-bold">
              Avoid Smoke and Dust: Stay away from polluted air, cooking smoke, and dust to prevent irritation of the lungs.
              </p>
            </div>
          </div>

          {/*  2 */}
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-extrabold title-font text-black">COLD</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-black title-font mb-2">
              Precautions for Cold
              </h2>
              <p className="leading-relaxed text-black font-bold">
              Rest and Stay Warm: Keep warm and rest to help your body fight the infection.
              </p>
              <p className="leading-relaxed text-black font-bold">
              Use a Clean Handkerchief: Always cover your nose and mouth when sneezing to prevent spreading germs.
              </p>
             
            </div>
          </div>

          {/* 3 */}
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="title-font font-extrabold text-black">FEVER</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-black title-font mb-2">
              Precautions for Fever
              </h2>
              <p className="leading-relaxed text-black font-bold">
              Drink Plenty of Fluids: Stay hydrated to prevent dehydration and help lower your body temperature.
              </p>
              <p className="leading-relaxed text-black font-bold">
              Wear Light Clothing: Use light clothes and keep the environment cool to help reduce body heat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneralInfo;
