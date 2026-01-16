"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import Image from "next/image";
import HTMLIcon from "@/assets/icons/html5.svg";
import JSIcon from "@/assets/icons/square-js.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import gitIcon from "@/assets/icons/github.svg";
import reactIcon from "@/assets/icons/react.svg";
import nextIcon from "@/assets/icons/next.svg";
import pythonIcon from "@/assets/icons/python.svg";
import javaIcon from "@/assets/icons/java.svg";
import cIcon from "@/assets/icons/c.svg";
import rosIcon from "@/assets/icons/ros.svg";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import supabase from "@/assets/icons/supabase.svg";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";
import dtu from "@/assets/images/dtu.png";
import sgnps from "@/assets/images/sgnps.png";
import { EducationCard } from "@/components/EducationCard";

const toolboxItems = [
  {
    title: "Python",
    iconType: pythonIcon,
  },
  {
    title: "React",
    iconType: reactIcon,
  },
  {
    title: "Next",
    iconType: nextIcon,
  },
  {
    title: "JavaScript",
    iconType: JSIcon,
  },
  {
    title: "Supabase",
    iconType: supabase,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CSSIcon,
  },
  {
    title: "ROS",
    iconType: rosIcon,
  },
  {
    title: "Java",
    iconType: javaIcon,
  },
  {
    title: "C",
    iconType: cIcon,
  },
  {
    title: "Github",
    iconType: gitIcon,
  },
];

const hobbies = [
  {
    title: "Gaming",
    emoji: "🎮",
    left: "10%",
    top: "15%",
  },
  {
    title: "Reading",
    emoji: "📖",
    left: "50%",
    top: "0%",
  },
  {
    title: "Table Tennis",
    emoji: "🏓",
    left: "25%",
    top: "45%",
  },
  {
    title: "Travel",
    emoji: "🗺️",
    left: "50%",
    top: "70%",
  },
];

export const AboutSection = () => {
  const constrainRef = useRef(null);
  return (
    <div className="py-20 lg:py-28" id="about">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-2">
              <CardHeader
                title="Education"
                description="Get to know about my educational Qualifications"
              />
              {/* <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="Book cover" />
              </div> */}
              <div className="lg:p-2 lg:-mt-8 -mt-3">
                <EducationCard image={sgnps} instiName="Sri Guru Nanak Public School" year="2023" course="Percentage: 96.4%" />
                <EducationCard image={dtu} instiName="Delhi Technological University" year="2023-27" course="Btech (ECE) CGPA-8.6" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-1">
              <CardHeader
                title="My Toolbox"
                description="Explore the tools I use."
                className=""
              />
              <ToolboxItems
                items={toolboxItems}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName=" animate-move-right [animation-duration:20s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-1">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital realm."
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constrainRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constrainRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-2">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image
                  src={smileMemoji}
                  alt="smiling memoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
