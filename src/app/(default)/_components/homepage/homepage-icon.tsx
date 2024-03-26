import React from "react";

type Props = { className?: string; size: string | number | undefined };

type HomePageIconProps = {
  Icon: React.FunctionComponent<Props>;
  className: string;
  index: number;
};

export default function HomePageIcon({
  Icon,
  className,
  index = 0,
}: HomePageIconProps) {
  return (
    <Icon
      className={`absolute ${className} drop-shadow-lg animate-bounce-soft animation-delay-${index} -z-10`}
      size={40}
    />
  );
}
