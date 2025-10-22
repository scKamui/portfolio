// pages/about.js
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";

export default function About() {
  const [currentImage, setCurrentImage] = useState(0);

  // Cycle through background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % 3); // 3 total
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const images = ["/gym.jpeg", "/bjj.jpeg", "/football.jpeg"];

  return (
    <div className="relative min-h-screen text-white flex flex-col overflow-y-auto">
      {/* === Crisp Animated Background === */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 bg-center bg-cover transition-all duration-1000"
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: currentImage === index ? 0.9 : 0,
            }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        ))}

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/65 to-black/80 z-10" />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* === Main Section === */}
      <main className="relative z-20 flex flex-col items-center text-center px-4 sm:px-6 md:px-10 pt-20 pb-24 flex-grow">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-10 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_#e60000a0]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          ABOUT ME
        </motion.h1>

        {/* === Frosted Glass Box === */}
        <motion.div
          className="bg-black/60 backdrop-blur-md border-2 border-pink-500/40 rounded-2xl 
                     p-6 sm:p-8 md:p-10 lg:p-12 
                     shadow-[0_0_35px_#e60000a0] 
                     w-[90%] sm:w-[80%] md:max-w-4xl 
                     text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* --- Tech + AI paragraph --- */}
          <p className="mb-8">
            I’m a <span className="text-pink-500 font-semibold">Computer Science student</span> who enjoys turning ideas
            into real projects that people can actually use. I love learning new technologies and exploring how{" "}
            <span className="text-pink-500 font-semibold">Artificial Intelligence</span> is shaping the future — from
            enhancing productivity to inspiring completely new apps and services. I’m fascinated by how AI can help
            developers push creativity even further, and I hope to build projects that take advantage of it.
          </p>

          {/* --- Personal paragraph --- */}
          <p className="mb-8">
            Outside of coding, I’m someone who loves staying active and pushing myself physically and mentally. I used to
            train <span className="text-pink-500 font-semibold">Brazilian Jiu-Jitsu</span> and still enjoy following the
            sport even though I’ve taken a break. I also like hitting the gym, playing video games, and watching sports —
            especially <span className="text-pink-500 font-semibold">UFC</span> and{" "}
            <span className="text-pink-500 font-semibold">American football</span>.
          </p>

          {/* --- Closing paragraph --- */}
          <p>
            My goal is to keep learning, growing, and building — whether that’s in the gym, on the mats, or in front of a
            computer screen. I’m always looking for new challenges that help me improve both personally and
            professionally.
          </p>
        </motion.div>

        {/* Resume Button */}
        <motion.a
          href="/Tech_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-red-500 to-pink-600 px-8 sm:px-10 py-4 sm:py-5 mt-12 rounded-full text-lg sm:text-xl font-semibold text-white hover:scale-110 hover:shadow-[0_0_30px_#e60000a0] transition duration-300"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          View Resume 📄
        </motion.a>
      </main>

      <Footer />
    </div>
  );
}