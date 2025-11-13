import type { FC } from "react";

type Props = {
  className?: string;
  title?: string;
};

const Oeil: FC<Props> = ({ className, title = "Voir le projet" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label={title}
  >
    <title>{title}</title>
    <path
      fill="currentColor"
      d="M12 5C7 5 2.73 8.11 1 12c1.73 3.89 6 7 11 7s9.27-3.11 11-7c-1.73-3.89-6-7-11-7zm0 10.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7z"
    />
    <circle cx="12" cy="12" r="2.2" fill="white" />
  </svg>
);

export default Oeil;
