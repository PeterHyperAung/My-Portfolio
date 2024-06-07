import React from "react";
import EducationTimeline from "./_components/edu-timeline";
type Props = {};

export type EducationTimelineInfo = {
  title: string;
  date: string;
  content: React.ReactNode;
};

const EducationPage = (props: Props) => {
  return (
    <div className="xl:max-w-[1200px] md:max-w-[700px] sm:max-w-[400px] max-w-[320px] xl:mt-12 mt-10 mx-auto mb-10">
      <div>
        <h2 className="text-2xl font-bold text-center mb-12">Education</h2>
      </div>
      <div>
        <EducationTimeline />
      </div>
    </div>
  );
};

export default EducationPage;
