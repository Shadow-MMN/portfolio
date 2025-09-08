"use client";
import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "About me", href: "#about-me" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Testimonial", href: "#testimonial" },
  { name: "Projects", href: "#projects" },
  { name: "Contact me", href: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 sm:px-6 lg:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        {/* Logo */}
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/nav.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin size-12"
          />
          <span className="font-black ml-[10px] text-xl hidden sm:block text-gray-300">
            e4_
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex w-[700px] h-full flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 font-medium text-gray-300 rounded-md overflow-hidden"
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 8px 20px rgba(139, 92, 246, 0.3)",
                  background: "linear-gradient(to right, #8B5CF6, #06B6D4)",
                }}
                whileTap={{ scale: 0.95, y: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <span className="relative z-10">{link.name}</span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Desktop Socials */}
        <div className="hidden md:flex flex-row gap-5">
          {Socials.map((social) => (
            <a key={social.name} href={social.herf} target="_blank">
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
                className="cursor-pointer hover:opacity-75 transition-opacity"
              />
            </a>
          ))}
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={toggleMenu}
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-gray-300 transition-transform ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-300 transition-opacity ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-300 transition-transform ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-[65px] left-0 w-full bg-black/70 backdrop-blur-md border-t border-[#7042f861] shadow-lg">
          <div className="flex flex-col items-center py-6 space-y-6">
            <div className="flex flex-col items-center space-y-4 text-gray-200">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="relative px-4 py-2 font-medium text-gray-300 rounded-md overflow-hidden"
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                    boxShadow: "0 8px 20px rgba(139, 92, 246, 0.3)",
                    background: "linear-gradient(to right, #8B5CF6, #06B6D4)",
                  }}
                  whileTap={{ scale: 0.95, y: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <span className="relative z-10">{link.name}</span>
                </motion.a>
              ))}
            </div>

            <div className="flex flex-row gap-5 pt-4 border-t border-[#7042f861] w-full justify-center">
              {Socials.map((social) => (
                <a key={social.name} href={social.herf} target="_blank">
                  <Image
                    src={social.src}
                    alt={social.name}
                    width={28}
                    height={28}
                    className="cursor-pointer hover:opacity-75 transition-opacity"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
