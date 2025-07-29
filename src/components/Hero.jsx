import React from "react";
import { motion } from "framer-motion";

const Hero = ({ scrollToAbout, scrollToMissions }) => {

  return (
    <section className="relative min-h-screen pt-28 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 text-white overflow-hidden">
      {/* Text content */}
      <div className="z-10 text-left max-w-xl mt-10 md:mt-0 transform translate-y-[-2.5rem] translate-x-4 md:translate-y-[-3.5rem] md:translate-x-6">
        <motion.h1 
          className="text-[50px] md:text-[80px] leading-tight font-['Anton'] font-normal"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="block text-white">PETER'S</span>
          <span className="block text-[#a62121]">VICTORY DIARIES</span>
        </motion.h1>
        <motion.p 
          className="mt-6 text-lg text-gray-300"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          A web-slinger's chronicle of battles fought and lives saved.
          After the world forgot Peter Parker, this digital journal became his only record of the hero he still is.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          className="mt-8 flex flex-wrap gap-4 items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          <div className="relative">
            <img
              src="/images/twinwebleft.png"
              className="absolute -top-4 -left-6 w-16 opacity-70"
              alt="web left"
            />
            <button
              onClick={scrollToMissions}
              className="bg-[#213A8F] text-white px-6 py-2 font-bold uppercase text-sm shadow-md hover:bg-[#1a2f70] transition"
            >
              NEW MISSION LOG
            </button>
          </div>
          <div className="relative">
            <img
              src="/images/twinwebright.png"
              className="absolute -top-4 -right-6 w-16 opacity-70"
              alt="web right"
            />
            <button
              onClick={scrollToAbout}
              className="border border-red-600 text-white px-6 py-2 font-bold uppercase text-sm hover:bg-red-600 transition"
            >
              VIEW ARCHIVES
            </button>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Spiderman animation - scrolls naturally with content */}
      <motion.div
        className="relative z-10 flex flex-col items-center mt-12 md:mt-0 md:ml-auto md:mr-12"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <motion.img
          src="/images/thread.jpg"
          alt="Web Thread"
          className="object-contain"
          style={{ height: `140px` }}
        />
        <motion.img
          src="/images/Spiderman.png"
          alt="Spiderman"
          className="w-[260px] md:w-[400px] ml-[-40px] md:ml-[-25px]"
          style={{
            filter: "drop-shadow(0 0 25px rgba(255,0,0,0.4))"
          }}
          animate={{ 
            y: [0, -5, 0],
            rotateY: [0, 2, 0, -2, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;