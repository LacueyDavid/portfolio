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
              I'm a passionate System and Network Architect and a student at{" "}
              <span className="text-purple-400 font-semibold">42 Paris</span>,
              where I've honed my skills through rigorous technical challenges.
              Having completed the Common Core, I have a strong foundation in
              low-level programming (C/C++), operating systems, and network
              protocols.
            </p>
            <p>
              My expertise lies in designing scalable and secure network
              infrastructures. I thrive on solving complex system administration
              problems, automating deployments, and ensuring high availability.
              I am constantly exploring new technologies in Cloud Computing,
              Cybersecurity, and Virtualization.
            </p>
            <p>
              When I'm not configuring servers or analyzing packet captures, you
              can find me staying up-to-date with the latest cybersecurity
              trends or climbing.
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
