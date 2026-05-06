import { ArrowForward, MailOutlined } from "@mui/icons-material";

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full min-h-[90vh] flex items-center bg-[#FCEE0C] border-b-4 border-black relative overflow-hidden"
    >
      {/* Decorative dot grid background */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 3px 3px, black 2px, transparent 0)",
          backgroundSize: "48px 48px",
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col gap-6 items-start z-20">
            <div className="inline-block bg-white border-4 border-black px-4 py-2 brutalist-shadow-sm transform -rotate-2">
              <span className="font-bold text-xl md:text-2xl uppercase tracking-widest text-black">
                Hello, World! I am
              </span>
            </div>

            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase leading-[0.9] tracking-tighter text-black brutalist-title">
              Creative <br />
              <span className="text-[#FF4500] inline-block mt-2 transform hover:scale-105 transition-transform duration-300 origin-left">
                Developer
              </span>
            </h1>

            <p className="text-lg md:text-2xl font-bold max-w-2xl bg-white p-5 border-4 border-black brutalist-shadow-sm mt-4 leading-snug">
              Building raw, memorable, and high-performance digital experiences.
              I blend strong engineering with bold visual aesthetics.
            </p>

            <div className="flex flex-wrap gap-6 mt-8">
              <a
                href="#portfolio"
                className="brutalist-button text-lg md:text-xl flex gap-3 items-center"
              >
                View Portfolio <ArrowForward fontSize="medium" />
              </a>
              <a
                href="#contact"
                className="brutalist-button alt text-lg md:text-xl flex gap-3 items-center"
              >
                Contact Me <MailOutlined fontSize="medium" />
              </a>
            </div>
          </div>

          {/* Abstract Visual Elements */}
          <div className="hidden lg:flex lg:col-span-5 justify-center items-center relative h-[500px]">
            {/* Background Shape */}
            <div className="w-80 h-80 bg-[#FF4500] border-4 border-black brutalist-shadow rounded-full absolute top-10 right-0 animate-pulse"></div>

            {/* Center Image/Card Container */}
            <div className="w-72 h-96 bg-white border-8 border-black brutalist-shadow transform rotate-6 absolute z-10 hover:rotate-0 transition-transform duration-500 flex items-center justify-center overflow-hidden">
              <div className="w-full h-full bg-black flex items-center justify-center p-4">
                <img
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop"
                  alt="Abstract brutalist art"
                  className="w-full h-full object-cover grayscale contrast-150"
                />
              </div>
            </div>

            {/* Floating Banner */}
            <div className="px-6 py-4 bg-black absolute bottom-12 -left-12 z-20 brutalist-shadow transform -rotate-3 hover:rotate-3 transition-transform duration-300">
              <span className="text-[#FCEE0C] text-3xl font-black uppercase tracking-widest">
                Stand Out
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling Text Marquee */}
      <div className="absolute bottom-0 w-full bg-black text-[#FCEE0C] py-3 border-t-4 border-black overflow-hidden flex whitespace-nowrap">
        <div className="animate-marquee flex space-x-8 text-2xl font-black uppercase tracking-wider">
          <span>
            UI/UX DESIGN • FULL STACK DEVELOPMENT • REACT SPECIALIST • CREATIVE
            CODING • UI/UX DESIGN • FULL STACK DEVELOPMENT • REACT SPECIALIST •
            CREATIVE CODING
          </span>
          <span>
            UI/UX DESIGN • FULL STACK DEVELOPMENT • REACT SPECIALIST • CREATIVE
            CODING • UI/UX DESIGN • FULL STACK DEVELOPMENT • REACT SPECIALIST •
            CREATIVE CODING
          </span>
        </div>
      </div>
    </section>
  );
}
