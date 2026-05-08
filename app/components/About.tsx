export default function About() {
  return (
    <section id="about" className="py-24 bg-white border-b-4 border-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Section Title - Left Side */}
          <div className="lg:w-1/3 w-full relative">
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-black brutalist-title relative z-10">
              Who <br className="hidden lg:block" />
              <span className="text-stroke relative">
                Am I?
                {/* Decorative underline */}
                <svg
                  className="absolute w-full h-8 -bottom-4 left-0 text-[#FF4500] -z-10"
                  viewBox="0 0 200 20"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,10 Q100,20 200,0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                  />
                </svg>
              </span>
            </h2>

            <div className="hidden lg:block absolute -top-8 -left-8 w-24 h-24 bg-[#FCEE0C] border-4 border-black brutalist-shadow rounded-full -z-10"></div>
          </div>

          {/* Content - Right Side */}
          <div className="lg:w-2/3 w-full">
            <div className="bg-[#FCEE0C] border-4 border-black brutalist-shadow p-6 md:p-10 relative transform rotate-1 hover:rotate-0 transition-transform duration-300">
              {/* Tape effect */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-gray-200 opacity-80 transform -rotate-2 mix-blend-multiply"></div>

              <h3 className="text-2xl md:text-4xl font-black uppercase mb-6 text-black border-b-4 border-black pb-4">
                Biography
              </h3>

              <div className="space-y-6 text-lg md:text-xl font-bold text-black leading-relaxed">
                <p>
                  I'm a software developer who believes the web shouldn't be
                  boring (Well life should't be). My background blends software
                  development with an obsession for unconventional design and
                  raw user experiences.
                </p>
                <p>
                  Specializing in React, Node.js, and Cloud Computing, I build
                  applications that don't just function flawlessly, they make a
                  statement. Whether it's a corporate dashboard or a creative
                  portfolio, I bring high contrast and high performance to every
                  project.
                </p>
              </div>

              {/* Stats/Interests Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                <div className="bg-white border-4 border-black p-4 brutalist-shadow-sm text-center transform hover:-translate-y-1 transition-transform">
                  <span className="block text-3xl font-black text-[#FF4500]">
                    3+
                  </span>
                  <span className="block text-sm font-bold uppercase mt-1">
                    Years Exp
                  </span>
                </div>
                <div className="bg-white border-4 border-black p-4 brutalist-shadow-sm text-center transform hover:-translate-y-1 transition-transform">
                  <span className="block text-3xl font-black text-[#FF4500]">
                    10+
                  </span>
                  <span className="block text-sm font-bold uppercase mt-1">
                    Projects
                  </span>
                </div>
                <div className="bg-white border-4 border-black p-4 brutalist-shadow-sm text-center transform hover:-translate-y-1 transition-transform">
                  <span className="block text-3xl font-black text-[#FF4500]">
                    ∞
                  </span>
                  <span className="block text-sm font-bold uppercase mt-1">
                    Coffee
                  </span>
                </div>
                <div className="bg-black border-4 border-black p-4 brutalist-shadow-sm text-center transform hover:-translate-y-1 transition-transform">
                  <span className="block text-3xl font-black text-[#FCEE0C]">
                    100%
                  </span>
                  <span className="block text-sm font-bold uppercase mt-1 text-white">
                    Passion
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
