// components/Navbar.js
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      className="bg-black/80 backdrop-blur-md text-white px-8 py-4 flex justify-between items-center shadow-lg sticky top-0 z-50"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-2xl font-extrabold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
        SAMI CHAUHAN
      </h1>

      <div className="space-x-8 text-lg font-medium">
        <Link href="/" className="hover:text-red-400 transition duration-200">Home</Link>
        <Link href="/projects" className="hover:text-red-400 transition duration-200">Projects</Link>
        <Link href="/about" className="hover:text-red-400 transition duration-200">About</Link>
        <Link href="/contact" className="hover:text-red-400 transition duration-200">Contact</Link>
      </div>
    </motion.nav>
  );
}