import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import Image from "next/image";

// These two projects have live demos, so they get the larger layouts.
const featured = [
  {
    id: "citeback",
    number: "01",
    title: "CiteBack",
    type: "AI-powered academic assistant",
    description:
      "Upload research papers, ask questions in plain language, and trace every answer back to its source passage. Built to make dense academic work easier to navigate without sacrificing trust.",
    tech: ["Python", "Streamlit", "RAG", "Generative AI"],
    liveUrl: "https://citeback.streamlit.app",
    githubUrl: "https://github.com/scKamui/academic-paper-assistant",
    visual: "citeback-visual",
  },
  {
    id: "offertrail",
    number: "02",
    title: "OfferTrail",
    type: "Job application command center",
    description:
      "A focused web app for tracking internship and job applications through every stage, with status filters, a calendar view, and a clean dashboard that makes the search easier to manage.",
    tech: ["Next.js", "TypeScript", "Clerk", "Neon Postgres", "Drizzle ORM"],
    liveUrl: "https://offertrail.xyz",
    githubUrl: "https://github.com/scKamui/OfferTrail",
    visual: "offertrail-visual",
  },
];

// The rest of my projects stay visible in the supporting grid.
const otherProjects = [
  {
    number: "03",
    title: "Subject Zero",
    category: "Browser game",
    description:
      "A Phaser 3 zombie survival game with enemy AI, anti-clustering movement, wave progression, multiple zombie types, and difficulty scaling.",
    tech: ["Phaser 3", "JavaScript", "Game Development"],
    githubUrl: "https://github.com/scKamui/subject-zero-game",
  },
  {
    number: "04",
    title: "FocusPal",
    category: "iOS productivity",
    description:
      "A distraction-free Pomodoro study timer designed around calm, focused work sessions.",
    tech: ["Swift", "Xcode"],
    githubUrl: "https://github.com/scKamui/FocusPal",
  },
  {
    number: "05",
    title: "SportsPro Support App",
    category: "Support system",
    description:
      "A full-stack support system for managing customers, technicians, products, and service incidents.",
    tech: ["PHP", "MySQL", "HTML / CSS"],
    githubUrl: "https://github.com/scKamui/SportsPro-Technical-Support-System",
  },
  {
    number: "06",
    title: "Highway Escape",
    category: "Android game",
    description:
      "A real-time Android driving game with responsive movement, traffic avoidance, collision detection, and survival gameplay.",
    tech: ["Java", "Android Studio", "Android SDK"],
    githubUrl: "https://github.com/scKamui/highway-escape-android",
  },
];

export default function Projects() {
  return (
    <div className="site-page">
      <Navbar />
      <main>
        {/* This intro sets up the range of work on the page. */}
        <section className="page-intro section-shell">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Selected work · 2024—2026
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            Work that moves from
            <br />
            <span>idea to interface.</span>
          </motion.h1>
          <p>
            Full-stack products, AI experiments, mobile apps, and games—each
            built to explore a real problem or sharpen a new skill.
          </p>
        </section>
        {/* Featured projects include a screenshot, live demo, and source code. */}
        <section
          className="section-shell featured-list"
          aria-label="Featured projects"
        >
          {featured.map((project, index) => (
            <motion.article
              id={project.id}
              className={`featured-project ${index % 2 ? "is-reverse" : ""}`}
              key={project.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55 }}
            >
              <div className={`featured-visual ${project.visual}`}>
                <span className="visual-index">{project.number}</span>
                <div className="screenshot-frame">
                  <div className="browser-dots">
                    <i />
                    <i />
                    <i />
                  </div>
                  <div className="screenshot-image">
                    <Image
                      src={
                        project.id === "citeback"
                          ? "/citeback-landing.png"
                          : "/offertrail-landing.png"
                      }
                      alt={`${project.title} landing page`}
                      width={1280}
                      height={720}
                      sizes="(max-width: 800px) 100vw, 58vw"
                    />
                  </div>
                </div>
              </div>
              <div className="featured-copy">
                <p className="project-type">{project.type}</p>
                <h2>{project.title}</h2>
                <p className="project-description">{project.description}</p>
                <ul className="tag-list">
                  {project.tech.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="project-actions">
                  <a
                    className="button button-primary"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live demo <FaArrowRight />
                  </a>
                  <a
                    className="button button-secondary"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </section>
        {/* Smaller cards keep every other project easy to browse. */}
        <section className="section-shell more-work">
          <div className="section-heading">
            <div>
              <p className="eyebrow">More projects</p>
              <h2>Still exploring. Still building.</h2>
            </div>
            <p className="section-note">
              Four more builds across web, mobile, and games.
            </p>
          </div>
          <div className="project-grid">
            {otherProjects.map((project, index) => (
              <motion.article
                className="project-card"
                key={project.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
              >
                <div className="card-top">
                  <span>{project.number}</span>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} on GitHub`}
                  >
                    <FaGithub />
                  </a>
                </div>
                <p className="project-type">{project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="tag-list">
                  {project.tech.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
