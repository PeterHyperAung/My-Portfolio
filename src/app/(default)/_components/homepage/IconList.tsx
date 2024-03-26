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
    "-top-20 -left-10",
    "-top-20 -right-10",
    "top-44 -right-40",
    "top-44 -left-40",
    "-bottom-20 -left-10",
    "-bottom-20 -right-10",
  ];

  return (
    <>
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
