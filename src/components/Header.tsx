import ThemeToggle from "./ThemeToggle";

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 flex justify-end gap-8 bg-white dark:bg-gray-900 pr-16 z-[100]">
      <a
        href="#posts"
        className="no-underline text-black dark:text-gray-100 font-medium text-xl py-7 inline-block hover:text-gray-700 dark:hover:text-gray-300"
      >
        Posts
      </a>
      <a
        href="#works"
        className="no-underline text-black dark:text-gray-100 font-medium text-xl py-7 inline-block hover:text-gray-700 dark:hover:text-gray-300"
      >
        Works
      </a>
      <div className="flex items-center">
        <ThemeToggle />
      </div>
      <div className="hidden md:hidden w-10 h-10 my-5 mx-5 bg-[url('./imgs/menu.svg')] bg-no-repeat bg-[length:40px]" />
    </header>
  );
}

export default Header;
