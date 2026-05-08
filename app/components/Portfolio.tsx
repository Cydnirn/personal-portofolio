import { OpenInNew, GitHub } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";

const projects = [
  {
    title: "Blockchain Demo Project",
    description:
      "A demo project that showcases a basic blockchain system with TUI using .NET Core.",
    image:
      "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=800&auto=format&fit=crop",
    tech: [".NET Core"],
    githubLink: "https://github.com/Cydnirn/blockchain-demo",
    color: "bg-[#FCEE0C]",
  },
  {
    title: "Terminal MP3 Media Player",
    description:
      "A terminal-based MP3 media player that allows users to play, pause, and navigate through their music library from the command line.",
    image:
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=800&auto=format&fit=crop",
    tech: ["C++"],
    githubLink: "https://github.com/Cydnirn/MP3MediaPlayer",
    color: "bg-[#FF4500]",
  },
  {
    title: "IoT Student Attendance",
    description:
      "A web application that allows students to mark their attendance using IoT devices.",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop",
    tech: ["ESP32", "Express", "C++"],
    githubLink: "https://github.com/Cydnirn/espAuthAbsent",
    color: "bg-white",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-black border-b-4 border-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 cursor-default">
          <div>
            <div className="inline-block bg-[#FF4500] px-4 py-1 mb-6 border-2 border-black transform rotate-2">
              <span className="text-white font-black text-lg uppercase tracking-widest">
                Selected Works
              </span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-[#FCEE0C] brutalist-title">
              My <span className="text-white">Portfolio</span>
            </h2>
          </div>

          <div className="hidden md:block">
            <Button
              href="https://github.com/Cydnirn"
              target="_blank"
              rel="noreferrer"
              className="brutalist-button alt"
              sx={{ borderRadius: 0 }}
            >
              View All on GitHub <GitHub className="ml-2" />
            </Button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`bg-white border-4 border-[#FCEE0C] group relative transition-transform duration-300 hover:-translate-y-2 hover:-translate-x-2 ${index % 2 !== 0 ? "lg:mt-16" : ""}`}
            >
              {/* Fake 3D Shadow/Border effect */}
              <div className="absolute inset-0 border-4 border-black pointer-events-none z-10"></div>
              <div className="absolute top-2 left-2 w-full h-full bg-[#FCEE0C] border-4 border-black -z-10 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>

              {/* Image Container */}
              <div className="relative h-64 sm:h-80 border-b-4 border-black overflow-hidden bg-black p-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 border-2 border-black"
                />
                {/* Overlay Badge */}
                <div
                  className={`absolute top-6 left-6 ${project.color} border-4 border-black px-4 py-2 brutalist-shadow-sm transform -rotate-3 z-20`}
                >
                  <span className="font-black uppercase text-black text-sm sm:text-base">
                    Featured
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 sm:p-8 bg-white relative z-20">
                <h3 className="text-3xl sm:text-4xl font-black uppercase text-black mb-4 group-hover:text-[#FF4500] transition-colors">
                  {project.title}
                </h3>

                <p className="text-lg font-bold text-gray-800 mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 border-2 border-black text-black font-bold uppercase text-xs sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-4 border-t-4 border-black pt-6">
                  {project?.liveLink && (
                    <Button
                      href={project?.liveLink}
                      className="flex-1 brutalist-button text-sm sm:text-base"
                      sx={{ borderRadius: 0 }}
                    >
                      Live Demo <OpenInNew className="ml-2" fontSize="small" />
                    </Button>
                  )}
                  <IconButton
                    href={project.githubLink}
                    className="flex-none p-3 border-4 border-black bg-white hover:bg-[#FCEE0C] transition-colors flex items-center justify-center brutalist-shadow-sm hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                    aria-label="View Source Code"
                    sx={{ borderRadius: 0 }}
                  >
                    {!project?.liveLink && (
                      <span className="px-3 py-1 text-black font-bold uppercase text-xs sm:text-sm">
                        See on Github
                      </span>
                    )}
                    <GitHub />
                  </IconButton>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-12 md:hidden block">
          <Button
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="brutalist-button alt w-full"
            sx={{ borderRadius: 0 }}
          >
            View All on GitHub <GitHub className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
