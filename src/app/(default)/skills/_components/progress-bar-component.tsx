"use client";
import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

function ProgressBarComponent({
  progress,
  color,
}: {
  progress: string | number;
  color: string;
}) {
  return (
    <div style={{ width: "100%", margin: "0 auto" }}>
      <ProgressBar
        completed={progress}
        bgColor={color}
        height="15px"
        customLabel=" "
        labelAlignment="center"
        labelColor="#fff"
        animateOnRender
      />
    </div>
  );
}

export default ProgressBarComponent;
