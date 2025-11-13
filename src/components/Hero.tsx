const profileImg = new URL("../imgs/david.png", import.meta.url).href;

function Hero() {
  return (
    <section className="max-w-[850px] mx-auto pt-32 px-5 flex gap-[2%] items-start flex-col  text-gray-900 dark:text-gray-100">
      <div className="flex flex-1 pb-18 items-center md:items-start text-center md:text-left gap-8">
        <div className="w-[143px] h-[143px] rounded-full overflow-hidden">
          <img
            src={profileImg}
            alt="Photo de profil - Lacuey David"
            className="w-full h-full object-cover object-left-top filter grayscale saturate-0"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-[30px] leading-[60px]">Lacuey David</h2>
          <h3 className="font-bold text-[25px] leading-[60px]">
            student at 42 school
          </h3>
        </div>
      </div>
      <p className="mb-8 text-base pr-0 md:pr-8">
        Je suis étudiant à l'école 42, actuellement à la recherche d'un stage de
        6 mois qui commencerait ds que possible. <br />
        Mon parcours à 42 m'a permis de renforcer mes compétences en
        programmation, en résolution de problèmes et en travail d'équipe à
        travers des projets concrets.
      </p>
    </section>
  );
}

export default Hero;
