import React from "react";
import EducationTimeline from "./_components/edu-timeline";
type Props = {};

export type EducationTimelineInfo = {
  title: string;
  date: string;
  content?: React.ReactNode;
};

const educationInfos = [
  {
    title: "NCC level 4 Diploma In Computing, KBTC School of IT",
    date: "2024 Jun - Present",
    content: null,
  },
  {
    title: "NCC Level 3 Diploma In Computing, KBTC School of IT",
    date: "2023 Jul - 2024 Mar",
    content: (
      <ul className="list-disc list-inside">
        <li>Pass with distinction in all subjects</li>
      </ul>
    ),
  },
  {
    title: "GED, KBTC Pre University",
    date: "2023 Aug - 2024 Feb",
    content: (
      <ul className="list-disc list-inside">
        <li>Credit in Maths</li>
        <li>College Ready in Science and Social Studies</li>
        <li>Pass in RLA</li>
      </ul>
    ),
  },
];

const EducationPage = (props: Props) => {
  return (
    <div className="md:max-w-[560px] sm:max-w-[520px] max-w-[320px] xl:mt-12 mt-10 mx-auto mb-10">
      <div>
        <h2 className="text-2xl font-bold text-center mb-12">Education</h2>
      </div>
      <div>
        <EducationTimeline educationInfos={educationInfos} />
      </div>
    </div>
  );
};

export default EducationPage;
