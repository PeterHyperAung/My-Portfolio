import React from "react";

import type { EducationTimelineInfo } from "../page";
import EducationTimelineElement from "./edu-timeline-element";

const EducationTimeline = ({
  educationInfos,
}: {
  educationInfos: EducationTimelineInfo[];
}) => {
  return (
    <div className="relative">
      <div className="h-[97%] w-1 bg-slate-700 rounded-full absolute top-[50%] -translate-y-[50%] -z-10"></div>
      <div>
        {educationInfos.map((info) => (
          <EducationTimelineElement key={info.title} {...info} />
        ))}
      </div>
    </div>
  );
};

export default EducationTimeline;
