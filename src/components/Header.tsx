function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 flex justify-end gap-8 bg-white pr-16 z-[100]">
      <a
        href="#posts"
        className="no-underline text-black font-medium text-xl py-7 inline-block hover:text-gray-700"
      >
        Posts
      </a>
      <a
        href="#works"
        className="no-underline text-black font-medium text-xl py-7 inline-block hover:text-gray-700"
      >
        Works
      </a>
      <div className="hidden md:hidden w-10 h-10 my-5 mx-5 bg-[url('./imgs/menu.svg')] bg-no-repeat bg-[length:40px]" />
    </header>
  );
}

export default Header;
