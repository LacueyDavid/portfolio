import ThemeToggle from "./ThemeToggle";

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 flex justify-end gap-8 bg-transparent pr-16 z-[100]">
      <a
        href="#works"
        className="no-underline text-[var(--text)] font-medium text-xl py-7 inline-block hover:text-[var(--muted)]"
      >
        Projects
      </a>
      <div className="flex items-center">
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;
