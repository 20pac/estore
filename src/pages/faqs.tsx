import React, { useState } from "react";

const Accordion = ({ question, answer }: { question: string; answer: string }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border-b cursor-pointer" onClick={() => setExpanded((expanded) => !expanded)}>
      <div className="py-6 flex justify-between items-center px-8">
        <p className="text-small font-bold">{question}</p>
        <div className="w-4 h-4 flex items-center justify-center rounded-full bg-blue text-white">
          <button className="font-bold" onClick={() => setExpanded((expanded) => !expanded)}>
            {expanded ? "-" : "+"}
          </button>
        </div>
      </div>
      {expanded ? (
        <div className="px-8 pb-6">
          <p className="text-small text-textGray max-w-5xl">{answer}</p>
        </div>
      ) : null}
    </div>
  );
};

const Faqs = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="rounded bg-white">
        <h1 className="p-8 pb-4 text-large font-bold text-textGray">FAQs</h1>
        <Accordion
          question="1. I have a full-time job. Will I get enough time to take this course?"
          answer="Yes! This course is built keeping in mind the time constrains of full-time professionals. The live classes will be held on the weekends and you will be committing 3-7 hours a week to this course."
        />
        <Accordion
          question="2. Do I have to attend all of the live sessions in real-time?"
          answer="I strongly recommend you make time for live sessions so you can ask questions directly and make the most out of it. But if you are unable to attend a live session due to unavoidable circumstances, you can always access the recording of the session that you missed."
        />
        <Accordion
          question="3. Why learn with a community for an online course?"
          answer="Haven't all of our schools and colleges till date been a community, our best friends are from our schools and colleges we attended? We all start with the same purpose (degree), the same group of people (cohort) and have a fixed time duration to complete courses. Online cohort-based courses have a community component built-in which helps them drive a superior learning experience, new connections and friendships for participants which could potentially unlock new opportunities for them."
        />
        <Accordion
          question="4. Can I cancel or apply for a refund after payment?"
          answer="Haven't all of our schools and colleges till date been a community, our best friends are from our schools and colleges we attended? We all start with the same purpose (degree), the same group of people (cohort) and have a fixed time duration to complete courses. Online cohort-based courses have a community component built-in which helps them drive a superior learning experience, new connections and friendships for participants which could potentially unlock new opportunities for them."
        />
        <Accordion
          question="5. Does this course guarantee me a job?"
          answer="Haven't all of our schools and colleges till date been a community, our best friends are from our schools and colleges we attended? We all start with the same purpose (degree), the same group of people (cohort) and have a fixed time duration to complete courses. Online cohort-based courses have a community component built-in which helps them drive a superior learning experience, new connections and friendships for participants which could potentially unlock new opportunities for them."
        />
        <Accordion
          question="6. How are the sessions conducted?"
          answer="Haven't all of our schools and colleges till date been a community, our best friends are from our schools and colleges we attended? We all start with the same purpose (degree), the same group of people (cohort) and have a fixed time duration to complete courses. Online cohort-based courses have a community component built-in which helps them drive a superior learning experience, new connections and friendships for participants which could potentially unlock new opportunities for them."
        />
        <Accordion
          question="7. What are the payment options available?"
          answer="Haven't all of our schools and colleges till date been a community, our best friends are from our schools and colleges we attended? We all start with the same purpose (degree), the same group of people (cohort) and have a fixed time duration to complete courses. Online cohort-based courses have a community component built-in which helps them drive a superior learning experience, new connections and friendships for participants which could potentially unlock new opportunities for them."
        />
      </div>
    </div>
  );
};

export default Faqs;
