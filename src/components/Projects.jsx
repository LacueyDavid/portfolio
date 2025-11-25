import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "pokeCard",
    description:
      "A comprehensive Pokémon SPA featuring 1st Gen Pokédex with advanced filtering, search, and detailed stats modal. Built with performance in mind using SWR for caching.",
    tags: ["React", "TypeScript", "Vite", "SWR", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1613771404721-1f92d799e49f?w=800&q=80",
    github: "https://github.com/LacueyDavid/pokeCard",
    demo: "#",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with cart, checkout, and admin dashboard.",
    tags: ["Next.js", "Stripe", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    github: "#",
    demo: "#",
  },
  {
    title: "AI Chat Application",
    description: "Real-time chat interface powered by OpenAI's GPT-4 API.",
    tags: ["React", "Socket.io", "OpenAI"],
    image:
      "https://images.unsplash.com/photo-1587560699334-cc4da63c2409?w=800&q=80",
    github: "#",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-card rounded-xl overflow-hidden group hover:border-purple-500/50 transition-colors"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    className="p-2 bg-white/10 rounded-full hover:bg-white/20 text-white transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.demo}
                    className="p-2 bg-white/10 rounded-full hover:bg-white/20 text-white transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
