// pages/about.js
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Footer from "@/components/footer";

export default function About() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-black via-[#0a0a0a] to-black text-white">
      <Navbar />

      <main className="flex w-full flex-grow flex-col items-center justify-center gap-12 px-6 py-20 pb-40 sm:px-10 md:flex-row md:px-16 lg:px-24">
        {/* Left: About Me Content */}
        <motion.div
          className="w-full max-w-2xl flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-pink-500">
            Get to Know Me
          </h3>

          <h1 className="mb-8 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            <span className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Always Learning,
            </span>{" "}
            <br />
            <span className="text-gray-200">Always Building</span>
          </h1>

          <p className="mb-6 text-base leading-relaxed text-gray-300 sm:text-lg md:text-xl">
            I’m a{" "}
            <span className="font-semibold text-pink-500">
              Computer Science student
            </span>{" "}
            who enjoys building projects and learning by actually working
            through problems. I’ve worked on web applications, mobile apps,
            and browser-based games using technologies like JavaScript, PHP,
            MySQL, Java, and Next.js.
          </p>

          <p className="mb-6 text-base leading-relaxed text-gray-300 sm:text-lg md:text-xl">
            What I enjoy most about development is starting with an idea and
            slowly turning it into something that works. I like figuring
            things out, fixing issues, and learning new tools along the way.
            I’m also interested in{" "}
            <span className="font-semibold text-pink-500">
              Artificial Intelligence
            </span>{" "}
            and how it can be used to build useful applications.
          </p>

          <p className="mb-6 text-base leading-relaxed text-gray-300 sm:text-lg md:text-xl">
            Outside of coding, I spend a lot of time at the{" "}
            <span className="font-semibold text-pink-500">gym</span>, watch{" "}
            <span className="font-semibold text-pink-500">UFC</span>, play
            video games, and follow American football. These are some of the
            things that help me stay focused and give me a break from school
            and development.
          </p>

          <p className="mb-10 text-base leading-relaxed text-gray-300 sm:text-lg md:text-xl">
            Right now, I’m looking for an opportunity where I can gain real
            experience, work with other developers, contribute to meaningful
            projects, and continue improving my skills.
          </p>

          <motion.a
            href="/Tech_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-gradient-to-r from-red-500 to-pink-600 px-8 py-4 text-base font-semibold text-white transition duration-300 hover:scale-110 hover:shadow-[0_0_25px_#e60000a0] sm:text-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            View Resume 📄
          </motion.a>
        </motion.div>

        {/* Right: Coding Image */}
        <motion.div
          className="flex w-full max-w-md flex-1 justify-center md:max-w-lg lg:max-w-xl"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border-2 border-pink-500/40 shadow-[0_0_30px_#e60000a0]">
            <img
              src="/coding.jpg"
              alt="Coding workspace"
              className="h-full w-full object-cover transition-transform duration-700 ease-in-out hover:scale-105"
              loading="lazy"
            />
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}