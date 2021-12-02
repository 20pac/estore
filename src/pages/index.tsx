import React, { useEffect } from "react";

import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";

import Logo from "@public/assets/logo.svg";

import {
  Faqs,
  HeroSection,
  HeroSectionMobile,
  InstructorsSection,
  InstructorsSectionMobile,
  InvestorsSection,
  LearningJourney,
  LearningJourneyMobile,
  MakeStuffSection,
  MakeStuffSectionMobile,
  NewCohortSection,
  OnlineCoursesSuckSection,
  OnlineCourseSuckSectionMobile,
  PricingSection,
  PricingSectionMobile,
  TestimonialsSection,
  WhatBuild,
  WhatBuildMobile,
  WhatToExpectSection,
  WhatToExpectSectionMobile,
  WhyCbcSection,
  WhyCbcSectionMobile,
} from "@src/components";
import { captureEvent } from "@src/utils/firebase";

import { Media, MediaContextProvider } from "../utils/media";

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    captureEvent("view_landing_page");
  }, []);

  return (
    <MediaContextProvider>
      <Media lessThan="md">
        <div className="flex flex-col min-w-full py-4 px-2 md:p-8">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row items-center">
              <div className="w-5">
                <Image priority src={Logo} />
              </div>
              <h2 className="text-transparent text-extraSmall lg:text-large font-bold bg-clip-text bg-gradient-to-br from-three to-four">
                Worldschool
              </h2>
            </div>
            <button
              onClick={() => {
                captureEvent("clicked_register_button");
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSc-nLb052SGrlsDUWw8-n5moVrpfwgvsX2QNPCZWSEYMfhT5w/viewform",
                  "_blank",
                );
              }}
              className="shadow-xl text-mini py-2 px-3 text-white rounded-lg bg-gradient-to-r from-two to-one">
              Register now
            </button>
          </div>
          <HeroSectionMobile />
          <InstructorsSectionMobile />
          <MakeStuffSectionMobile />
          <OnlineCourseSuckSectionMobile />
          <WhyCbcSectionMobile />
          <WhatBuildMobile />
          <WhatToExpectSectionMobile />
          <LearningJourneyMobile />
          <PricingSectionMobile />
          <TestimonialsSection />
          <NewCohortSection />
          <InvestorsSection />
          <Faqs />
          <div className="mt-8">
            <div className="flex flex-row items-center">
              <div className="w-5">
                <Image priority src={Logo} />
              </div>
              <h2 className="text-transparent text-extraSmall lg:text-large font-bold bg-clip-text bg-gradient-to-br from-three to-four">
                Worldschool
              </h2>
            </div>
            <p className="text-small text-blue mt-4 text-extraSmall">Invest in your career.</p>
            <p className="mt-6 mb-2 text-mini">Contact us on +91 86005 4884</p>
            <p className="mt-6 mb-2 text-mini underline text-blue" onClick={() => router.push("/privacy")}>
              Privacy Policy
            </p>
            <p className="mb-6 text-mini">Copyright © 2021 Worldschool. All rights reserved.</p>
          </div>
        </div>
      </Media>

      <Media greaterThanOrEqual="md">
        <div className="flex flex-col flex-1 max-w-screen-2xl p-3 p-3 sm:p-8">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row items-center">
              <div>
                <Image src={Logo} />
              </div>
              <h2 className="text-transparent text-large font-bold bg-clip-text bg-gradient-to-br from-three to-four">
                Worldschool
              </h2>
            </div>
            <button
              onClick={() => {
                captureEvent("clicked_register_button");
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSc-nLb052SGrlsDUWw8-n5moVrpfwgvsX2QNPCZWSEYMfhT5w/viewform",
                  "_blank",
                );
              }}
              className="text-extraSmall py-3 px-5 text-white rounded-lg bg-gradient-to-r from-two to-one">
              Register now
            </button>
          </div>
          <HeroSection />
          <InstructorsSection />
          <MakeStuffSection />
          <OnlineCoursesSuckSection />
          <WhyCbcSection />
          <WhatBuild />
          <WhatToExpectSection />
          <LearningJourney />
          <PricingSection />
          <TestimonialsSection />
          <NewCohortSection />
          <InvestorsSection />
          <Faqs />
          <div className="mt-10">
            <div className="flex flex-row items-center">
              <div>
                <Image src={Logo} />
              </div>
              <h2 className="text-transparent text-large font-bold bg-clip-text bg-gradient-to-br from-three to-four">
                Worldschool
              </h2>
            </div>
            <p className="text-small mt-5 text-blue text-sixteen">Invest in your career.</p>
            <p className="mt-9 mb-3 text-extraSmall">Contact us on +91 86005 4884</p>
            <p
              className="mt-9 mb-2 text-extraSmall underline text-blue cursor-pointer"
              onClick={() => router.push("/privacy")}>
              Privacy Policy
            </p>
            <p className="mb-9 text-extraSmall">Copyright © 2021 Worldschool. All rights reserved.</p>
          </div>
        </div>
      </Media>
    </MediaContextProvider>
  );
};

export default Home;
