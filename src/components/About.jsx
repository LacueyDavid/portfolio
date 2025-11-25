import { motion } from "framer-motion";

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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
