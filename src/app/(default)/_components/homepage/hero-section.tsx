import React, { Suspense } from "react";
import Image from "next/image";
import MyImage from "@/images/me.jpg";
import IconList from "./IconList";

import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[90vh] -z-10">
      <div className="relative flex flex-col justify-center items-center gap-5 -z-10">
        <Image
          src={MyImage}
          alt="My Picture"
          className="rounded-full w-44 h-44 md:w-52 md:h-52 object-cover mb-3 -z-50"
        />
        <div className="md:w-[390px] w-[300px] flex justify-center items-center flex-col">
          <h1 className="md:text-2xl text-xl font-bold mb-2 text-center -z-10">
            Hey! This is me, Min Phone Aung.
          </h1>
          <p className="text-center text-sm md:text-base -z-10">
            A passionate developer who love crafting the web with JavaScript,
            TypeScript, React, Node, Next.js and Laravel.
          </p>
        </div>

        <Button className="-z-10">Download CV</Button>
        <IconList />
      </div>
    </div>
  );
};

export default HeroSection;
