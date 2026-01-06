import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Inception",
    description:
      "Mise en place d'une infrastructure Docker complète pour héberger divers services (NGINX, MariaDB, WordPress) dans des conteneurs isolés. Configuration des réseaux et des volumes.",
    tags: ["Docker", "System Admin", "Virtualization", "Bash", "Linux"],
    image: "/img/pokecard.png", // Placeholder, ideally should be changed
    github: "https://github.com/LacueyDavid/inception",
    // demo: "#",
  },
  {
    title: "Transcendence",
    description:
      "Site web de Pong multijoueur. Focus sur l'architecture micro-services conteneurisée avec Docker, gestion des WebSockets pour le temps réel et sécurité OAuth2/2FA.",
    tags: [
      "Docker",
      "PostgreSQL",
      "WebSockets",
      "Micro-services",
      "Security",
      "Nginx",
    ],
    image: "/img/transcendence.png",
    github: "https://github.com/LacueyDavid/ft_transcendence",
    // demo: "#",
  },
  {
    title: "ft_irc",
    description:
      "Implémentation d'un serveur IRC from scratch en C++. Gestion bas niveau des sockets TCP/IP non-bloquants (poll), parsing de commandes et gestion de clients concurrents.",
    tags: ["C++", "Sockets", "TCP/IP", "Network Protocol", "Unix"],
    image: "/img/irc.jpg",
    github: "https://github.com/LacueyDavid/ft_irc",
    // demo: "#",
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
