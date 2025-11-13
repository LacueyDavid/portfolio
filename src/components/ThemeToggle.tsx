import React from "react";

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
    document.documentElement.classList.toggle("dark", theme === "dark");
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
      className="p-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}
