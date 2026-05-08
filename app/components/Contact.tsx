import {
  GitHub,
  LinkedIn,
  Twitter,
  Email,
  ArrowUpward,
} from "@mui/icons-material";

export default function Contact() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      id="contact"
      className="bg-[#FCEE0C] border-t-4 border-black relative z-10 overflow-hidden"
    >
      {/* Tape effect decoration */}
      <div className="absolute top-0 left-1/4 w-48 h-12 bg-gray-200 opacity-50 transform -rotate-3 -translate-y-1/2 mix-blend-multiply pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Message */}
          <div>
            <div className="inline-block bg-black px-4 py-2 mb-6 transform -rotate-2">
              <span className="text-[#FF4500] font-black text-xl uppercase tracking-widest">
                What's Next?
              </span>
            </div>

            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-black brutalist-title mb-6 leading-none">
              Let's Build <br />
              <span className="text-white text-stroke">Something</span> <br />
              Brutal.
            </h2>

            <p className="text-xl md:text-2xl font-bold text-black border-l-8 border-[#FF4500] pl-6 py-2 mb-10 max-w-lg">
              I'm currently available for freelance projects and open to new
              full-time opportunities. Drop me a line if you want to create
              digital experiences that refuse to be ignored.
            </p>
          </div>

          {/* Right Column - Contact Info & Socials */}
          <div className="flex flex-col gap-8">
            {/* Email Block */}
            <a
              href="mailto:cydnirn.dev@gmail.com"
              className="bg-white border-4 border-black p-6 md:p-10 brutalist-shadow group transform transition-transform hover:-translate-y-2 hover:-translate-x-2 flex flex-col items-center sm:items-start text-center sm:text-left"
            >
              <span className="text-sm font-black uppercase tracking-widest text-gray-500 mb-2 block">
                Direct Line
              </span>
              <div className="flex items-center gap-4 text-black group-hover:text-[#FF4500] transition-colors break-all">
                <Email fontSize="large" className="hidden sm:block" />
                <span className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
                  cydnirn.dev@gmail.com
                </span>
              </div>
            </a>

            {/* Social Links */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <a
                href="https://github.com/Cydnirn"
                target="_blank"
                rel="noreferrer"
                className="bg-black text-[#FCEE0C] border-4 border-black p-6 flex flex-col items-center justify-center gap-2 brutalist-shadow-sm hover:bg-[#FF4500] hover:text-white transition-colors transform hover:-translate-y-1"
              >
                <GitHub fontSize="large" />
                <span className="font-bold uppercase text-sm">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/seno-aji"
                target="_blank"
                rel="noreferrer"
                className="bg-white text-[#0A66C2] border-4 border-black p-6 flex flex-col items-center justify-center gap-2 brutalist-shadow-sm hover:bg-[#0A66C2] hover:text-white transition-colors transform hover:-translate-y-1"
              >
                <LinkedIn fontSize="large" />
                <span className="font-bold uppercase text-sm text-black group-hover:text-white">
                  LinkedIn
                </span>
              </a>
              <button
                onClick={scrollToTop}
                className="bg-[#FF4500] text-white border-4 border-black p-6 flex flex-col items-center justify-center gap-2 brutalist-shadow-sm hover:bg-white hover:text-[#FF4500] transition-colors transform hover:-translate-y-1 focus:outline-none"
                aria-label="Back to top"
              >
                <ArrowUpward fontSize="large" />
                <span className="font-bold uppercase text-sm text-black">
                  Top
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="bg-black text-white border-t-4 border-black py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-bold uppercase tracking-wider text-sm text-center md:text-left">
            © {new Date().getFullYear()} Cydnirn. All rights reserved.
          </p>
          <div className="flex gap-6 font-bold uppercase tracking-wider text-sm">
            <a href="#" className="hover:text-[#FCEE0C] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#FCEE0C] transition-colors">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
