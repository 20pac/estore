import React from "react";

import Image from "next/image";

import CheckmarkIcon from "@public/assets/chemark-icon.svg";
import LinkedinIcon from "@public/assets/linkedin-icon.svg";
import TwitterIcon from "@public/assets/twitter-icon.svg";

export const InstructorsSection = () => {
  return (
    <div className="flex flex-row mt-10 items-center">
      <div className="flex-1 flex flex-row pr-5">
        <div className="flex-1 flex items-center flex-col">
          <div>
            <div className="w-9 h-9 xl:w-10 xl:h-10 bg-blue rounded my-2" />
            <p className="text-small font-bold self-start">Ananya Singh</p>
            <p className="text-mini self-start italic text-text">Founding engineer, Studyroom</p>
            <div className="flex flex-row gap-2 mt-3">
              <button>
                <Image src={LinkedinIcon} />
              </button>
              <button>
                <Image src={TwitterIcon} />
              </button>
            </div>
          </div>
          <div className="mt-6">
            <div className="w-9 h-9 xl:w-10 xl:h-10 bg-blue rounded my-2" />
            <p className="text-small font-bold self-start">Ashish Ranjan</p>
            <p className="text-mini self-start italic text-text">Founder, Studyroom, IIT</p>
            <div className="flex flex-row gap-2 mt-3">
              <button>
                <Image src={LinkedinIcon} />
              </button>
              <button>
                <Image src={TwitterIcon} />
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center">
          <div>
            <div className="w-9 h-9 xl:w-10 xl:h-10 bg-blue rounded my-2" />
            <p className="text-small font-bold self-start">Abhinav Gupta</p>
            <p className="text-mini self-start italic text-text">CTO, Studyroom, Unacademy, IIT BHU</p>
            <div className="flex flex-row gap-2 mt-3">
              <button>
                <Image src={LinkedinIcon} />
              </button>
              <button>
                <Image src={TwitterIcon} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <h1 className="font-bold 1440:text-largest xl:text-54 text-48 mb-5">
          Meet our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-seven to-five via-six">
            instructors
          </span>
        </h1>
        <p className="text-extraSmall xl:text-small mb-6">
          Learn from industry professionals. Our instructors build a learning experience that&apos;s Live, interactive
          and hands-on.
        </p>
        <div>
          <div className="text-extraSmall xl:text-small mb-3 xl:mb-5 flex items-center">
            <Image src={CheckmarkIcon} width={24} />{" "}
            <span className="ml-4">Learn from and interact with industry experts</span>
          </div>
          <li className="text-extraSmall xl:text-small mb-3 xl:mb-5 flex items-center">
            <Image src={CheckmarkIcon} width={24} />{" "}
            <span className="ml-4">Build a working relationship with your instructor</span>
          </li>
          <li className="text-extraSmall xl:text-small mb-3 xl:mb-5 flex items-center">
            <Image src={CheckmarkIcon} width={24} />{" "}
            <span className="ml-4">Receive feedback on assignments and projects</span>
          </li>
          <li className="text-extraSmall xl:text-small mb-5 flex items-center">
            <Image src={CheckmarkIcon} width={24} /> <span className="ml-4">You want to be future ready</span>
          </li>
        </div>
        <button className="text-extraSmall py-3 px-5 text-white rounded-lg bg-gradient-to-r from-two to-one">
          Register now
        </button>
      </div>
    </div>
  );
};

export const InstructorsSectionMobile = () => (
  <div className="flex flex-col mt-8 items-center">
    <h1 className="font-bold text-small mb-4">
      Meet our{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-br from-seven to-five via-six">instructors</span>
    </h1>
    <p className="text-mini mb-5 text-text text-center">
      Learn from industry professionals. Our instructors build a learning experience that&apos;s Live, interactive and
      hands-on.
    </p>
    <div className="flex-1 flex flex-row">
      <div className="flex-1 flex items-center flex-col">
        <div>
          <div className="w-9 h-9 bg-blue rounded my-2" />
          <p className="text-mini font-bold self-start">Ananya Singh</p>
          <p className="text-superMini self-start italic text-text">Founding engineer, Studyroom</p>
          <div className="flex flex-row gap-2 mt-3">
            <button>
              <Image src={LinkedinIcon} />
            </button>
            <button>
              <Image src={TwitterIcon} />
            </button>
          </div>
        </div>
        <div className="mt-6">
          <div className="w-9 h-9 bg-blue rounded my-2" />
          <p className="text-mini font-bold self-start">Ashish Ranjan</p>
          <p className="text-superMini self-start italic text-text">Founder, Studyroom, IIT</p>
          <div className="flex flex-row gap-2 mt-3">
            <button>
              <Image src={LinkedinIcon} />
            </button>
            <button>
              <Image src={TwitterIcon} />
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1 flex items-center">
        <div>
          <div className="w-9 h-9 bg-blue rounded my-2" />
          <p className="text-mini font-bold self-start">Abhinav Gupta</p>
          <p className="text-superMini self-start italic text-text">CTO, Studyroom, Unacademy, IIT BHU</p>
          <div className="flex flex-row gap-2 mt-3">
            <button>
              <Image src={LinkedinIcon} />
            </button>
            <button>
              <Image src={TwitterIcon} />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-5">
      <ul>
        <li className="text-mini mb-3 flex items-center">
          <Image src={CheckmarkIcon} width={15} />{" "}
          <span className="ml-3">Learn from and interact with industry experts</span>
        </li>
        <li className="text-mini mb-3 flex items-center">
          <Image src={CheckmarkIcon} width={15} />{" "}
          <span className="ml-3">Build a working relationship with your instructor</span>
        </li>
        <li className="text-mini mb-3 flex items-center">
          <Image src={CheckmarkIcon} width={15} />{" "}
          <span className="ml-3">Receive feedback on assignments and projects</span>
        </li>
        <li className="text-mini mb-3 flex items-center">
          <Image src={CheckmarkIcon} width={15} /> <span className="ml-3">You want to be future ready</span>
        </li>
      </ul>
      <button className="mt-5 shadow-xl text-mini py-2 px-3 text-white rounded-lg bg-gradient-to-r from-two to-one">
        Register now
      </button>
    </div>
  </div>
);
