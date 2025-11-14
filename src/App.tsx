import { Header, Hero, Projects, Footer, SectionDivider, ParticleBackground } from "./components";

function App() {
  return (
    <div className="min-h-screen text-[var(--text)] transition-colors duration-200 pt-32">
      <ParticleBackground />
      <Header />
      <Hero />
      <SectionDivider label="Projects" />
      <Projects />
      <SectionDivider label="Skills" />
      <SectionDivider label="Contacts" />
      <Footer />
    </div>
  );
}

export default App;
