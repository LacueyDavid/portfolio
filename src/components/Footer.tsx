const githubMark = new URL("../imgs/github-mark.svg", import.meta.url).href;
const instaImg = new URL("../imgs/insta.svg", import.meta.url).href;
const vectorImg = new URL("../imgs/Vector.svg", import.meta.url).href;
const linkedinImg = new URL("../imgs/Linkedin.svg", import.meta.url).href;

function Footer() {
  return (
    <>
      {/* Social Networks */}
      <div className="flex justify-center items-center gap-9 pt-[35px] pb-6">
        <a
          href="https://github.com/LacueyDavid"
          className="flex h-8 w-8 transition-transform duration-100 hover:scale-110"
        >
          <img src={githubMark} alt="GitHub" />
        </a>
        <img
          src={instaImg}
          alt="Instagram"
          className="h-8 w-8 transition-transform duration-100 hover:scale-110 cursor-pointer"
        />
        <img
          src={vectorImg}
          alt="Vector"
          className="h-8 w-8 transition-transform duration-100 hover:scale-110 cursor-pointer"
        />
        <img
          src={linkedinImg}
          alt="LinkedIn"
          className="h-8 w-8 transition-transform duration-100 hover:scale-110 cursor-pointer"
        />
      </div>
    </>
  );
}

export default Footer;
