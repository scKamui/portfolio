import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-shell">
        {/* This is the main call to action at the bottom of every page. */}
        <div>
          <p className="footer-kicker">
            Have a project or opportunity in mind?
          </p>
          <a className="footer-email" href="mailto:sjsc1224@gmail.com">
            Let’s talk.
          </a>
        </div>
        {/* Social links and the copyright stay shared across the whole site. */}
        <div className="footer-meta">
          <div className="footer-links">
            <a
              href="https://github.com/scKamui"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/schauhan2000"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <Link href="/contact">Contact</Link>
          </div>
          <p>© {new Date().getFullYear()} Sami Chauhan</p>
        </div>
      </div>
    </footer>
  );
}
