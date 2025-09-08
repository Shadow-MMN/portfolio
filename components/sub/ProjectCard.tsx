"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface Props {
  src: string;
  title: string;
  description: string;
  href: string;
}

const ProjectCard = ({ src, title, description, href }: Props) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] group"
      whileHover={{
        scale: 1.02,
        borderColor: "#8B5CF6",
        boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.25)",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 z-10"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Image container with zoom effect */}
      <div className="overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Image
            src={src}
            alt={title}
            width={1000}
            height={1000}
            className="w-full object-contain"
          />
        </motion.div>
      </div>

      <div className="relative p-4 z-20">
        <motion.h1
          className="text-2xl font-semibold text-white group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300"
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="mt-2 text-gray-300"
          whileHover={{ color: "#F3F4F6" }}
          transition={{ duration: 0.3 }}
        >
          {description}
        </motion.p>

        {/* Enhanced animated button */}
        <div className="mt-4">
          <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg overflow-hidden"
            whileHover={{
              scale: 1.05,
              y: -2,
              boxShadow: "0 10px 25px rgba(139, 92, 246, 0.4)",
              background: "linear-gradient(to right, #8B5CF6, #06B6D4)",
            }}
            whileTap={{ scale: 0.98, y: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            {/* Animated shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
              initial={{ x: "-100%" }}
              whileHover={{
                x: "200%",
                transition: { duration: 0.6, ease: "easeInOut" },
              }}
            />

            {/* Button content */}
            <span className="relative z-10 flex items-center gap-2">
              Live Demo
              {/* Animated arrow icon */}
              <motion.svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </motion.svg>
            </span>
          </motion.a>
        </div>
      </div>

      {/* Glowing border effect */}
      <motion.div
        className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 blur-xl -z-10"
        initial={{ opacity: 0 }}
        whileHover={{
          opacity: 0.2,
          scale: 1.02,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default ProjectCard;
