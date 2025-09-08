import React from "react";
import { Timeline } from "../sub/Timeline";
import { experiences } from "@/constants";
const Experience = () => {
  return (
    <div
      id="experience"
      className="w-full flex items-center justify-center px-6 md:px-0"
    >
      <Timeline data={experiences} />
    </div>
  );
};

export default Experience;
