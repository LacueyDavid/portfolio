import { motion } from "framer-motion";
import { Code2, Github, Linkedin, Mail } from "lucide-react";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-6 backdrop-blur-sm"
    >
      <div className="flex items-center gap-2 text-white font-bold text-xl">
        <Code2 className="text-purple-500" />
        <span>Lacuey David</span>
      </div>

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
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition-colors"
        >
          <Github size={20} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition-colors"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="mailto:contact@example.com"
          className="text-gray-300 hover:text-white transition-colors"
        >
          <Mail size={20} />
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
