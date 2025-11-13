import GithubMark from "./icons/GithubMark";
import Insta from "./icons/Insta";
import VectorIcon from "./icons/VectorIcon";
import Linkedin from "./icons/Linkedin";

function Footer() {
  return (
    <>
      {/* Social Networks */}
      <div className="flex justify-center items-center gap-9 pt-[35px] pb-6">
        <a
          href="https://github.com/LacueyDavid"
          className="flex h-8 w-8 transition-transform duration-100 hover:scale-110"
        >
          <GithubMark className="h-8 w-8 text-[var(--text)]" />
        </a>
        <a
          href="#"
          className="transition-transform duration-100 hover:scale-110"
        >
          <Insta className="h-8 w-8 text-[var(--text)]" />
        </a>
        <a
          href="#"
          className="transition-transform duration-100 hover:scale-110"
        >
          <VectorIcon className="h-8 w-8 text-[var(--text)]" />
        </a>
        <a
          href="#"
          className="transition-transform duration-100 hover:scale-110"
        >
          <Linkedin className="h-8 w-8 text-[var(--text)]" />
        </a>
      </div>
    </>
  );
}

export default Footer;
