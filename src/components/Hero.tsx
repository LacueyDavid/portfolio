const profileImg = new URL("../imgs/david.png", import.meta.url).href;

function Hero() {
  return (
    <section className="max-w-[850px] mx-auto pt-32 px-5 flex gap-[2%] items-start flex-col md:flex-row">
      <div className="flex flex-col flex-1 pb-18 items-center md:items-start text-center md:text-left">
        <h2 className="m-0 mb-6 font-bold text-[40px] leading-[60px]">
          Hi, I am Lacuey David,
          <br />
          student at 42 school
        </h2>
        <p className="mb-8 text-base pr-0 md:pr-8">
          Je suis étudiant à l'école 42, actuellement à la recherche d'un stage
          de 6 mois qui commencerait ds que possible. <br />
          Mon parcours à 42 m'a permis de renforcer mes compétences en
          programmation, en résolution de problèmes et en travail d'équipe à
          travers des projets concrets.
        </p>
        <button className="w-52 h-12 mb-10 bg-[#ff6464] text-white border-none rounded cursor-pointer text-xl hover:bg-[#ff1414]">
          Download Resume
        </button>
      </div>
      <div className="w-[243px] h-[243px] rounded-full relative order-first md:order-last">
        <div
          className="w-[243px] h-[243px] rounded-full bg-no-repeat bg-[length:275px] bg-[-10px_0] [filter:sepia(40%)_drop-shadow(10px_10px_0_#bac5c8)]"
          style={{ backgroundImage: `url('${profileImg}')` }}
        />
      </div>
    </section>
  );
}

export default Hero;
