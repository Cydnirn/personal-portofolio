import { Card, CardContent } from "@mui/material";
import { Code, Storage, DesignServices, Psychology } from "@mui/icons-material";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Code fontSize="large" />,
    skills: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Next.js",
      "Redux",
      "Material UI",
    ],
    tagClass:
      "bg-[#FCEE0C] text-black border-2 border-black brutalist-shadow-sm",
  },
  {
    title: "Backend",
    icon: <Storage fontSize="large" />,
    skills: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "MongoDB",
      "GraphQL",
      "REST APIs",
    ],
    tagClass: "bg-white text-black border-2 border-black brutalist-shadow-sm",
  },
  {
    title: "Tools & Design",
    icon: <DesignServices fontSize="large" />,
    skills: ["Figma", "Git", "Docker", "AWS", "Jest", "Webpack"],
    tagClass:
      "bg-black text-[#FCEE0C] border-2 border-black brutalist-shadow-sm",
  },
  {
    title: "Soft Skills",
    icon: <Psychology fontSize="large" />,
    skills: [
      "Communication",
      "Agile",
      "Problem Solving",
      "Leadership",
      "Mentoring",
    ],
    tagClass: "bg-white text-black border-2 border-black brutalist-shadow-sm",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-[#FF4500] border-b-4 border-black relative overflow-hidden"
    >
      {/* Background visual element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-black rounded-full mix-blend-overlay opacity-20 transform translate-x-1/2 -translate-y-1/2 blur-2xl pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-black px-6 py-2 transform -rotate-2 mb-4">
            <span className="text-[#FCEE0C] font-black text-xl uppercase tracking-widest">
              Capabilities
            </span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-black brutalist-title">
            Tech <span className="text-white text-stroke">Arsenal</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className={`brutalist-card flex flex-col h-full transform transition-transform duration-300 hover:-translate-y-2 hover:rotate-1 ${
                index % 2 === 0 ? "rotate-1" : "-rotate-1"
              }`}
              sx={{ borderRadius: 0, overflow: "visible" }}
            >
              <div className="bg-black text-[#FCEE0C] p-4 flex items-center justify-between border-b-4 border-black">
                <h3 className="text-2xl font-black uppercase tracking-wide">
                  {category.title}
                </h3>
                {category.icon}
              </div>

              <CardContent className="p-6 bg-[#FCEE0C] flex-grow">
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 font-bold uppercase text-sm md:text-base cursor-default transition-transform hover:scale-110 ${category.tagClass}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Decorative Progress Bars */}
        <div className="mt-20 bg-white border-4 border-black p-6 md:p-10 brutalist-shadow">
          <h3 className="text-3xl font-black uppercase mb-8 text-black border-b-4 border-black pb-2 inline-block">
            Power Levels
          </h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between font-bold uppercase mb-2 text-lg">
                <span>UI / UX Construction</span>
                <span>95%</span>
              </div>
              <div className="w-full h-8 bg-gray-200 border-4 border-black">
                <div className="h-full bg-[#FCEE0C] border-r-4 border-black w-[95%]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between font-bold uppercase mb-2 text-lg">
                <span>Logic & Backend</span>
                <span>85%</span>
              </div>
              <div className="w-full h-8 bg-gray-200 border-4 border-black">
                <div className="h-full bg-black border-r-4 border-black w-[85%] relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjMDAwIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMOCA4Wk04IDBMMCA4WiIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] opacity-50"></div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between font-bold uppercase mb-2 text-lg">
                <span>Coffee Consumption</span>
                <span>MAX</span>
              </div>
              <div className="w-full h-8 bg-gray-200 border-4 border-black relative">
                <div className="h-full bg-[#FF4500] border-r-4 border-black w-full animate-pulse"></div>
                <span className="absolute inset-0 flex items-center justify-center font-black text-white text-xl tracking-widest">
                  OVER 9000
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
