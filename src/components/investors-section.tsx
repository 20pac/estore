import React from "react";

import Image from "next/image";

import GraphLogo from "@public/assets/graph-logo.png";
import SequoiaLogo from "@public/assets/sequoia-logo.png";

const InvestorsSection = () => (
  <div className="flex flex-col items-center mt-8 md:mt-10">
    <h1 className="font-bold 1440:text-largest xl:text-54 md:text-48 text-small">
      Our <span className="text-transparent bg-clip-text bg-gradient-to-br from-fourteen to-fifteen">Investors</span>
    </h1>
    <p className="md:mt-6 md:mb-8 mt-4 mb-5 text-mini md:text-small max-w-3xl text-center">
      You’re in good hands. <span className="font-bold">Promise</span>.
    </p>
    <div className="flex flex-col md:flex-row items-center gap-5 md:gap-8">
      <div className="w-150 md:w-280">
        <Image src={SequoiaLogo} />
      </div>
      <div className="w-9 md:w-150">
        <Image src={GraphLogo} />
      </div>
    </div>
  </div>
);

export default InvestorsSection;
