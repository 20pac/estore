import React from "react";

import Image from "next/image";

import CheckmarkIcon from "@public/assets/chemark-icon.svg";

import { captureEvent } from "@src/utils/firebase";

export const PricingSection = () => (
  <div className="flex flex-col items-center mt-10">
    <h1 className="font-bold 1440:text-largest xl:text-54 text-48">
      Our{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-br from-fourteen to-fifteen">pricing plan.</span>
    </h1>
    <p className="mt-6 mb-8 text-extraSmall xl:text-small max-w-3xl text-center">
      We applied the design process to design education (quite meta, we know) resulting in a totally unique learning
      experience.
    </p>
    <div className="z-10 bg-white">
      <div className="flex flex-row border rounded-xl p-6 960:p-6">
        <div>
          <p className="font-bold text-extraSmall 964:text-24 1100:text-large mb-6">Android development (8 weeks)</p>
          <ul>
            <li className="text-extraSmall 1100:text-small mb-4 1100:mb-5 flex items-center">
              <Image src={CheckmarkIcon} width={24} />{" "}
              <span className="ml-4">Learn from and interact with industry experts</span>
            </li>
            <li className="text-extraSmall 1100:text-small mb-4 1100:mb-5 flex items-center">
              <Image src={CheckmarkIcon} width={24} />{" "}
              <span className="ml-4">Build a working relationship with your instructor</span>
            </li>
            <li className="text-extraSmall 1100:text-small mb-4 1100:mb-5 flex items-center">
              <Image src={CheckmarkIcon} width={24} />{" "}
              <span className="ml-4">Receive feedback on assignments and projects</span>
            </li>
            <li className="text-extraSmall 1100:text-small flex items-center">
              <Image src={CheckmarkIcon} width={24} /> <span className="ml-4">You want to be future ready</span>
            </li>
          </ul>
          <button
            onClick={() => {
              captureEvent("clicked_register_button");
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSc-nLb052SGrlsDUWw8-n5moVrpfwgvsX2QNPCZWSEYMfhT5w/viewform",
                "_blank",
              );
            }}
            className="mt-6 text-extraSmall py-3 px-5 text-white rounded-lg bg-gradient-to-r from-two to-one">
            Register now
          </button>
        </div>
        <div className="flex-1 lg:w-6" />
        <div>
          <p className="text-extraSmall 964:text-24 1100:text-large line-through">@ INR 45,000</p>
          <p className="text-extraSmall 964:text-24 1100:text-large font-bold">@ INR 35,000</p>
        </div>
      </div>
      <p className="mt-4 text-textLight self-start">
        No Cost EMI on all major credit cards & No cost Cardless EMI* 7-day money back Guarantee
      </p>
    </div>
  </div>
);

export const PricingSectionMobile = () => (
  <div className="flex flex-col items-center mt-8">
    <h1 className="font-bold text-small">
      Our{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-br from-fourteen to-fifteen">pricing plan.</span>
    </h1>
    <p className="mt-6 mb-8 text-mini leading-body text-center">
      We applied the design process to design education (quite meta, we know) resulting in a totally unique learning
      experience.
    </p>
    <div className="z-10 bg-white">
      <div className="flex flex-row border rounded-xl p-3 960:p-6">
        <div>
          <p className="font-bold text-extraSmall">Android development (8 weeks)</p>
          <p className="text-small text-extraSmall font-bold mt-3">@ INR 35,000</p>
          <p className="text-small text-extraSmall line-through mb-3">@ INR 45,000</p>
          <div>
            <div className="text-mini mb-3 1100:mb-5 flex items-center">
              <div>
                <Image src={CheckmarkIcon} width={15} layout="fixed" />
              </div>
              <span className="ml-4">Learn from and interact with industry experts</span>
            </div>
            <div className="text-mini mb-3 1100:mb-5 flex items-center">
              <div>
                <Image src={CheckmarkIcon} width={15} layout="fixed" />
              </div>
              <span className="ml-4">Build a working relationship with your instructor</span>
            </div>
            <div className="text-mini mb-3 1100:mb-5 flex items-center">
              <div>
                <Image src={CheckmarkIcon} width={15} layout="fixed" />
              </div>
              <span className="ml-4">Receive feedback on assignments and projects</span>
            </div>
            <div className="text-mini flex items-center">
              <div>
                <Image src={CheckmarkIcon} width={15} layout="fixed" />
              </div>
              <span className="ml-4">You want to be future ready</span>
            </div>
          </div>
          <button
            onClick={() => {
              captureEvent("clicked_register_button");
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSc-nLb052SGrlsDUWw8-n5moVrpfwgvsX2QNPCZWSEYMfhT5w/viewform",
                "_blank",
              );
            }}
            className="mt-6 shadow-xl text-mini py-2 px-3 text-white rounded-lg bg-gradient-to-r from-two to-one">
            Register now
          </button>
        </div>
      </div>
      <p className="mt-4 text-textLight text-mini self-start">
        No Cost EMI on all major credit cards & No cost Cardless EMI* 7-day money back Guarantee
      </p>
    </div>
  </div>
);
