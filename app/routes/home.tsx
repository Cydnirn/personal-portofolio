import type { Route } from "./+types/home";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Creative Developer | Portfolio" },
    {
      name: "description",
      content:
        "Personal portfolio of a creative full-stack developer specializing in raw, brutalist web design.",
    },
  ];
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FCEE0C] text-black w-full overflow-x-hidden">
      <Navbar />
      <main className="flex-grow w-full">
        <Hero />
        <About />
        <Skills />
        <Portfolio />
      </main>
      <Contact />
    </div>
  );
}
