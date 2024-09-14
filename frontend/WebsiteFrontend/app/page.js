'use client';
import withLoggedinAuthentication from '@/authManagement/withLoggedinAuthentication';
import Loader from '@/components/Loader/Loader';
import NavBar from '@/components/Navbar';
import { useAuthContext } from '@/hooks/useAuthContext';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { useLayoutEffect } from 'react';
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight"; // Corrected import
import { motion } from "framer-motion";
import FeaturesSection from "@/components/Features";

 function Home() {
  const { user } = useAuthContext();
  // useLayoutEffect(()=>{
  //   if(user){
  //     redirect(`/models/${user.role}`)
  //   }
  // },[user])
  return (
    user? <Loader/> :
    <>
      <NavBar />
      <div className="min-h-screen">
      <HeroHighlight className="mt-[14rem] mb-10">
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.7,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
        >
          With MediLink, expert care is always within reach, connecting you to
          the{" "}
          <Highlight className="text-black dark:text-white ">
            best doctors, anytime and anywhere
          </Highlight>
        </motion.h1>
      </HeroHighlight>
      <HeroHighlight>
        <div className=" h-full mt-28 ">
          <section className="container px-4 py-8 mx-auto lg:flex lg:items-center lg:space-x-8 lg:h-128">
            <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
              <h1 className="text-3xl leading-snug text-black md:text-4xl lg:text-5xl">
                <span className="font-semibold">Addressing every need,</span>{" "}
                Anytime, <br className="hidden lg:block" />
                <span className="font-semibold underline decoration-primary">
                  Anywhere!
                </span>
              </h1>
              <p className="mt-2  font-bold text-lg text-cyan-500 md:text-xl lg:text-2xl">
              <Highlight className="text-black dark:text-white">
                The app provides remote consultations via video or audio calls,
                allowing patients to connect with doctors without traveling.
              </Highlight>
              </p>
            </div>
            <div className="w-full mt-4 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-end">
              <Image
                src="/images/download.svg"
                alt="Remote healthcare services"
                width={500}
                height={500}
                className="w-full max-w-md animate-float"
              />
            </div>
          </section>
          <section className="pt-16">
            <div className="container px-4 mx-auto text-center">
              <p className="text-lg font-bold md:text-xl lg:text-2xl">
                <span className="inline-block bg-slate-700 text-cyan-200 rounded-lg border border-emerald-400 px-2 py-1">
                  "Welcome to MediLink"
                </span>{" "}
                MediLink is designed to bring quality healthcare to rural and
                remote areas, overcoming geographic and language barriers. Our
                user-friendly app connects you with top doctors through a simple
                interface, ensuring you receive the care you need without
                traveling.
              </p>
            </div>
          </section>
        </div>
      </HeroHighlight>
      <HeroHighlight>
        <div className="container px-4 h-full mx-auto">
          <FeaturesSection />
        </div>
      </HeroHighlight>
      </div>
    </>
  );
}

export default withLoggedinAuthentication(Home);