import React from "react";
import Sun from "./icons/Sun";
import Moon from "./icons/Moon";

export default function ThemeToggle() {
  const [theme, setTheme] = React.useState<"light" | "dark">(() => {
    try {
      const s = localStorage.getItem("theme");
      if (s === "light" || s === "dark") return s;
      return window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    } catch {
      return "light";
    }
  });

  React.useEffect(() => {
    // Apply explicit classes so user's choice wins over prefers-color-scheme
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.classList.toggle("light", theme === "light");
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  const onKey = (e: React.KeyboardEvent<SVGElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <>
      {theme === "dark" ? (
        <Moon
          className="w-6 h-6 text-[var(--text)] cursor-pointer transition-colors"
          title="Switch to light mode"
          role="button"
          tabIndex={0}
          onClick={toggle}
          onKeyDown={onKey}
        />
      ) : (
        <Sun
          className="w-6 h-6 text-[var(--text)] cursor-pointer transition-colors"
          title="Switch to dark mode"
          role="button"
          tabIndex={0}
          onClick={toggle}
          onKeyDown={onKey}
        />
      )}
    </>
  );
}
