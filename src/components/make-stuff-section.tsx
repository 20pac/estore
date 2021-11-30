import React from "react";

import Image from "next/image";

import EarthIcon from "@public/assets/earth-icon.png";
import NotepadIcon from "@public/assets/notepad-icon.png";
import RocketIcon from "@public/assets/rocket-icon.png";

export const MakeStuffSection = () => (
  <div className="flex flex-col items-center mt-10">
    <h1 className="font-bold 1440:text-largest xl:text-54 text-48">
      Learn by <span className="text-transparent bg-clip-text bg-gradient-to-br from-eight to-nine">making stuff</span>
    </h1>
    <p className="my-6 text-extraSmall xl:text-small max-w-2xl text-center">
      A new kind of online university, focused on helping you build a network, learn new skills and get hands-on
      experience!
    </p>
    <div className="flex flex-row justify-center flex-wrap gap-5 xl:gap-6">
      <div className="flex flex-col items-center w-11 h-15 bg-gradient-to-br from-ten to-eleven rounded-md px-4 py-6">
        <div style={{ width: "200px" }}>
          <Image src={RocketIcon} />
        </div>
        <h2 className="self-start text-medium xl:text-large text-white font-bold mt-6">Explore &</h2>
        <h2 className="self-start text-medium xl:text-large text-white font-bold">launch ideas</h2>
        <p className="text-extraSmall xl:text-small text-white mt-1">
          Discuss ideas with peers and industry experts and execute them.
        </p>
      </div>
      <div className="flex flex-col items-center w-11 h-15 bg-gradient-to-br from-twelve to-thirteen rounded-md px-4 py-6">
        <div style={{ width: "200px" }}>
          <Image src={EarthIcon} />
        </div>
        <h2 className="self-start text-medium xl:text-large text-white font-bold mt-6">Build deep</h2>
        <h2 className="self-start text-medium xl:text-large text-white font-bold">connections</h2>
        <p className="text-extraSmall xl:text-small text-white mt-1">
          Connect with other students, industry experts and build your network.
        </p>
      </div>
      <div className="flex flex-col items-center w-11 h-15 bg-gradient-to-br from-fourteen to-fifteen rounded-md px-4 py-6">
        <div style={{ width: "160px" }}>
          <Image src={NotepadIcon} />
        </div>
        <h2 className="self-start text-medium xl:text-large text-white font-bold mt-6">Learn & grow</h2>
        <h2 className="self-start text-medium xl:text-large text-white font-bold">rapidly</h2>
        <p className="text-extraSmall xl:text-small text-white mt-1">
          Save time and learn faster, straight from the industry experts.
        </p>
      </div>
    </div>
  </div>
);

export const MakeStuffSectionMobile = () => (
  <div className="flex flex-col items-center mt-8">
    <h1 className="font-bold text-small">
      Learn by <span className="text-transparent bg-clip-text bg-gradient-to-br from-eight to-nine">making stuff</span>
    </h1>
    <p className="my-4 text-mini max-w-2xl text-center">
      A new kind of online university, focused on helping you build a network, learn new skills and get hands-on
      experience!
    </p>
    <div className="flex flex-col justify-center gap-5">
      <div className="flex flex-col items-center w-10 h-450 bg-gradient-to-br from-ten to-eleven rounded-xl px-4 py-5">
        <div style={{ width: "160px" }}>
          <Image src={RocketIcon} />
        </div>
        <h2 className="self-start text-24 text-white font-bold mt-5">Explore &</h2>
        <h2 className="self-start text-24 text-white font-bold">launch ideas</h2>
        <p className="text-extraSmall text-white mt-3">
          Discuss ideas with peers and industry experts and execute them.
        </p>
      </div>
      <div className="flex flex-col items-center w-10 h-450 bg-gradient-to-br from-twelve to-thirteen rounded-xl px-4 py-6">
        <div style={{ width: "160px" }}>
          <Image src={EarthIcon} />
        </div>
        <h2 className="self-start text-24 text-white font-bold mt-5">Build deep</h2>
        <h2 className="self-start text-24 text-white font-bold">connections</h2>
        <p className="text-extraSmall text-white mt-3">
          Connect with other students, industry experts and build your network.
        </p>
      </div>
      <div className="flex flex-col items-center w-10 h-450 bg-gradient-to-br from-fourteen to-fifteen rounded-xl px-4 py-6">
        <div style={{ width: "130px" }}>
          <Image src={NotepadIcon} />
        </div>
        <h2 className="self-start text-24 text-white font-bold mt-5">Learn & grow</h2>
        <h2 className="self-start text-24 text-white font-bold">rapidly</h2>
        <p className="text-extraSmall text-white mt-3">
          Save time and learn faster, straight from the industry experts.
        </p>
      </div>
    </div>
  </div>
);
