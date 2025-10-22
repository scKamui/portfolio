// pages/index.js
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPhp, FaJava } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiC,
  SiCplusplus,
} from "react-icons/si";

export default function Home() {
  return (
    <div
      className="relative min-h-screen text-white flex flex-col overflow-y-auto"
      style={{
        backgroundImage: "url('/portfoliopic.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]" />

      {/* Navbar */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center text-center px-6 pt-24 pb-24 flex-grow">
        {/* Frosted Glass Box */}
        <motion.div
          className="bg-black/60 backdrop-blur-md border-2 border-pink-500/40 rounded-2xl p-8 md:p-12 shadow-[0_0_25px_#e60000a0] max-w-2xl w-full mx-auto mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Heading */}
          <motion.h2
            className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            What's up, I'm{" "}
            <span className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Sami
            </span>
          </motion.h2>

          {/* Tagline */}
          <motion.p
            className="text-lg md:text-xl text-pink-400 italic mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            "Turning code into creativity and ideas into software."
          </motion.p>

          {/* Subtext */}
          <motion.p
            className="text-base md:text-lg text-gray-300 max-w-xl mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            I'm a Computer Science student who enjoys solving problems, creating cool projects,
            and learning something new with every line of code. I'm constantly exploring new ways
            to improve my skills, challenge myself, and build projects I'm proud of.
          </motion.p>

          {/* Tech Stack Icons */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 text-4xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <FaReact className="text-[#61DBFB]" title="React" />
            <SiNextdotjs className="text-white" title="Next.js" />
            <FaNodeJs className="text-[#83CD29]" title="Node.js" />
            <SiTailwindcss className="text-[#38BDF8]" title="Tailwind CSS" />
            <FaPhp className="text-[#777BB4]" title="PHP" />
            <SiMysql className="text-[#F29111]" title="MySQL" />
            <SiMongodb className="text-[#47A248]" title="MongoDB" />
            <FaJava className="text-[#ED8B00]" title="Java" />
            <SiC className="text-[#A8B9CC]" title="C" />
            <SiCplusplus className="text-[#00599C]" title="C++" />
          </motion.div>

          {/* Button */}
          <motion.a
            href="/projects"
            className="bg-gradient-to-r from-red-500 to-pink-600 px-8 py-3 rounded-full text-base md:text-lg font-semibold hover:opacity-90 transition duration-200 shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            VIEW MY PROJECTS 🚀
          </motion.a>
        </motion.div>

        {/* ===== Quick Stats Cards ===== */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full px-4 mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {/* Card 1 */}
          <div className="bg-black/60 backdrop-blur-md border-2 border-pink-500/40 rounded-xl p-6 shadow-[0_0_25px_#e60000a0] transition hover:scale-105">
            <h3 className="text-pink-400 font-bold mb-3 text-2xl tracking-wide">🎓 STUDENT</h3>
            <p className="text-gray-300 text-base leading-relaxed">
              I am currently a 4th-Year Computer Science major.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-black/60 backdrop-blur-md border-2 border-pink-500/40 rounded-xl p-6 shadow-[0_0_25px_#e60000a0] transition hover:scale-105">
            <h3 className="text-pink-400 font-bold mb-3 text-2xl tracking-wide">💻 PROJECTS</h3>
            <p className="text-gray-300 text-base leading-relaxed">
              Built some things. Check them out. Always working towards creating better and cooler
              projects. I will add them as I build them.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-black/60 backdrop-blur-md border-2 border-pink-500/40 rounded-xl p-6 shadow-[0_0_25px_#e60000a0] transition hover:scale-105">
            <h3 className="text-pink-400 font-bold mb-3 text-2xl tracking-wide">🚀 GOALS</h3>
            <p className="text-gray-300 text-base leading-relaxed">
              Actively seeking a software engineering internship so I can apply my skills and grow
              professionally.
            </p>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}