import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import React from "react";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

import NextArrow from "@public/assets/next-arrow.svg";
import User1Image from "@public/assets/user1.png";
import User2Image from "@public/assets/user2.png";
import User3Image from "@public/assets/user3.png";

import { Media } from "../utils/media";

type TestimonialCardProps = {
  text: string;
  image?: any;
  name: string;
  role: string;
};

const TestimonialCard = ({ text, name, role, image }: TestimonialCardProps) => (
  <div className="p-4 sm:max-w-screen-270 xl:max-w-screen-md h-12 w-10 md:h-13 xl:h-auto lg:w-400 border rounded-xl flex mr-4 flex-col items-start">
    <div className="rounded-full w-7 h-7 md:w-8 md:h-8 mb-4">
      <Image src={image} />
    </div>
    <p className="text-mini md:text-extraSmall leading-body text-justify">{text}</p>
    <p className="mt-4 text-mini md:text-extraSmall font-medium">{name}</p>
    <p className="text-textLight text-mini md:text-extraSmall">{role}</p>
  </div>
);

const TestimonialsSection = () => {
  const statusIndicator = () => {
    return "";
  };

  const nextButton = (_onClickHandler: () => void, hasNext: boolean, _label: string) => {
    return (
      hasNext && (
        <button
          className="shadow-2xl flex justify-center items-center rounded-full w-5 bg-white h-5 absolute z-50 top-180 right-1"
          onClick={_onClickHandler}>
          <Image src={NextArrow} />
        </button>
      )
    );
  };

  const prevButton = (_onClickHandler: () => void, hasPrev: boolean, _label: string) => {
    return (
      hasPrev && (
        <button
          className="shadow-2xl rounded-full w-5 bg-white h-5 absolute z-50 bg-white top-180 left-1"
          onClick={_onClickHandler}>
          <Image src={NextArrow} />
        </button>
      )
    );
  };

  return (
    <div className="flex flex-col items-center md:mt-10 mt-8">
      <h1 className="font-bold 1440:text-largest xl:text-54 md:text-48 text-small mb-5 text-center">
        Some people think we&apos;re{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-three to-four">cool.</span>
      </h1>
      {/*<div className="flex flex-row justify-center gap-6 flex-wrap mt-6">*/}
      <div className="mt-5 md:mt-7">
        <Media greaterThanOrEqual="xl">
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
              image={User1Image}
            />
            <TestimonialCard
              text="The instructor and the mentors are super helpful and keep the class very interactive. Got all my doubts cleared."
              name="Shalini Arora"
              role="Android Developer @Mfine"
              image={User2Image}
            />
            <TestimonialCard
              text="Loved learning by building. The hands-on projects are pretty much like real-world projects, so I found the course very helpful."
              name="Rohit Sharma"
              role="SDE @Uber"
              image={User3Image}
            />
          </Carousel>
        </Media>
        <Media between={["md", "xl"]}>
          <div className="overflow-hidden flex max-w-screen-md">
            <Carousel
              axis="horizontal"
              centerSlidePercentage={50}
              width="600px"
              statusFormatter={statusIndicator}
              showIndicators={false}
              showArrows
              renderArrowNext={nextButton}
              renderArrowPrev={prevButton}
              centerMode={true}
              showThumbs={false}>
              <TestimonialCard
                text="The course is quite comprehensive and hands-on. Working on projects with peers and getting 1:1 feedback was
            a huge plus."
                name="Ankit Puri"
                role="SDE @Paytm"
                image={User1Image}
              />
              <TestimonialCard
                text="The instructor and the mentors are super helpful and keep the class very interactive. Got all my doubts cleared."
                name="Shalini Arora"
                role="Android Developer @Mfine"
                image={User2Image}
              />
              <TestimonialCard
                text="Loved learning by building. The hands-on projects are pretty much like real-world projects, so I found the course very helpful."
                name="Rohit Sharma"
                role="SDE @Uber"
                image={User3Image}
              />
            </Carousel>
          </div>
        </Media>
        <Media lessThan="md">
          <div className="overflow-hidden flex justify-center items-center max-w-screen-270 sm:max-w-screen-320">
            <Carousel
              axis="horizontal"
              centerSlidePercentage={90}
              width="270px"
              statusFormatter={statusIndicator}
              showIndicators={false}
              showArrows
              renderArrowNext={nextButton}
              renderArrowPrev={prevButton}
              centerMode={true}
              showThumbs={false}>
              <TestimonialCard
                text="The course is quite comprehensive and hands-on. Working on projects with peers and getting 1:1 feedback was
            a huge plus."
                name="Ankit Puri"
                role="SDE @Paytm"
                image={User1Image}
              />
              <TestimonialCard
                text="The instructor and the mentors are super helpful and keep the class very interactive. Got all my doubts cleared."
                name="Shalini Arora"
                role="Android Developer @Mfine"
                image={User2Image}
              />
              <TestimonialCard
                text="Loved learning by building. The hands-on projects are pretty much like real-world projects, so I found the course very helpful."
                name="Rohit Sharma"
                role="SDE @Uber"
                image={User3Image}
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
