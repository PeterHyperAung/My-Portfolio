import React from "react";
import ProgressBarComponent from "./progress-bar-component";
import { Html5Original } from "devicons-react";
type ProgressBarItemProps = {
  title: string;
  Icon: typeof Html5Original;
  progress: string | number;
  color: string;
};

const ProgressBarItem = ({
  progress,
  color,
  Icon,
  title,
}: ProgressBarItemProps) => {
  return (
    <div className="my-10 w-[100%]">
      <div className="flex flex-row items-center gap-3 mb-3">
        <div>
          <Icon size="40" />
        </div>
        <span className="font-medium">{title}</span>
      </div>
      <ProgressBarComponent progress={progress} color={color} />
    </div>
  );
};

export default ProgressBarItem;
