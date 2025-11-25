import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-6 backdrop-blur-sm"
    >
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="flex items-center gap-3 text-white font-bold text-xl cursor-pointer"
      >
        <img
          src="/logo.svg"
          alt="LD Logo"
          className="w-10 h-10 hover:rotate-12 transition-transform duration-300"
        />
        <span>Lacuey David</span>
      </a>

      <div className="hidden md:flex items-center gap-8 text-gray-300">
        <a href="#about" className="hover:text-purple-400 transition-colors">
          About
        </a>
        <a href="#skills" className="hover:text-purple-400 transition-colors">
          Skills
        </a>
        <a href="#projects" className="hover:text-purple-400 transition-colors">
          Projects
        </a>
        <a href="#contact" className="hover:text-purple-400 transition-colors">
          Contact
        </a>
      </div>

      <div className="flex items-center gap-4">
        <a
          href="/cv.pdf"
          download
          className="hidden sm:flex items-center gap-2 px-4 py-2 bg-purple-600/20 hover:bg-purple-600/40 text-purple-300 hover:text-white rounded-full transition-all border border-purple-500/30 mr-2"
        >
          <FileText size={18} />
          <span className="text-sm font-medium">Resume</span>
        </a>
        <a
          href="https://github.com/LacueyDavid"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition-colors"
        >
          <Github size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/lacuey-david/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition-colors"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="mailto:dlacuey@student.42.fr"
          className="text-gray-300 hover:text-white transition-colors"
        >
          <Mail size={20} />
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
