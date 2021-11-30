import React from "react";

import CommunityIcon from "@public/assets/community-icon.png";
import CompletionRateIcon from "@public/assets/completion-rate-icon.svg";
import HandsonIcon from "@public/assets/handson-projects-icon.svg";
import LiveClassesIcon from "@public/assets/live-classes-icon.svg";
import MentorshipIcon from "@public/assets/mentorship-icon.svg";
import PortfolioIcon from "@public/assets/portfolio-icon.svg";

import { InfoCard, InfoCardMobile } from "@src/components/info-card";

export const WhyCbcSection = () => (
  <div className="flex flex-col items-center mt-10">
    <h1 className="font-bold 1440:text-largest xl:text-54 text-48 text-center">
      Why you should choose{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-br from-fourteen to-fifteen">CBCs.</span>
    </h1>
    <p className="mt-6 mb-8 text-extraSmall xl:text-small max-w-3xl text-center">
      We applied the design process to design education (quite meta, we know) resulting in a totally unique learning
      experience.
    </p>
    <div className="flex flex-row justify-center gap-6 flex-wrap" style={{ maxWidth: "1300px" }}>
      <InfoCard
        icon={LiveClassesIcon}
        heading="All Live classes"
        info="Learn from and interact with experts. No one-way monologues - we keep it interesting!"
      />
      <InfoCard
        icon={CompletionRateIcon}
        heading="95% course completion rate"
        info="Did you know? Live classes have a completion rate of 80-95%, which is 70% higher than that of other content!"
      />
      <InfoCard
        icon={HandsonIcon}
        heading="Hands-on Projects"
        info="The best way to learn is by doing, so you'll work on real-world projects with peers and mentors."
      />
      <InfoCard
        icon={MentorshipIcon}
        heading="Mentorship and Feedback"
        info="Receive personalised feedback from expert mentors, and build a working relationship with them."
      />
      <InfoCard
        icon={PortfolioIcon}
        heading="Build Your Portfolio"
        info="Build a killer portfolio! Every assignment adds to your resume so you can apply to jobs confidently."
      />
      <InfoCard
        icon={CommunityIcon}
        heading="Build a Community for Life"
        info="Find like-minded folks from diverse background. And remember - once a cohort member, always a cohort member!"
      />
    </div>
  </div>
);

export const WhyCbcSectionMobile = () => (
  <div className="flex flex-col items-center mt-8">
    <h1 className="font-bold text-small">Why you should</h1>
    <h1 className="font-bold text-small text-transparent bg-clip-text bg-gradient-to-br from-fourteen to-fifteen">
      choose CBCs.
    </h1>
    <p className="mt-4 mb-4 text-mini text-center">
      We applied the design process to design education (quite meta, we know) resulting in a totally unique learning
      experience.
    </p>
    <div className="flex flex-row justify-center gap-4 flex-wrap" style={{ maxWidth: "1300px" }}>
      <InfoCardMobile
        icon={LiveClassesIcon}
        heading="All Live classes"
        info="Learn from and interact with experts. No one-way monologues - we keep it interesting!"
      />
      <InfoCardMobile
        icon={CompletionRateIcon}
        heading="95% course completion rate"
        info="Did you know? Live classes have a completion rate of 80-95%, which is 70% higher than that of other content!"
      />
      <InfoCardMobile
        icon={HandsonIcon}
        heading="Hands-on Projects"
        info="The best way to learn is by doing, so you'll work on real-world projects with peers and mentors."
      />
      <InfoCardMobile
        icon={MentorshipIcon}
        heading="Mentorship and Feedback"
        info="Receive personalised feedback from expert mentors, and build a working relationship with them."
      />
      <InfoCardMobile
        icon={PortfolioIcon}
        heading="Build Your Portfolio"
        info="Build a killer portfolio! Every assignment adds to your resume so you can apply to jobs confidently."
      />
      <InfoCardMobile
        icon={CommunityIcon}
        heading="Build a Community for Life"
        info="Find like-minded folks from diverse background. And remember - once a cohort member, always a cohort member!"
      />
    </div>
  </div>
);
