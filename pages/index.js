import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { FaArrowRight, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";

// I reuse this small animation so the page feels consistent without being too busy.
const reveal = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
};

export default function Home() {
  return (
    <div className="site-page">
      <Navbar />
      <main>
        {/* The hero quickly explains who I am and what I am interested in. */}
        <section className="hero section-shell">
          <motion.div {...reveal}>
            <p className="eyebrow">
              <span className="status-dot" /> Open to software development
              opportunities
            </p>
            <h1>
              Building software
              <br />
              that <span>solves real problems.</span>
            </h1>
            <p className="hero-copy">
              I’m Sami, a Computer Science student building practical software
              with Python and JavaScript. I’m looking for opportunities to gain
              real-world development experience, contribute to meaningful
              projects, and keep growing as a developer.
            </p>
            <div className="hero-actions">
              <Link href="/projects" className="button button-primary">
                Explore my work <FaArrowRight />
              </Link>
              <a
                href="/Tech_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-secondary"
              >
                View resume
              </a>
            </div>
          </motion.div>
          <motion.aside
            className="hero-aside"
            {...reveal}
            transition={{ ...reveal.transition, delay: 0.12 }}
          >
            <p className="aside-label">Currently</p>
            <p className="aside-title">
              Turning ideas into practical, working software.
            </p>
            <div className="aside-rule" />
            <dl className="quick-facts">
              <div>
                <dt>Focus</dt>
                <dd>Python · JavaScript · AI</dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>Canada</dd>
              </div>
              <div>
                <dt>Education</dt>
                <dd>4th-year CS</dd>
              </div>
            </dl>
          </motion.aside>
        </section>

        {/* This gives a quick picture of the tools and topics I am focused on. */}
        <section className="focus-strip" aria-label="Current technical focus">
          <div className="section-shell focus-grid">
            <div className="focus-intro">
              <p className="eyebrow">Current focus</p>
              <p>What I’m building with and learning right now.</p>
            </div>
            <div className="focus-group">
              <span>Core languages</span>
              <strong>Python · JavaScript</strong>
            </div>
            <div className="focus-group">
              <span>Project tools</span>
              <strong>Next.js · TypeScript</strong>
            </div>
            <div className="focus-group">
              <span>Exploring</span>
              <strong>AI systems · RAG · AI tools</strong>
            </div>
          </div>
        </section>

        {/* My two strongest projects are introduced here before the full project page. */}
        <section className="section-shell home-work">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2>Products built with purpose.</h2>
            </div>
            <Link href="/projects" className="text-link">
              View all six projects <FaArrowRight />
            </Link>
          </div>
          <div className="home-projects">
            <Link
              href="/projects#citeback"
              className="home-project home-project-large"
            >
              <div className="project-visual citeback-visual">
                <span className="visual-index">01</span>
                <div className="screenshot-frame">
                  <div className="browser-dots">
                    <i />
                    <i />
                    <i />
                  </div>
                  <div className="screenshot-image">
                    <Image
                      src="/citeback-landing.png"
                      alt="CiteBack landing page"
                      width={1280}
                      height={720}
                      sizes="(max-width: 800px) 100vw, 60vw"
                    />
                  </div>
                </div>
              </div>
              <div className="home-project-meta">
                <div>
                  <span>AI · RESEARCH</span>
                  <h3>CiteBack</h3>
                </div>
                <FaArrowRight />
              </div>
            </Link>
            <Link href="/projects#offertrail" className="home-project">
              <div className="project-visual offertrail-visual">
                <span className="visual-index">02</span>
                <div className="screenshot-frame">
                  <div className="browser-dots">
                    <i />
                    <i />
                    <i />
                  </div>
                  <div className="screenshot-image">
                    <Image
                      src="/offertrail-landing.png"
                      alt="OfferTrail landing page"
                      width={1280}
                      height={720}
                      sizes="(max-width: 800px) 100vw, 38vw"
                    />
                  </div>
                </div>
              </div>
              <div className="home-project-meta">
                <div>
                  <span>FULL-STACK · PRODUCTIVITY</span>
                  <h3>OfferTrail</h3>
                </div>
                <FaArrowRight />
              </div>
            </Link>
          </div>
        </section>

        {/* A short About preview keeps the homepage focused. */}
        <section className="section-shell home-about">
          <p className="eyebrow">A little about me</p>
          <div>
            <h2>
              Curiosity gets me started.
              <br />
              <span>Craft gets me to the finish.</span>
            </h2>
            <div className="home-about-copy">
              <p>
                I like taking ideas from a rough first sketch to something
                people can actually use, learning whatever the project demands
                along the way.
              </p>
              <Link href="/about" className="text-link">
                More about me <FaArrowRight />
              </Link>
            </div>
          </div>
        </section>
        {/* These links give visitors another way to find my work. */}
        <section className="section-shell social-row">
          <p>Find me elsewhere</p>
          <div>
            <a
              href="https://github.com/scKamui"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/schauhan2000"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn /> LinkedIn
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
