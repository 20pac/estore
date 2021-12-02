import React from "react";

import Image from "next/image";

type InfoCardProps = {
  icon: any;
  heading: string;
  info: string;
};

export const InfoCard = ({ info, icon, heading }: InfoCardProps) => {
  return (
    <div className="w-11 h-10 1440:w-400 1440:h-320 flex">
      <div className="flex-1 p-4 1440:p-6 border rounded-lg">
        <div className="w-5 h-5 1440:w-6 1440:h-6 relative">
          <Image src={icon} />
        </div>
        {/*<div className="bg-blue w-6 h-6 rounded-full" />*/}
        <h3 className="font-black text-extraSmall 1440:text-small pt-4 pb-2 1440:pt-5 1440:pb-4">{heading}</h3>
        <p className="text-mini 1440:text-extraSmall leading-body">{info}</p>
      </div>
    </div>
  );
};

export const InfoCardMobile = ({ info, icon, heading }: InfoCardProps) => (
  <div style={{ width: "293px", height: "270px", display: "flex" }}>
    <div className="flex-1 p-5 border rounded-lg">
      <Image src={icon} width={32} height={32} />
      <h3 className="font-black text-extraSmall mt-3 mb-3">{heading}</h3>
      <p className="text-mini leading-body">{info}</p>
    </div>
  </div>
);
