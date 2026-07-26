import arman from "../Images/armaan1.jpg";
import { FaInstagram, FaFacebookSquare, FaGithub, FaSnapchatGhost } from "react-icons/fa";

function Showcase() {
  return (
    <section className="hero-shell relative overflow-hidden bg-gradient-to-r from-slate-50 via-slate-100 to-slate-200 px-5 py-16 md:px-20">
      <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_top_right,_rgba(15,23,42,0.12),_transparent_45%)] md:block" />

      <div className="relative mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 md:flex-row md:items-center md:gap-16">
        <div className="w-full md:w-1/2 text-center md:text-left">
         
          <h1 className="hero-title mt-4 text-4xl font-bold text-slate-900 sm:text-5xl">
            Hi, I’m Abdirahman Abdalla Nasser
          </h1>
          <p className="hero-text mt-5 max-w-xl text-base leading-8 text-slate-700">
            I’m a Content Creator by strength and a CCTV System Expert by passion. I combine creativity, technology, and storytelling to create digital experiences that are modern, engaging, and impactful.
          </p>

          <div className="hero-actions mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:justify-start">
            <a
              href="#portfolio"
              className="hero-button inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-300 transition hover:bg-slate-800"
            >
              View Portfolio
            </a>
            <a
              href="https://wa.me/2520617942032"
              target="_blank"
              rel="noreferrer"
              className="hero-button inline-flex items-center justify-center rounded-full border border-slate-900 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Contact Me
            </a>
          </div>

          <div className="hero-socials mt-8 flex justify-center gap-4 text-slate-900 md:justify-start">
            <a href="https://www.instagram.com/armaan__mk32?igsh=Z2o3MmJlM2ViMXIz&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hero-social-link rounded-full bg-white p-3 shadow-sm transition hover:bg-slate-100">
              <FaInstagram className="h-5 w-5" />
            </a>
            <a href="https://www.facebook.com/abdirahman.abdullahi.58173?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="hero-social-link rounded-full bg-white p-3 shadow-sm transition hover:bg-slate-100">
              <FaFacebookSquare className="h-5 w-5" />
            </a>
            <a href="https://github.com/Armaanmk32" target="_blank" rel="noopener noreferrer" className="hero-social-link rounded-full bg-white p-3 shadow-sm transition hover:bg-slate-100">
              <FaGithub className="h-5 w-5" />
            </a>
            <a href="https://snapchat.com/t/Lb8eRnkU" target="_blank" rel="noopener noreferrer" className="hero-social-link rounded-full bg-white p-3 shadow-sm transition hover:bg-slate-100">
              <FaSnapchatGhost className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <div className="hero-image-card relative w-full max-w-[280px] overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-300/20 sm:max-w-[320px] md:max-w-[360px]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.6),_transparent_60%)]" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent" />
            <img
              className="relative h-[320px] w-full rounded-[1.5rem] object-cover sm:h-[380px] md:h-[440px]"
              src={arman}
              alt="Abdirahman Abdalla Nasser"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Showcase;
