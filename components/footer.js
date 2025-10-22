// components/Footer.js
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full mt-auto text-center text-gray-300 py-8 bg-black/70 backdrop-blur-md border-t border-pink-500/40 fixed bottom-0 left-0 z-20">
      {/* Social Icons */}
      <div className="flex justify-center gap-10 mb-4 text-2xl">
        <a
          href="https://github.com/scKamui"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400 transition-transform transform hover:scale-125"
          title="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/schauhan2000"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400 transition-transform transform hover:scale-125"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:sjsc1224@gmail.com"
          className="hover:text-pink-400 transition-transform transform hover:scale-125"
          title="Email"
        >
          <FaEnvelope />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-sm text-gray-400">
        © {new Date().getFullYear()} Sami Chauhan. All Rights Reserved.
      </p>
    </footer>
  );
}