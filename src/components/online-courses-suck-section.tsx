import React from "react";

import BoringClassesIcon from "@public/assets/boring-classes-icon.svg";
import NoAlumniNetworkIcon from "@public/assets/no-alumni-network-icon.svg";
import NoIndustryConnectionIcon from "@public/assets/no-industry-connections-icon.svg";
import NoRealOutcomeIcon from "@public/assets/no-real-outcome-icon.svg";
import NoSupportIcon from "@public/assets/no-support-icon.svg";
import OutdatedSyllabusIcon from "@public/assets/outdated-syllabus-icon.svg";

import { InfoCard, InfoCardMobile } from "@src/components/info-card";

export const OnlineCoursesSuckSection = () => (
  <div className="flex flex-col items-center mt-10">
    <h1 className="font-bold 1440:text-largest xl:text-54 text-48 text-center">
      Let&apos;s face it, most{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-br from-seventeen to-five">
        online courses suck.
      </span>
    </h1>
    <p className="mt-6 mb-8 text-extraSmall xl:text-small max-w-3xl text-center">
      Whether it&apos;s those boring Zoom sessions by colleges, the career bootcamps out there, the free courses or even
      the self-paced courses you find online.
    </p>
    <div className="flex flex-row justify-center gap-6 flex-wrap" style={{ maxWidth: "1300px" }}>
      <InfoCard
        icon={BoringClassesIcon}
        heading="Boring classes"
        info="Most online courses are one-way - you don't really get to ask your questions or share your opinions, do you?"
      />
      <InfoCard
        icon={OutdatedSyllabusIcon}
        heading="Outdated syllabus"
        info="Technology moves fast. Unfortunately, most online courses do not!"
      />
      <InfoCard
        icon={NoIndustryConnectionIcon}
        heading="No industry connections"
        info="How cool would it be if you could not just learn from the experts but also talk to them? "
      />
      <InfoCard
        icon={NoAlumniNetworkIcon}
        heading="No alumni network"
        info="Learning with a group of peers can be super helpful in building up a network that you can always reach out to for help!"
      />
      <InfoCard
        icon={NoRealOutcomeIcon}
        heading="No real outcome"
        info="The best way to learn is by doing, so you'll work on real-world projects with peers and mentors."
      />
      <InfoCard
        icon={NoSupportIcon}
        heading="No support after completion"
        info="The best way to learn is by doing, so you'll work on real-world projects with peers and mentors."
      />
    </div>
  </div>
);

export const OnlineCourseSuckSectionMobile = () => (
  <div className="flex flex-col items-center mt-8">
    <h1 className="font-bold text-small">Let&apos;s face it, most </h1>
    <h1 className="font-bold text-small text-transparent bg-clip-text bg-gradient-to-br from-seventeen to-five">
      online courses suck.
    </h1>
    <p className="mt-4 mb-4 text-mini max-w-3xl text-center">
      Whether it&apos;s those boring Zoom sessions by colleges, the career bootcamps out there, the free courses or even
      the self-paced courses you find online.
    </p>
    <div className="flex flex-row justify-center gap-4 flex-wrap" style={{ maxWidth: "1300px" }}>
      <InfoCardMobile
        icon={BoringClassesIcon}
        heading="Boring classes"
        info="Most online courses are one-way - you don't really get to ask your questions or share your opinions, do you?"
      />
      <InfoCardMobile
        icon={OutdatedSyllabusIcon}
        heading="Outdated syllabus"
        info="Technology moves fast. Unfortunately, most online courses do not!"
      />
      <InfoCardMobile
        icon={NoIndustryConnectionIcon}
        heading="No industry connections"
        info="How cool would it be if you could not just learn from the experts but also talk to them? "
      />
      <InfoCardMobile
        icon={NoAlumniNetworkIcon}
        heading="No alumni network"
        info="Learning with a group of peers can be super helpful in building up a network that you can always reach out to for help!"
      />
      <InfoCardMobile
        icon={NoRealOutcomeIcon}
        heading="No real outcome"
        info="The best way to learn is by doing, so you'll work on real-world projects with peers and mentors."
      />
      <InfoCardMobile
        icon={NoSupportIcon}
        heading="No support after completion"
        info="The best way to learn is by doing, so you'll work on real-world projects with peers and mentors."
      />
    </div>
  </div>
);
