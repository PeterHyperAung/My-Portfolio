"use client";

import React, { useMemo, useState, useEffect } from "react";
import {
  NodejsOriginal,
  ReactOriginal,
  LaravelOriginal,
  NextjsOriginal,
  JavascriptOriginal,
  TypescriptOriginal,
} from "devicons-react";
import HomePageIcon from "./homepage-icon";

const IconList = () => {
  const [isClient, setIsClient] = useState(false);
  const icons = useMemo(
    () =>
      [
        {
          id: 1,
          icon: NodejsOriginal,
        },
        {
          id: 2,
          icon: ReactOriginal,
        },
        {
          id: 3,
          icon: LaravelOriginal,
        },
        {
          id: 4,
          icon: NextjsOriginal,
        },
        {
          id: 5,
          icon: JavascriptOriginal,
        },
        {
          id: 6,
          icon: TypescriptOriginal,
        },
      ].sort(() => Math.random() - 0.5),
    []
  );

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const classNamesList = [
    "-top-16 left-7",
    "-top-16 right-7",
    "top-44 -right-28 md:block hidden",
    "top-44 -left-28 md:block hidden",
    "-bottom-12 left-7",
    "-bottom-12 right-7",
  ];

  return (
    <>
      <div className="-right-2"></div>
      {icons.map((iconObj, index) => (
        <HomePageIcon
          key={iconObj.id}
          Icon={iconObj.icon}
          index={index}
          className={classNamesList[index]}
        />
      ))}
    </>
  );
};

export default IconList;
