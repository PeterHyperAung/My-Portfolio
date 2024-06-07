import React from "react";
import { EducationTimelineInfo } from "../page";

const EducationTimelineElement = ({
  content,
  date,
  title,
}: EducationTimelineInfo) => {
  return (
    <div className="relative mb-12">
      <div className="w-4 h-4 bg-black rounded-full absolute -left-1.5 translate-y-1"></div>
      <div className="pl-10">
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        <p className="font-light text-gray-500 text-sm mb-1">{date}</p>
        <p className="text-gray-500 text-sm">{content}</p>
      </div>
    </div>
  );
};

export default EducationTimelineElement;
