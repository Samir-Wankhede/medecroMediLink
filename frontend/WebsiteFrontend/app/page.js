'use client';
import NavBar from '@/components/Navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="bg-white min-h-screen">
        <section className="container px-4 py-10 mx-auto lg:flex lg:items-center lg:space-x-8 lg:h-128">
          <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
            <h1 className="text-3xl leading-snug text-black md:text-4xl lg:text-5xl">
              <span className="font-semibold">Addressing every need,</span> Anytime, <br className="hidden lg:block" /><span className="font-semibold underline decoration-primary">Anywhere!</span>
            </h1>
            <p className="mt-4 text-lg text-gray-500 md:text-xl lg:text-2xl">
              The app provides remote consultations via video or audio calls, allowing patients to connect with doctors without traveling.
            </p>
          </div>
          <div className="w-full mt-4 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-end">
            <Image
              src="/images/download.svg"
              alt="Tailwind CSS components"
              width={500}
              height={500}
              className="w-full max-w-md"
            />
          </div>
        </section>
        <section className="bg-white py-8">
          <div className="container px-4 mx-auto text-center">
            <p className="text-lg font-bold text-black md:text-xl lg:text-2xl">
              Connecting Patients to the best doctors
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
