import React, { Suspense } from "react";
import Image from "next/image";
import MyImage from "@/images/me.jpg";
import IconList from "./IconList";

import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[90vh]">
      <div className="relative flex flex-col justify-center items-center gap-5">
        <Image
          src={MyImage}
          alt="My Picture"
          className="rounded-full w-56 h-56 object-cover mb-3 -z-50"
        />
        <div className="md:w-[400px] w-[300px] flex justify-center items-center flex-col">
          <h1 className="md:text-2xl text-xl font-bold mb-2 text-center">
            Hey! This is me, Min Phone Aung.
          </h1>
          <p className="text-center text-sm md:text-base">
            A passionate developer who love crafting the web with JavaScript,
            TypeScript, React, Node, Next.js and Laravel.
          </p>
        </div>

        <Button>Download CV</Button>
        <IconList />
      </div>
    </div>
  );
};

export default HeroSection;
