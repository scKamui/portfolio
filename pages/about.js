import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

export default function About() {
  return (
    <div className="site-page">
      <Navbar />
      <main>
        {/* Short introduction at the top of the About page. */}
        <section className="about-hero section-shell">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <p className="eyebrow">About me</p>
            <h1>
              Learning by building.
              <br />
              <span>Growing by doing.</span>
            </h1>
          </motion.div>
          <motion.p
            className="about-lede"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.55 }}
          >
            I’m a Computer Science student who enjoys turning ideas into working
            software—and working through the hard parts that make the result
            better.
          </motion.p>
        </section>

        {/* The image and longer story give more detail about me and my goals. */}
        <section className="section-shell about-content">
          <motion.div
            className="about-image"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Image
              src="/developer-workspace.jpg"
              alt="Modern development workspace with code displayed on a laptop"
              fill
              sizes="(max-width: 800px) 100vw, 40vw"
            />
          </motion.div>
          <div className="about-story">
            <p>
              I’m most interested in building practical software with Python and
              JavaScript while learning how artificial intelligence and modern
              AI tools can solve real problems. I enjoy experimenting with new
              ideas, understanding how these systems work, and turning what I
              learn into useful projects.
            </p>
            <p>
              What I enjoy most is the process: starting with an uncertain idea,
              breaking it into manageable problems, fixing what doesn’t work,
              and watching the product take shape. I care about usefulness and
              clear experiences as much as the code underneath them.
            </p>
            <p>
              Outside of development, you’ll usually find me at the gym,
              watching UFC or football, or playing video games. Those interests
              keep me grounded, competitive, and curious.
            </p>
            <p>
              Right now, I’m looking for a software opportunity where I can
              contribute to meaningful work, learn from experienced teammates,
              and keep raising the quality of what I build.
            </p>
            <a
              href="/Tech_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-primary"
            >
              View my resume <FaArrowRight />
            </a>
          </div>
        </section>

        {/* Three simple ideas that describe how I approach my work. */}
        <section className="section-shell principles">
          <p className="eyebrow">How I work</p>
          <div className="principle-grid">
            <article>
              <span>01</span>
              <h2>Stay curious</h2>
              <p>
                Ask better questions and keep learning beyond the immediate
                task.
              </p>
            </article>
            <article>
              <span>02</span>
              <h2>Build clearly</h2>
              <p>
                Make software understandable, useful, and easy to move forward.
              </p>
            </article>
            <article>
              <span>03</span>
              <h2>Finish strong</h2>
              <p>
                Care about the final details that turn a prototype into a
                product.
              </p>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
