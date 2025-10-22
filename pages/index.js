// pages/index.js
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer"; // keep lowercase since your file is footer.js
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
      className="relative min-h-screen text-white overflow-y-auto flex flex-col"
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
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 py-20 flex-grow">
        {/* Frosted Glass Box */}
        <motion.div
          className="bg-black/60 backdrop-blur-md border-2 border-pink-500/40 rounded-2xl 
                     p-6 sm:p-8 md:p-10 lg:p-12 
                     shadow-[0_0_25px_#e60000a0] 
                     w-[90%] sm:w-[80%] md:max-w-2xl lg:max-w-3xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Heading */}
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            What&apos;s up, I&apos;m{" "}
            <span className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Sami
            </span>
          </motion.h2>

          {/* Tagline */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-pink-400 italic mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            “Turning code into creativity and ideas into software.”
          </motion.p>

          {/* Subtext */}
          <motion.p
            className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mb-8 leading-relaxed mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            I&apos;m a Computer Science student who enjoys solving problems, creating cool
            projects, and learning something new with every line of code. I&apos;m constantly
            exploring new ways to improve my skills, challenge myself, and build projects
            I&apos;m proud of.
          </motion.p>

          {/* Tech Stack Icons */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 text-3xl sm:text-4xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <FaReact className="text-[#61DBFB] hover:drop-shadow-[0_0_10px_#61DBFB] transition-transform hover:scale-110" title="React" />
            <SiNextdotjs className="text-white hover:drop-shadow-[0_0_10px_#ffffff] transition-transform hover:scale-110" title="Next.js" />
            <FaNodeJs className="text-[#83CD29] hover:drop-shadow-[0_0_10px_#83CD29] transition-transform hover:scale-110" title="Node.js" />
            <SiTailwindcss className="text-[#38BDF8] hover:drop-shadow-[0_0_10px_#38BDF8] transition-transform hover:scale-110" title="Tailwind CSS" />
            <FaPhp className="text-[#777BB4] hover:drop-shadow-[0_0_10px_#777BB4] transition-transform hover:scale-110" title="PHP" />
            <SiMysql className="text-[#F29111] hover:drop-shadow-[0_0_10px_#F29111] transition-transform hover:scale-110" title="MySQL" />
            <SiMongodb className="text-[#47A248] hover:drop-shadow-[0_0_10px_#47A248] transition-transform hover:scale-110" title="MongoDB" />
            <FaJava className="text-[#ED8B00] hover:drop-shadow-[0_0_10px_#ED8B00] transition-transform hover:scale-110" title="Java" />
            <SiC className="text-[#A8B9CC] hover:drop-shadow-[0_0_10px_#A8B9CC] transition-transform hover:scale-110" title="C" />
            <SiCplusplus className="text-[#00599C] hover:drop-shadow-[0_0_10px_#00599C] transition-transform hover:scale-110" title="C++" />
          </motion.div>

          {/* Button */}
          <motion.a
            href="/projects"
            className="bg-gradient-to-r from-red-500 to-pink-600 px-6 sm:px-8 py-3 rounded-full text-base md:text-lg font-semibold hover:opacity-90 transition duration-200 shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            VIEW MY PROJECTS 🚀
          </motion.a>
        </motion.div>

        {/* ===== Quick Stats Cards ===== */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {[
            {
              title: "🎓 STUDENT",
              text: "I am currently a 4th-Year Computer Science major.",
            },
            {
              title: "💻 PROJECTS",
              text: "Built some things. Check them out. Always working towards creating better and cooler projects.",
            },
            {
              title: "🚀 GOALS",
              text: "Actively seeking a software engineering internship so I can apply my skills and grow professionally.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-black/60 backdrop-blur-md border-2 border-pink-500/40 rounded-xl p-6 shadow-[0_0_25px_#e60000a0] transition hover:scale-105"
            >
              <h3 className="text-pink-400 font-bold mb-3 text-xl md:text-2xl tracking-wide">
                {card.title}
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">{card.text}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}