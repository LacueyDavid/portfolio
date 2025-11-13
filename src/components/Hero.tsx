const profileImg = new URL("../imgs/david.png", import.meta.url).href;

function Hero() {
  return (
    <section className="flex max-w-[900px] mx-auto p-6 grid gap-6 md:grid-cols-[140px_1fr] items-center justify-center">
      <div className="w-[140px] h-[140px] rounded-full overflow-hidden border border-[var(--border)]">
        <img
          src={profileImg}
          alt="Photo de profil - Lacuey David"
          className="w-full h-full object-cover object-left-top filter grayscale saturate-0"
        />
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="font-extrabold text-2xl text-[var(--text)] leading-tight">
              Lacuey David
            </h2>
            <p className="text-sm text-[var(--muted)]">Student · 42 school</p>
          </div>
          <div className="flex gap-2">
            <span className="px-3 py-1 rounded-full text-sm font-semibold bg-[var(--accent)] text-[var(--surface)]">
              Open to internship
            </span>
          </div>
        </div>

        <div className="text-sm text-[var(--muted)]">
          <p className="m-0">
            Je suis étudiant à l'école 42, actuellement à la recherche d'un
            stage de 6 mois qui pourrait commencer dès que possible.
          </p>
          <p className="m-0 mt-2">
            Mon parcours m'a permis de renforcer mes compétences en
            programmation, en résolution de problèmes et en travail d'équipe à
            travers des projets concrets.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
