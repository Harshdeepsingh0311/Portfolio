import inferno from "@/assets/images/inferno.png";
import dtu from "@/assets/images/dtu.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Team Inferno",
    position: "Sr. Software Engineer",
    text: "As a Senior Software Engineer in Team Inferno DTU, I manage automation, teleoperation, and object detection systems for our Mars Rover prototype, designed for adaptability and resilience. Our team proudly secured 4th place in the 2024 International Rover Challenge.",
    year: "2023-Present",
    avatar: inferno,
  },
  {
    name: "Delhi Technological University",
    position: "Web Development Intern",
    text: "I managed and designed a website for my university's Alumni Affairs Department, integrating features with PHP, HTML, React, and OAuth. This project enhanced alumni engagement, providing a secure and user-friendly experience.",
    year: "2024 (Sep-Nov)",
    avatar: dtu,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          title="Experience"
          eyebrow="What experience i have gained"
          description="Don't just take my word for it. See what all experience i have gained so far."
        />

        <div className="mt-16 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 flex-none animate-move-left [animation-duration:10s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transtition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-md text-white/40">
                          {testimonial.position} &nbsp;
                          <span className="sm:-ml-2 lg:ml-0">&bull;</span>{" "}
                          &nbsp;
                          <span>{testimonial.year}</span>
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-sm md:text-base md:mt-6">
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
