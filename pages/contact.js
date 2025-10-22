// pages/contact.js
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Footer from "@/components/footer";

export default function Contact() {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 min-h-screen text-white">
      <Navbar />

      <main className="flex flex-col items-center justify-center text-center px-6 py-20">
        {/* Heading */}
        <motion.h1
          className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-lg text-gray-300 max-w-2xl mb-12 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          I’m always open to new opportunities, collaborations, or just a friendly chat about tech.
        </motion.p>

        {/* Contact Form */}
        <motion.div
          className="bg-black/80 p-10 rounded-2xl shadow-xl w-full max-w-2xl border border-gray-800"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <form
            action="https://formspree.io/f/mnqekvvg"
            method="POST"
            className="flex flex-col space-y-5"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="p-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="p-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required
              className="p-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
            ></textarea>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-red-500 to-pink-600 text-white py-4 rounded-lg font-semibold text-lg shadow-lg hover:opacity-90 transition duration-300"
            >
              Send Message 🚀
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.p
          className="mt-10 text-gray-400 text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          or reach me directly at{" "}
          <a
            href="mailto:sami.chauhan@example.com"
            className="text-red-500 hover:text-red-400"
          >
            sjsc1224@gmail.com
          </a>
        </motion.p>
      </main>
      <Footer />
    </div>
  );
}