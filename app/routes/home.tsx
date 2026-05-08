import type { Route } from "./+types/home";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

export function meta({}: Route.MetaArgs) {
  const title = "Cydnirn | Portfolio";
  const description =
    "Personal portfolio of a creative full-stack developer specializing in raw, brutalist web design.";
  // Note: Replace the URL with your actual deployed domain once you have it, e.g., "https://yourdomain.com/preview.png"
  const imageUrl = "/preview.png";

  return [
    { title },
    { name: "description", content: description },

    // Open Graph / Facebook
    { property: "og:type", content: "website" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: imageUrl },

    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: imageUrl },
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
