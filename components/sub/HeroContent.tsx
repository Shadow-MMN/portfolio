"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon, ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center text-center px-6 md:px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            FullStack Developer Portfolio
          </h1>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            Project experience
          </span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a Full Stack Software Engineer with 2+ years of hands-on
          experience building scalable web and mobile applications. I have
          completed 15+ real-world projects, improving user engagement by up to
          30% through responsive design and optimized performance. Skilled
          across the stack (React, Next.js, Tailwind, MongoDB, Express), I
          specialize in delivering clean, efficient solutions that blend modern
          UI/UX with robust backend systems.
        </motion.p>

        {/* Enhanced Download CV Button */}
        <motion.div variants={slideInFromLeft(1)} className="max-w-[200px]">
          <motion.div
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/cv.pdf"
              download={true}
              className="relative inline-flex items-center justify-center gap-2 py-3 px-6 button-primary text-center text-white cursor-pointer rounded-lg w-full overflow-hidden font-semibold"
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                initial={{ x: "-100%" }}
                whileHover={{
                  x: "200%",
                  transition: { duration: 0.8, ease: "easeInOut" },
                }}
              />

              {/* Button content */}
              <span className="relative z-10 flex items-center gap-2">
                <motion.span
                  initial={{ opacity: 1 }}
                  whileHover={{ opacity: 1 }}
                >
                  Download CV
                </motion.span>

                {/* Animated download icon */}
                <motion.div
                  initial={{ y: 0 }}
                  whileHover={{
                    y: [0, 3, 0],
                    transition: {
                      duration: 0.6,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                    },
                  }}
                >
                  <ArrowDownTrayIcon className="w-5 h-5" />
                </motion.div>
              </span>

              {/* Pulse effect on hover */}
              <motion.div
                className="absolute inset-0 rounded-lg border-2 border-purple-500/50"
                initial={{ scale: 1, opacity: 0 }}
                whileHover={{
                  scale: [1, 1.05, 1],
                  opacity: [0, 0.5, 0],
                  transition: {
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  },
                }}
              />
            </Link>

            {/* Glowing background effect */}
            <motion.div
              className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 blur-xl opacity-0 -z-10"
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
