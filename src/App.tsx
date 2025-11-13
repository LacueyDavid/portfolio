import { Header, Hero, Projects, Footer, SectionDivider } from "./components";

function App() {
  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-[var(--text)] transition-colors duration-200 pt-32">
      <Header />
      <Hero />
      <SectionDivider label="Projects" />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
