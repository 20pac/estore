import React from "react";

import Image from "next/image";

import CheckmarkIcon from "@public/assets/chemark-icon.svg";
import WhatBuildGraphic from "@public/assets/what-build-graphic.gif";

export const WhatBuild = () => (
  <div className="flex flex-row items-center mt-10">
    <div className="flex-1">
      <div className="pr-7">
        <Image src={WhatBuildGraphic} className="rounded-xl" />
      </div>
    </div>
    <div className="flex-1">
      <h1 className="font-bold 1440:text-largest xl:text-54 text-48 mb-5">
        What you&apos;ll{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-three to-four">build.</span>
      </h1>
      <p className="text-small font-bold text-large mb-6">The Big Project - Building a music streaming app!</p>
      <div>
        <div className="text-extraSmall xl:text-small mb-3 xl:mb-5 flex items-center">
          <Image src={CheckmarkIcon} width={24} />{" "}
          <span className="ml-4">Find all your favourite artists and stream their music</span>
        </div>
        <div className="text-extraSmall xl:text-small mb-3 xl:mb-5 flex items-center">
          <Image src={CheckmarkIcon} width={24} />{" "}
          <span className="ml-4">Check out your friends&apos; playlists and share your own</span>
        </div>
        <div className="text-extraSmall xl:text-small mb-3 xl:mb-5 flex items-center">
          <Image src={CheckmarkIcon} width={24} />{" "}
          <span className="ml-4">Share your favourite songs with friends and listen together</span>
        </div>
      </div>
    </div>
  </div>
);

export const WhatBuildMobile = () => {};
