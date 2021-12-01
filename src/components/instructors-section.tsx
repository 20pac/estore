import React from "react";

import Image from "next/image";

import AbhinavImage from "@public/assets/abhinav.jpeg";
import AnanyaImage from "@public/assets/ananya.jpeg";
import AshishImage from "@public/assets/ashish.jpeg";
import CheckmarkIcon from "@public/assets/chemark-icon.svg";
import LinkedinIcon from "@public/assets/linkedin-icon.svg";

export const InstructorsSection = () => {
  return (
    <div className="flex flex-row mt-10 items-center">
      <div className="flex-1 flex flex-row pr-5">
        <div className="flex-1 flex items-center flex-col">
          <div>
            <div className="relative left-5">
              <div className="rounded my-2 relative">
                <div className="absolute bg-twenty w-8 h-150 xl:w-8 xl:h-180 -left-4 -top-6 xl:-left-4 xl:-top-4 rounded-xl" />
                <div className="w-9 h-9 xl:w-180 xl:h-180">
                  <Image src={AnanyaImage} className="rounded-xl" />
                </div>
              </div>
            </div>
            <p className="text-small font-bold self-start">Ananya Singh</p>
            <p className="text-mini self-start italic text-text">Founding engineer, Studyroom</p>
            <div className="flex flex-row gap-2 mt-3">
              <button onClick={() => window.open("https://www.linkedin.com/in/ananya-singh-115456149/", "_blank")}>
                <Image src={LinkedinIcon} />
              </button>
            </div>
          </div>
          <div className="mt-6">
            <div className="relative left-3">
              <div className="rounded my-2 relative">
                <div className="absolute bg-twentyTwo w-8 h-150 xl:w-8 xl:h-180 -left-4 -top-6 xl:-left-4 xl:-top-4 rounded-xl" />
                <div className="w-9 h-9 xl:w-180 xl:h-180">
                  <Image src={AshishImage} className="rounded-xl" />
                </div>
              </div>
            </div>
            <p className="text-small font-bold self-start">Ashish Ranjan</p>
            <p className="text-mini self-start italic text-text">Founder, Studyroom, IIT</p>
            <div className="flex flex-row gap-2 mt-3">
              <button onClick={() => window.open("https://www.linkedin.com/in/ashishiitkgp/", "_blank")}>
                <Image src={LinkedinIcon} />
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center">
          <div>
            <div className="relative left-5">
              <div className="rounded my-2 relative">
                <div className="absolute bg-twentyOne w-8 h-150 xl:w-8 xl:h-180 -left-4 -top-6 xl:-left-4 xl:-top-4 rounded-xl" />
                <div className="w-9 h-9 xl:w-180 xl:h-180">
                  <Image src={AbhinavImage} className="rounded-xl" />
                </div>
              </div>
            </div>
            <p className="text-small font-bold self-start">Abhinav Gupta</p>
            <p className="text-mini self-start italic text-text">CTO, Studyroom, Unacademy, IIT BHU</p>
            <div className="flex flex-row gap-2 mt-3">
              <button onClick={() => window.open("https://www.linkedin.com/in/abhigupta768/", "_blank")}>
                <Image src={LinkedinIcon} />
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
          <div className="text-extraSmall xl:text-small mb-3 xl:mb-5 flex items-center">
            <Image src={CheckmarkIcon} width={24} />{" "}
            <span className="ml-4">Build a working relationship with your instructor</span>
          </div>
          <div className="text-extraSmall xl:text-small mb-3 xl:mb-5 flex items-center">
            <Image src={CheckmarkIcon} width={24} />{" "}
            <span className="ml-4">Receive feedback on assignments and projects</span>
          </div>
          <div className="text-extraSmall xl:text-small mb-5 flex items-center">
            <Image src={CheckmarkIcon} width={24} /> <span className="ml-4">You want to be future ready</span>
          </div>
        </div>
        <button
          onClick={() =>
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLSc-nLb052SGrlsDUWw8-n5moVrpfwgvsX2QNPCZWSEYMfhT5w/viewform",
              "_blank",
            )
          }
          className="text-extraSmall py-3 px-5 text-white rounded-lg bg-gradient-to-r from-two to-one">
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
          <div>
            <div className="relative">
              <div className="rounded my-2 relative">
                <div className="absolute bg-twenty w-8 h-9 -left-3 -top-5 rounded-xl" />
                <div className="w-9 h-9 xl:w-180 xl:h-180">
                  <Image src={AnanyaImage} className="rounded-xl" />
                </div>
              </div>
            </div>
            <p className="text-mini font-bold self-start">Ananya Singh</p>
            <p className="text-superMini self-start italic text-text">Founding engineer, Studyroom</p>
            <div className="flex flex-row gap-2 mt-3">
              <button onClick={() => window.open("https://www.linkedin.com/in/ananya-singh-115456149/", "_blank")}>
                <Image src={LinkedinIcon} />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <div className="relative">
            <div className="rounded my-2 relative">
              <div className="absolute bg-twentyTwo w-8 h-9 -left-3 -top-5 rounded-xl" />
              <div className="w-9 h-9 xl:w-180 xl:h-180">
                <Image src={AshishImage} className="rounded-xl" />
              </div>
            </div>
          </div>
          <p className="text-mini font-bold self-start">Ashish Ranjan</p>
          <p className="text-superMini self-start italic text-text">Founder, Studyroom, IIT</p>
          <div className="flex flex-row gap-2 mt-3">
            <button onClick={() => window.open("https://www.linkedin.com/in/ashishiitkgp/", "_blank")}>
              <Image src={LinkedinIcon} />
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1 flex items-center">
        <div className="relative left-3">
          <div>
            <div className="rounded my-2 relative">
              <div className="absolute bg-twentyOne w-8 h-9 -left-3 -top-5 rounded-xl" />
              <div className="w-9 h-9 xl:w-180 xl:h-180">
                <Image src={AbhinavImage} className="rounded-xl" />
              </div>
            </div>
          </div>
          <p className="text-mini font-bold self-start">Abhinav Gupta</p>
          <p className="text-superMini self-start italic text-text">CTO, Studyroom, Unacademy, IIT BHU</p>
          <div className="flex flex-row gap-2 mt-3">
            <button onClick={() => window.open("https://www.linkedin.com/in/abhigupta768/", "_blank")}>
              <Image src={LinkedinIcon} />
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
      <button
        onClick={() =>
          window.open(
            "https://docs.google.com/forms/d/e/1FAIpQLSc-nLb052SGrlsDUWw8-n5moVrpfwgvsX2QNPCZWSEYMfhT5w/viewform",
            "_blank",
          )
        }
        className="mt-5 shadow-xl text-mini py-2 px-3 text-white rounded-lg bg-gradient-to-r from-two to-one">
        Register now
      </button>
    </div>
  </div>
);
