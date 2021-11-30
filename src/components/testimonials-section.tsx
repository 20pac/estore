import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import React from "react";

import { Carousel } from "react-responsive-carousel";

import { Media } from "../utils/media";

type TestimonialCardProps = {
  text: string;
  image?: any;
  name: string;
  role: string;
};

const TestimonialCard = ({
  text,
  name,
  role,
}: // image
TestimonialCardProps) => (
  <div className="p-4 border rounded flex mr-4 flex-col items-start justify-center">
    <div className="rounded-full w-8 h-8 bg-blue mb-4" />
    <p className="text-extraSmall leading-body text-justify">{text}</p>
    <p className="mt-4 font-medium">{name}</p>
    <p className="text-textLight">{role}</p>
  </div>
);

const TestimonialsSection = () => {
  const statusIndicator = () => {
    return "";
  };

  return (
    <div className="flex flex-col md:mt-10 mt-8">
      <h1 className="font-bold 1440:text-largest xl:text-54 md:text-48 text-small mb-5 text-center">
        Some people think we&apos;re{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-three to-four">cool.</span>
      </h1>
      {/*<div className="flex flex-row justify-center gap-6 flex-wrap mt-6">*/}
      <div className="min-w-min">
        <Media greaterThanOrEqual="md">
          <Carousel
            axis="horizontal"
            centerMode
            swipeable={false}
            centerSlidePercentage={33.33}
            statusFormatter={statusIndicator}
            showIndicators={false}
            showThumbs={false}>
            <TestimonialCard
              text="The course is quite comprehensive and hands-on. Working on projects with peers and getting 1:1 feedback was
            a huge plus."
              name="Ankit Puri"
              role="SDE @Paytm"
            />
            <TestimonialCard
              text="The course is quite comprehensive and hands-on. Working on projects with peers and getting 1:1 feedback was
            a huge plus."
              name="Ankit Puri"
              role="SDE @Paytm"
            />
            <TestimonialCard
              text="The course is quite comprehensive and hands-on. Working on projects with peers and getting 1:1 feedback was
            a huge plus."
              name="Ankit Puri"
              role="SDE @Paytm"
            />
          </Carousel>
        </Media>
        <Media lessThan="md">
          <div>
            <Carousel
              axis="horizontal"
              centerSlidePercentage={100}
              statusFormatter={statusIndicator}
              showIndicators={false}
              centerMode={true}
              showThumbs={false}>
              <div className="flex flex-col items-center justify-center">
                <TestimonialCard
                  text="The course is quite comprehensive and hands-on. Working on projects with peers and getting 1:1 feedback was
            a huge plus."
                  name="Ankit Puri"
                  role="SDE @Paytm"
                />
              </div>
              <TestimonialCard
                text="The course is quite comprehensive and hands-on. Working on projects with peers and getting 1:1 feedback was
            a huge plus."
                name="Ankit Puri"
                role="SDE @Paytm"
              />
              <TestimonialCard
                text="The course is quite comprehensive and hands-on. Working on projects with peers and getting 1:1 feedback was
            a huge plus."
                name="Ankit Puri"
                role="SDE @Paytm"
              />
            </Carousel>
          </div>
        </Media>
      </div>

      {/*</div>*/}
    </div>
  );
};

export default TestimonialsSection;
