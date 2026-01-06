import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20 pb-10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1"
        >
          <h2 className="text-purple-500 font-medium tracking-wider mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            42 STUDENT
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-mono">
            Hello, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              David
            </span>
          </h1>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed font-mono">
            <span className="text-green-400">$</span> Architecting robust
            systems. <br />I design secure, scalable infrastructures and
            optimize network performance with modern technologies. Passionate
            about building resilient foundations for digital transformation.
          </p>

          <div className="flex gap-4 mb-12">
            <a
              href="#projects"
              className="px-8 py-3 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-all hover:scale-105 shadow-lg shadow-purple-500/25"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-purple-500/30 text-white rounded-full font-medium hover:bg-purple-500/10 transition-all hover:scale-105 backdrop-blur-sm"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="order-1 md:order-2 flex justify-center relative"
        >
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
              <img
                src="/img/moi.jpg"
                alt="Profile"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500"
      >
        <ArrowDown />
      </motion.div>
    </section>
  );
};

export default Hero;
