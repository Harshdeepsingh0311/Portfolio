import projectInferno from "@/assets/images/projectInferno.png";
import projectAlumniAffairs from "@/assets/images/projectAlumniAffairs.png";
import projectSpotify from "@/assets/images/spotify.png";
import deployme from "@/assets/images/deployme.png"
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "DeployMe",
    year: "2026",
    title: "DeployMe - Portfolio Generation Platform",
    results: [{ title: "No-code portfolio generation workflow" }, { title: "Shareable, auto-generated portfolio URLs" }, {title: "Centralized dashboard-based content management"}],
    code: "https://github.com/Harshdeepsingh0311/DeployMe",
    link: "https://deployme-dev.vercel.app",
    image: deployme,
  },
  {
    company: "Delhi Technological University",
    year: "2024",
    title: "Alumni Affairs Department Website",
    results: [
      { title: "Improved design" },
      { title: "Intoduced functionality like Admin panel" },
      { title: "Increased traffic by 58%" },
    ],
    link: "http://alumniaffairs.dtu.ac.in",
    code: "https://github.com/Harshdeepsingh0311/dtualumniaffairs",
    image: projectAlumniAffairs,
  },
  {
    company: "Inferno DTU",
    year: "2023",
    title: "Portfolio Page for Team Inferno",
    results: [
      { title: "Attracted more sponsors by 40%" },
      { title: "Increased traffic by 35%" },
    ],
    link: "https://harshdeepsingh0311.github.io/InfernoDTU",
    code: "https://github.com/Harshdeepsingh0311/InfernoDTU",
    image: projectInferno,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <SectionHeader
          title="Real-world Results"
          eyebrow="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences."
        />

        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project, idx) => (
            <Card
              key={project.title}
              className="px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 pb-0 sticky"
              style={{
                top: `calc(64px + ${idx * 40}px)`,
              }}
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{ backgroundImage: `url(${grainImage.src})` }}
              ></div>

              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl md:text-4xl md:mt-5 mt-2">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                  <a href={project.code} className="md:ml-3">
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>View Code</span>
                    </button>
                  </a>
                </div>
                <div className="">
                  <a href={project.link}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="mt-8 lg:mt-0 lg:absolute lg:h-full "
                    />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
