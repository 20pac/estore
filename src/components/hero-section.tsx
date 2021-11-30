import React from "react";

import Image from "next/image";

import BlurGraphic from "@public/assets/blur-1.svg";
import LaptopGraphic from "@public/assets/laptop-graphic.svg";

export const HeroSection = () => {
  return (
    <div className="mt-10 flex flex-row items-center justify-between">
      <div className="overflow-visible">
        <h1 className="font-bold 1440:text-largest xl:text-54 text-48">
          Learn{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-three to-four">
            android development
          </span>{" "}
        </h1>
        <h1 className="font-bold 1440:text-largest xl:text-54 text-48">from industry experts</h1>
        <p className="italic 1440:text-large xl:text-medium font-light text-24 my-6">
          Next cohort starts 3rd Jan 2022.
        </p>
        <div className="absolute top-10 pointer-events-none z-10">
          <Image src={BlurGraphic} className="absoluteImage" />
        </div>
        <button className="text-extraSmall py-3 px-5 text-white rounded-lg bg-gradient-to-r from-two to-one">
          Register now
        </button>
      </div>
      <div unselectable="on" className="z-0">
        <div className="relative w-11 1161:w-12 1302:w-13">
          <Image src={LaptopGraphic} unselectable="on" />
        </div>
      </div>
    </div>
  );
};

export const HeroSectionMobile = () => {
  return (
    <div className="mt-8 flex flex-col justify-between items-center">
      <div>
        <h1 className="font-bold text-small">
          Learn{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-three to-four">
            android development
          </span>
        </h1>
        <h1 className="font-bold text-small">from industry experts</h1>
        <div className="my-5">
          <Image src={LaptopGraphic} />
        </div>
        <p className="italic text-extraSmall my-5">Next cohort starts 3rd Jan 2022.</p>
        <button className="shadow-xl text-mini py-2 px-3 text-white rounded-lg bg-gradient-to-r from-two to-one">
          Register now
        </button>
      </div>
    </div>
  );
};
