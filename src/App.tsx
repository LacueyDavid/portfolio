import { Header, Hero, RecentPosts, Projects, Footer } from "./components";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-200">
      <Header />
      <Hero />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
