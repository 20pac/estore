import React from "react";

const NewCohortSection = () => (
  <div className="flex flex-col items-center mt-8 md:mt-10">
    <div className="flex flex-col bg-gradient-to-tr from-nineteen to-eighteen rounded-lg p-4 md:p-6">
      <h3 className="font-bold text-extraSmall md:text-large lg:text-larger text-white">
        Next cohort starts January 3, Register now!
      </h3>
      <p className="text-white self-start text-mini md:text-small self-start py-3 md:py-4 leading-body max-w-2xl leading-body">
        A new kind of internet university – one that is focused on helping you build a network, learn new skills and
        build
      </p>
      <button className="self-start bg-white px-3 py-2 md:px-4 md:py-3 text-blue rounded-md text-mini md:text-extraSmall">
        Do it already!
      </button>
    </div>
  </div>
);

export default NewCohortSection;
