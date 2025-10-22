// pages/projects.js
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Footer from "@/components/footer";


export default function Projects() {
  const projects = [
    {
      title: "OfferTrail",
      description:
        "A web app to track internship and job applications, featuring status filters, calendar view, and a modern UI dashboard.",
      tech: "PHP, MySQL, JavaScript, HTML, CSS",
      link: "https://github.com/scKamui/OfferTrail",
    },
    {
      title: "FocusPal",
      description:
        "A distraction-free study timer based on the Pomodoro Technique, designed for focus and calm productivity.",
      tech: "Swift, Xcode",
      link: "https://github.com/scKamui/FocusPal",
    },
    {
      title: "SportsPro Support App",
      description:
        "A PHP and MySQL-based support system for managing customers, technicians, and product incidents.",
      tech: "PHP, MySQL, HTML, CSS",
      link: "https://github.com/scKamui/SportsPro-Technical-Support-System",
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
              className="bg-black/80 border border-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-red-600/40 transition duration-300 flex flex-col justify-between text-left"
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
              <a
                href={project.link}
                target="_blank"
                className="text-red-500 hover:text-red-400 font-semibold text-lg"
              >
                View on GitHub →
              </a>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}