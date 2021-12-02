import React from "react";

import AssignmentsIcon from "@public/assets/assignments-icon.svg";
import GroupsIcon from "@public/assets/groups-icon.svg";
import MentorsIcon from "@public/assets/mentors-icon.svg";
import TimingsIcon from "@public/assets/timings-icon.svg";

import { InfoCard, InfoCardMobile } from "@src/components/info-card";

export const WhatToExpectSection = () => (
  <div className="flex flex-col items-center mt-10">
    <h1 className="font-bold 1440:text-largest xl:text-54 text-48 mb-8 text-center">
      What to <span className="text-transparent bg-clip-text bg-gradient-to-br from-seven to-five via-six">expect</span>
    </h1>
    <div className="flex flex-row justify-center gap-6 flex-wrap" style={{ maxWidth: "850px" }}>
      <InfoCard
        icon={TimingsIcon}
        heading="Timings"
        info="Spend 6 to 7 hours every weekend, from 9 AM to 12 PM on Saturdays and Sundays, with peers and industry experts."
      />
      <InfoCard
        icon={GroupsIcon}
        heading="Groups"
        info="The cohort will be divided into smaller groups of 3-4, who will discuss ideas and work on projects together."
      />
      <InfoCard
        icon={AssignmentsIcon}
        heading="Assignments"
        info="Every week, use what you've learned in class, to work on real projects with peers and mentors, and build a killer portfolio."
      />
      <InfoCard
        icon={MentorsIcon}
        heading="Mentors"
        info="Get mentorship and feedback on projects and assignments from industry experts, mentors and peers in your cohort."
      />
    </div>
  </div>
);

export const WhatToExpectSectionMobile = () => (
  <div className="flex flex-col items-center mt-8">
    <h1 className="font-bold text-small">
      What to{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-br mb-4 from-seven to-five via-six"> expect</span>
    </h1>
    <div className="flex flex-row justify-center gap-4 flex-wrap mt-5" style={{ maxWidth: "1300px" }}>
      <InfoCardMobile
        icon={TimingsIcon}
        heading="Timings"
        info="Spend 6 to 7 hours every weekend, from 9 AM to 12 PM on Saturdays and Sundays, with peers and industry experts."
      />
      <InfoCardMobile
        icon={GroupsIcon}
        heading="Groups"
        info="The cohort will be divided into smaller groups of 3-4, who will discuss ideas and work on projects together."
      />
      <InfoCardMobile
        icon={AssignmentsIcon}
        heading="Assignments"
        info="Every week, use what you've learned in class, to work on real projects with peers and mentors, and build a killer portfolio."
      />
      <InfoCardMobile
        icon={MentorsIcon}
        heading="Mentors"
        info="Get mentorship and feedback on projects and assignments from industry experts, mentors and peers in your cohort."
      />
    </div>
  </div>
);
