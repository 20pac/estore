import React from "react";

import Image from "next/image";

import CheckmarkIcon from "@public/assets/chemark-icon.svg";
import Week1Graphic from "@public/assets/week1.png";
import Week2Graphic from "@public/assets/week2.gif";
import Week3Graphic from "@public/assets/week3.gif";
import Week4Graphic from "@public/assets/week4.gif";
import Week5Graphic from "@public/assets/week5.gif";
import Week6Graphic from "@public/assets/week6.gif";
import Week7Graphic from "@public/assets/week7.gif";
import Week8Graphic from "@public/assets/week8.gif";

import { WeekCurriculum, WeekCurriculumMobile } from "@src/components/week-curriculum";

export const LearningJourney = () => (
  <>
    <div className="flex flex-col mt-10">
      <h1 className="font-bold 1440:text-largest xl:text-54 text-48">
        Your learning{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-eight to-nine">journey.</span>
      </h1>
      <div className="flex flex-row items-center mt-8">
        <div className="flex flex-col flex-1 pr-6">
          <div className="flex">
            <div className="bg-blue rounded-md px-3 py-1 text-small xl:text-medium font-semibold text-white">
              Week 1
            </div>
          </div>
          <p className="font-bold text-large my-4 xl:my-6">Introduction to Kotlin and Enviromment Setup</p>
          <div>
            <div className="text-extraSmall xl:text-small mb-4 xl:mb-5 flex items-center">
              <div className="flex items-center">
                <Image src={CheckmarkIcon} width={24} layout="fixed" />
              </div>
              <span className="ml-4">
                Set up your environment for development, and learn corresponding best practices
              </span>
            </div>
            <div className="text-extraSmall xl:text-small mb-5 flex items-center">
              <div>
                <Image src={CheckmarkIcon} width={24} layout="fixed" />
              </div>
              <span className="ml-4">
                Learn about Kotlin basics: Syntax, Classes, Generics, Higher-order functions, and Exceptions
              </span>
            </div>
            <div className="text-extraSmall xl:text-small mb-5 flex items-center">
              <div>
                <Image src={CheckmarkIcon} width={24} layout="fixed" />
              </div>
              <span className="ml-4">Create your first Kotlin Application</span>
            </div>
          </div>
        </div>
        <div className="flex-1">
          {" "}
          <div>
            <Image src={Week1Graphic} />
          </div>
        </div>
      </div>
    </div>
    <WeekCurriculum
      heading="Introduction to Android"
      weekNumber={2}
      points={[
        "History and Origins: Learn about the history of Android, how it came into being, and the philosophy behind it",
        "Learn Android Basics: Android studio, IDE, JVM, JDK, NDK",
        "Create your first project: Learn about the project structure and app fundamentals: activities, services, content providers, manifest, and resources",
      ]}
      reverse
      image={Week2Graphic}
      shiftGraphic={false}
    />
    <WeekCurriculum
      heading="Add User Interfaces to your project"
      weekNumber={3}
      points={[
        "Learn about Layouts: Building them from the layout editor, editing the source code",
        "Learn about Material Design Basics and other plugins",
        "Learn about Constrained, List, and Recycler Layouts",
      ]}
      image={Week3Graphic}
    />
    <WeekCurriculum
      heading="Handling Application Data"
      weekNumber={4}
      points={[
        "Learn about the complete App Lifecycle: ViewModel, LiveData, UI States",
        "Fetch data from various sources, maintain state, and handle paged data",
        "Async fetching and task processing using the work manager",
      ]}
      reverse
      image={Week4Graphic}
    />
    <WeekCurriculum
      heading="Activities and Lifecycle"
      weekNumber={5}
      points={[
        "Introduction to Activites, their importance, and lifecycle, and state changes",
        "Set up activities in your project",
        "Testing your activities",
      ]}
      image={Week5Graphic}
    />
    <WeekCurriculum
      heading="Fragments, Navigation and Deeplinking"
      weekNumber={6}
      points={[
        "Principles of navigation and fragments",
        "Create different fragments, learn about fragment lifecycle, navigate between fragments and learn about animations",
        "Wrap up and minimalist and maximalist views",
      ]}
      reverse
      image={Week6Graphic}
    />
    <WeekCurriculum
      heading="Learn and implement Android Core Functionality"
      weekNumber={7}
      points={[
        "Images & Graphics, and Audio & Video",
        "Location, touch & input, and Camera",
        "Background tasks and external libraries",
      ]}
      image={Week7Graphic}
    />
    <WeekCurriculum
      heading="Release to the Google Play Store"
      weekNumber={8}
      points={[
        "Generate signed APKs, bundles, and learn about obfuscation and optimisations",
        "Release your app to the Google Play Store",
        "Wrapping everything up",
      ]}
      reverse
      image={Week8Graphic}
    />
  </>
);

export const LearningJourneyMobile = () => (
  <div className="sm:px-6">
    <div className="flex flex-col mt-8">
      <h1 className="font-bold text-small">
        Your learning{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-eight to-nine">journey.</span>
      </h1>
      <div className="flex flex-row mt-7">
        <div className="flex flex-col flex-1">
          <div className="flex">
            <div className="bg-blue rounded-md p-2 text-mini font-bold text-white">Week 1</div>
          </div>
          <p className="font-bold text-extraSmall mt-3 mb-4">Introduction to Kotlin and Enviromment Setup</p>
          <div>
            <div>
              <Image src={Week1Graphic} className="rounded-xl" />
            </div>
          </div>
          <div className="flex text-mini mb-3 items-center mt-5">
            <div>
              <Image src={CheckmarkIcon} width={15} layout="fixed" />
            </div>
            <span className="ml-2">
              Set up your environment for development, and learn corresponding best practices
            </span>
          </div>
          <div className="flex text-mini mb-3 items-center">
            <div>
              <Image src={CheckmarkIcon} width={15} layout="fixed" />
            </div>
            <span className="ml-2">
              Learn about Kotlin basics: Syntax, Classes, Generics, Higher-order functions, and Exceptions
            </span>
          </div>
          <div className="flex text-mini mb-3 items-center">
            <div>
              <Image src={CheckmarkIcon} width={15} layout="fixed" />
            </div>
            <span className="ml-2">Create your first Kotlin Application</span>
          </div>
        </div>
      </div>
    </div>
    <WeekCurriculumMobile
      heading="Introduction to Android"
      weekNumber={2}
      points={[
        "History and Origins: Learn about the history of Android, how it came into being, and the philosophy behind it",
        "Learn Android Basics: Android studio, IDE, JVM, JDK, NDK",
        "Create your first project: Learn about the project structure and app fundamentals: activities, services, content providers, manifest, and resources",
      ]}
      image={Week2Graphic}
      shiftGraphic={false}
    />
    <WeekCurriculumMobile
      heading="Add User Interfaces to your project"
      weekNumber={3}
      points={[
        "Learn about Layouts: Building them from the layout editor, editing the source code",
        "Learn about Material Design Basics and other plugins",
        "Learn about Constrained, List, and Recycler Layouts",
      ]}
      image={Week3Graphic}
    />
    <WeekCurriculumMobile
      heading="Handling Application Data"
      weekNumber={4}
      points={[
        "Learn about the complete App Lifecycle: ViewModel, LiveData, UI States",
        "Fetch data from various sources, maintain state, and handle paged data",
        "Async fetching and task processing using the work manager",
      ]}
      image={Week4Graphic}
    />
    <WeekCurriculumMobile
      heading="Activities and Lifecycle"
      weekNumber={5}
      points={[
        "Introduction to Activites, their importance, and lifecycle, and state changes",
        "Set up activities in your project",
        "Testing your activities",
      ]}
      image={Week5Graphic}
    />
    <WeekCurriculumMobile
      heading="Fragments, Navigation and Deeplinking"
      weekNumber={6}
      points={[
        "Principles of navigation and fragments",
        "Create different fragments, learn about fragment lifecycle, navigate between fragments and learn about animations",
        "Wrap up and minimalist and maximalist views",
      ]}
      image={Week6Graphic}
    />
    <WeekCurriculumMobile
      heading="Learn and implement Android Core Functionality"
      weekNumber={7}
      points={[
        "Images & Graphics, and Audio & Video",
        "Location, touch & input, and Camera",
        "Background tasks and external libraries",
      ]}
      image={Week7Graphic}
    />
    <WeekCurriculumMobile
      heading="Release to the Google Play Store"
      weekNumber={8}
      points={[
        "Generate signed APKs, bundles, and learn about obfuscation and optimisations",
        "Release your app to the Google Play Store",
        "Wrapping everything up",
      ]}
      image={Week8Graphic}
    />
  </div>
);

export default LearningJourney;
