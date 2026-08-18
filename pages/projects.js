// pages/projects.js
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Footer from "@/components/footer";

export default function Projects() {
  const projects = [
    {
      title: "CiteBack",
      description:
        "An academic paper assistant that lets users upload research papers, ask questions about the content, and trace answers back to the source passages. I built it to make dense papers easier to work through without losing the citations behind each response.",
      tech: "Python, Streamlit, RAG, Generative AI",
      liveUrl: "https://citeback.streamlit.app",
      githubUrl: "https://github.com/scKamui/academic-paper-assistant",
    },
    {
      title: "Subject Zero",
      description:
        "A zombie survival game built with Phaser 3 and JavaScript where players fight through waves of enemies while completing objectives and progressing through the story. The game features multiple zombie types with unique behaviors, a ranking system, wave-based progression, and a survival mode. I also implemented enemy AI, anti-clustering movement, shooting mechanics, and difficulty scaling to create a more engaging gameplay experience.",
      tech: "Phaser 3, JavaScript, Game Development",
      githubUrl: "https://github.com/scKamui/subject-zero-game",
    },
    {
      title: "OfferTrail",
      description:
        "A web app to track internship and job applications, featuring status filters, calendar view, and a modern UI dashboard.",
      tech: "PHP, MySQL, JavaScript, HTML, CSS",
      liveUrl: "https://offertrail.xyz",
      githubUrl: "https://github.com/scKamui/OfferTrail",
    },
    {
      title: "FocusPal",
      description:
        "A distraction-free study timer based on the Pomodoro Technique, designed for focus and calm productivity.",
      tech: "Swift, Xcode",
      githubUrl: "https://github.com/scKamui/FocusPal",
    },
    {
      title: "SportsPro Support App",
      description:
        "A PHP and MySQL-based support system for managing customers, technicians, and product incidents.",
      tech: "PHP, MySQL, HTML, CSS",
      githubUrl: "https://github.com/scKamui/SportsPro-Technical-Support-System",
    },
    {
      title: "Highway Escape",
      description:
        "An Android game where players dodge traffic and survive as long as possible, featuring collision detection, smooth movement, and real-time gameplay mechanics.",
      tech: "Java, Android Studio, Android SDK",
      githubUrl: "https://github.com/scKamui/highway-escape-android",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 min-h-screen text-white">
      <Navbar />
      <main className="flex flex-col items-center text-center px-6 py-20">
        <motion.h1
          className="text-5xl font-extrabold mb-12 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          MY PROJECTS
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl w-full">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group bg-black/80 border border-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-red-600/40 transition duration-300 flex flex-col justify-between text-left"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
            >
              <div>
                <h2 className="text-2xl font-bold mb-3 text-white">{project.title}</h2>
                <p className="text-gray-300 mb-4 text-base leading-relaxed">{project.description}</p>
                <p className="text-sm text-gray-400 italic mb-6">
                  Tech Used: {project.tech}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 opacity-100 translate-y-0 transition-all duration-300 md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 md:group-focus-within:opacity-100 md:group-focus-within:translate-y-0">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-pink-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:scale-105 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  >
                    Live Website ↗
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-pink-500/60 px-5 py-2.5 text-sm font-semibold text-pink-400 transition hover:scale-105 hover:bg-pink-500/10 hover:text-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
