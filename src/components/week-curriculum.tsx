import React from "react";

import Image from "next/image";

import CheckmarkIcon from "@public/assets/chemark-icon.svg";

type WeekCurriculumProps = {
  reverse?: boolean;
  weekNumber: number;
  image?: any;
  heading: string;
  points: Array<string>;
  shiftGraphic?: boolean;
};

export const WeekCurriculum = ({
  image,
  points,
  reverse,
  heading,
  weekNumber,
  shiftGraphic = true,
}: WeekCurriculumProps) => (
  <div className={`flex mt-10 items-center ${reverse ? "flex-row-reverse" : "flex-row"}`}>
    <div className={`flex flex-col flex-1 ${reverse ? "pl-6" : "pr-6"}`}>
      <div className="flex">
        <div className="bg-blue rounded-md px-3 py-1 text-small xl:text-medium font-semibold text-white">{`Week ${weekNumber}`}</div>
      </div>
      <p className="font-bold text-medium xl:text-large my-4 xl:my-6">{heading}</p>
      {points.map((point, index) => (
        <div key={index} className="text-extraSmall xl:text-small mb-4 xl:mb-5 flex items-center">
          <div className="flex items-center">
            <Image src={CheckmarkIcon} layout="fixed" width={24} height={24} />
          </div>
          <span className="ml-4">{point}</span>
        </div>
      ))}
    </div>
    <div className="flex-1 flex justify-start">
      <div className={`relative ${reverse && shiftGraphic ? "right-7" : ""}`}>
        {image ? <Image src={image} className="rounded-lg" /> : null}
      </div>
    </div>
  </div>
);

export const WeekCurriculumMobile = ({ image, points, heading, weekNumber }: WeekCurriculumProps) => (
  <div className="mt-8 flex flex-col">
    <div className="flex">
      <div className="bg-blue rounded-md p-2 text-mini font-bold text-white">{`Week ${weekNumber}`}</div>
    </div>
    <p className="font-bold text-extraSmall mt-3">{heading}</p>
    <div className="my-5">
      <div>{image ? <Image src={image} className="rounded-xl" /> : null}</div>
    </div>
    {points.map((point, index) => (
      <div key={index} className="flex text-mini mb-3 items-center">
        <div>
          <Image src={CheckmarkIcon} width={15} layout="fixed" />
        </div>
        <span className="ml-2">{point}</span>
      </div>
    ))}
  </div>
);
