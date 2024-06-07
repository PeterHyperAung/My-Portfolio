import React from "react";

import type { EducationTimelineInfo } from "../page";

const EducationTimeline = ({
  educationInfo,
}: {
  educationInfo: EducationTimelineInfo;
}) => {
  return (
    <div className="h-[800px]">
      <div className="h-[80%] w-1 bg-black rounded-full"></div>
    </div>
  );
};

export default EducationTimeline;
