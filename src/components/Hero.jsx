import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas, PlanCanvas } from "./canvas";

const Hero = () => {
  return (
    <>
      <section className={`relative flex justify-center w-full h-screen  overflow-x-hidden `}>
        <div
          className={`container flex flex-col justify-center p-6 mx-auto sm:py-24 lg:py-24 lg:flex-row lg:justify-between ${styles.paddingX}`}
        >
          <div className="flex">
            <div className="flex flex-col justify-center items-center mt-15 lg:mt-5">
              <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
              <div className="w-1 sm:h-80 h-40 violet-gradient" />
            </div>
            <div className="flex flex-col justify-center pl-6   lg:max-w-md xl:max-w-lg lg:text-left">
              <h1
                className={`${styles.heroHeadText} text-white whitespace-nowrap`}
              >
                Hi, I'm <span className="text-[#915EFF]">Zeeshan</span>
              </h1>
              <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                I develop 3D visuals, user <br className="sm:block hidden" />
                interfaces and web applications
              </p>
            </div>
          </div>
          <div className="absolute top-40 right-64  w-[500px]  lg:mt-0 h-72 sm:h-80 lg:h-82 xl:h-112 2xl:h-128">
            <ComputersCanvas />
            {/* <img src="https://tecdn.b-cdn.net/img/new/ecommerce/horizontal/048.jpg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" /> */}
          </div>
        </div>

        <div className="absolute  xs:bottom-10 bottom-2 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
      </section>
      {/* <section className={`w-full h-[100vh] mx-auto  `}>
        <div
          className={`container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between ${styles.paddingX}`}
        >
          <div className="flex">
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
              <div className="w-1 sm:h-80 h-40 violet-gradient" />
            </div>
            <div className="flex flex-col justify-center pl-6   lg:max-w-md xl:max-w-lg lg:text-left">
              <h1
                className={`${styles.heroHeadText} text-white whitespace-nowrap`}
              >
                Hi, I'm <span className="text-[#915EFF]">Zeeshan</span>
              </h1>
              <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                I develop 3D visuals, user <br className="sm:block hidden" />
                interfaces and web applications
              </p>
            </div>
          </div>
          <div className=" container relative  mt-8 lg:mt-0 h-72 sm:h-80 lg:h-82 xl:h-112 2xl:h-128">
           
          </div>
        </div>
        <div className="relative xs:bottom-10 bottom-32 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
      </section> */}
    </>
  );
};

export default Hero;
