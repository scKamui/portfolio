// pages/about.js
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Footer from "@/components/footer";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-black via-[#0a0a0a] to-black text-white">
      {/* Navbar */}
      <Navbar />

      {/* === Main Section === */}
      <main className="flex flex-col md:flex-row items-center justify-center gap-12 px-6 sm:px-10 md:px-16 lg:px-24 py-20 pb-40 flex-grow w-full">
        {/* === Left: Text Content === */}
        <motion.div
          className="flex-1 max-w-2xl text-center md:text-left w-full"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-pink-500 uppercase tracking-widest text-sm font-semibold mb-3">
            Get to Know Me
          </h3>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Passion in Code,
            </span>{" "}
            <br />
            <span className="text-gray-200">Creativity in Design</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed mb-6">
            I’m a <span className="text-pink-500 font-semibold">Computer Science student</span> who
            loves turning ideas into functional, creative projects. I believe{" "}
            <span className="text-pink-500 font-semibold">Artificial Intelligence</span> is shaping
            the future, and learning it is crucial for anyone who wants to build smarter, more
            impactful technology. I’m passionate about exploring how AI can inspire innovation and
            make a difference in how we solve problems.
          </p>

          <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed mb-6">
            Outside of coding, I like staying active — I’ve trained{" "}
            <span className="text-pink-500 font-semibold">Brazilian Jiu-Jitsu</span>, hit the gym,
            and enjoy watching <span className="text-pink-500 font-semibold">UFC</span> and{" "}
            <span className="text-pink-500 font-semibold">football</span>. I’m always working on
            improving mentally, physically, and professionally.
          </p>

          <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed mb-10">
            My goal is to keep learning, growing, and building — whether that’s through code,
            design, or collaboration.
          </p>

          {/* Resume Button */}
          <motion.a
            href="/Tech_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-red-500 to-pink-600 px-8 py-4 rounded-full text-base sm:text-lg font-semibold text-white hover:scale-110 hover:shadow-[0_0_25px_#e60000a0] transition duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            View Resume 📄
          </motion.a>
        </motion.div>

        {/* === Right: Dynamic Image === */}
        <motion.div
          className="flex-1 flex justify-center w-full max-w-md md:max-w-lg lg:max-w-xl"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border-2 border-pink-500/40 shadow-[0_0_30px_#e60000a0]">
            <img
              src="/coding.jpg"
              alt="Coding workspace"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
              loading="lazy"
            />
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}