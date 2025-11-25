import { motion } from "framer-motion";
import { Download } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            About Me
          </h2>
          <div className="glass-card p-8 rounded-2xl text-gray-300 leading-relaxed space-y-4">
            <p>
              I'm a passionate Full Stack Developer and a student at{" "}
              <span className="text-purple-400 font-semibold">42 Paris</span>,
              where I've honed my skills through peer-to-peer learning and
              rigorous coding challenges. Having completed the Common Core, I
              have a strong foundation in C, C++, and algorithmic thinking.
            </p>
            <p>
              My journey in tech is driven by a curiosity for how things work,
              which evolved into a career building scalable web solutions. I
              love experimenting with new technologies like 3D web graphics and
              AI integration to push the boundaries of what's possible on the
              web.
            </p>
            <p>
              When I'm not coding, you can find me exploring new tech trends, or
              climbing.
            </p>

            <div className="pt-6 flex justify-center">
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white transition-all hover:scale-105 group"
              >
                <Download
                  size={20}
                  className="group-hover:translate-y-1 transition-transform"
                />
                Download Resume
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
