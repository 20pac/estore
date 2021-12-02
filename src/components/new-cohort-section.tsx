import React from "react";

import { captureEvent } from "@src/utils/firebase";

const NewCohortSection = () => (
  <div className="flex flex-col items-center mt-8 md:mt-10">
    <div
      className="flex flex-col rounded-lg p-4 md:p-6"
      style={{ background: "linear-gradient(36deg, #6847ED 27.2%, #E3A58A 85.64%)" }}>
      <h3 className="font-bold text-extraSmall md:text-large lg:text-larger text-white">
        Next cohort starts January 8, Register now!
      </h3>
      <p className="text-white self-start text-mini md:text-small self-start py-3 md:py-4 leading-body max-w-2xl leading-body">
        A new kind of internet university – one that is focused on helping you build a network, learn new skills and
        build
      </p>
      <button
        onClick={() => {
          captureEvent("clicked_register_button");
          window.open(
            "https://docs.google.com/forms/d/e/1FAIpQLSc-nLb052SGrlsDUWw8-n5moVrpfwgvsX2QNPCZWSEYMfhT5w/viewform",
            "_blank",
          );
        }}
        className="self-start bg-white px-3 py-2 md:px-4 md:py-3 text-blue rounded-md text-mini md:text-extraSmall">
        Do it already!
      </button>
    </div>
  </div>
);

export default NewCohortSection;
