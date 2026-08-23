import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { FaArrowRight, FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="site-page">
      <Navbar />
      <main className="section-shell contact-page">
        {/* Direct contact details are kept beside the form for quick access. */}
        <motion.div
          className="contact-intro"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <p className="eyebrow">
            <span className="status-dot" /> Open to opportunities
          </p>
          <h1>
            Let’s build something
            <br />
            <span>worth using.</span>
          </h1>
          <p>
            Have an internship, project, or idea you’d like to discuss? Send a
            note and I’ll get back to you.
          </p>
          <a className="contact-email" href="mailto:sjsc1224@gmail.com">
            sjsc1224@gmail.com
          </a>
          <div className="contact-socials">
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
        </motion.div>
        {/* Formspree handles the message submission without a custom backend. */}
        <motion.form
          action="https://formspree.io/f/mpwygwdd"
          method="POST"
          className="contact-form"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.55 }}
        >
          <div className="field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your name"
              required
            />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="7"
              placeholder="Tell me a little about what you have in mind..."
              required
            />
          </div>
          <button type="submit" className="button button-primary">
            Send message <FaArrowRight />
          </button>
        </motion.form>
      </main>
      <Footer />
    </div>
  );
}
