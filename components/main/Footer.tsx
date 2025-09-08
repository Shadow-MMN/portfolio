"use client";
import React from "react";
import Image from "next/image";
import { Socials } from "@/constants";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-transparent text-gray-200 shadow-lg p-6 border-t border-[#2A0E61]/40">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center space-y-4">
        {/* Social Icons */}
        <div className="flex gap-6">
          {Socials.map((social) => (
            <a
              key={social.name}
              href={social.herf}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
              <Image
                src={social.src}
                alt={social.name}
                width={28}
                height={28}
              />
            </a>
          ))}
        </div>

        {/* Dynamic Year */}
        <div className="text-sm text-gray-400 text-center">
          &copy; e4_ {year} Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
