import React from "react";

import type { NextPage } from "next";

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
  WhatBuild,
  WhyCbcSection,
  WhyCbcSectionMobile,
} from "@src/components";

import { Media, MediaContextProvider } from "../utils/media";

const Home: NextPage = () => {
  return (
    <MediaContextProvider>
      <Media lessThan="md">
        <div className="flex flex-col min-w-full py-4 px-2 md:p-8">
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-transparent text-extraSmall lg:text-large font-bold bg-clip-text bg-gradient-to-br from-three to-four">
              Worldschool
            </h2>
            <button className="shadow-xl text-mini py-2 px-3 text-white rounded-lg bg-gradient-to-r from-two to-one">
              Register now
            </button>
          </div>
          <HeroSectionMobile />
          <InstructorsSectionMobile />
          <MakeStuffSectionMobile />
          <OnlineCourseSuckSectionMobile />
          <WhyCbcSectionMobile />
          <LearningJourneyMobile />
          <PricingSectionMobile />
          {/*<TestimonialsSection />*/}
          <NewCohortSection />
          <InvestorsSection />
          <Faqs />
          <div className="mt-8">
            <h2 className="text-transparent text-small font-bold bg-clip-text bg-gradient-to-br from-three to-four">
              Worldschool
            </h2>
            <p className="text-small mt-4 text-extraSmall">Invest in your career.</p>
            <p className="my-6 text-mini">Copyright © 2021 Worldschool. All rights reserved.</p>
          </div>
        </div>
      </Media>

      <Media greaterThanOrEqual="md">
        <div className="flex flex-col flex-1 max-w-screen-2xl p-3 p-3 sm:p-8">
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-transparent text-large font-bold bg-clip-text bg-gradient-to-br from-three to-four">
              Worldschool
            </h2>
            <button className="text-extraSmall py-3 px-5 text-white rounded-lg bg-gradient-to-r from-two to-one">
              Register now
            </button>
          </div>
          <HeroSection />
          <InstructorsSection />
          <MakeStuffSection />
          <OnlineCoursesSuckSection />
          <WhyCbcSection />
          <WhatBuild />
          <LearningJourney />
          <PricingSection />
          {/*<TestimonialsSection />*/}
          <NewCohortSection />
          <InvestorsSection />
          <Faqs />
          <div className="mt-10">
            <h2 className="text-transparent text-large font-bold bg-clip-text bg-gradient-to-br from-three to-four">
              Worldschool
            </h2>
            <p className="text-small mt-5 text-blue text-sixteen">Invest in your career.</p>
            <p className="my-9 text-extraSmall">Copyright © 2021 Worldschool. All rights reserved.</p>
          </div>
        </div>
      </Media>
    </MediaContextProvider>
  );
};

export default Home;
