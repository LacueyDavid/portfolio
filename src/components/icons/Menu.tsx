import type { FC, SVGProps } from "react";

type Props = SVGProps<SVGSVGElement> & { className?: string; title?: string };

const Menu: FC<Props> = ({
  className = "w-6 h-6",
  title = "Menu",
  ...props
}) => (
  <svg
    {...props}
    className={className}
    viewBox="0 0 30 30"
    width="30"
    height="30"
    xmlns="http://www.w3.org/2000/svg"
    role={props.role ?? "img"}
    aria-label={title}
  >
    <title>{title}</title>
    <path d="M0 1H30" stroke="currentColor" strokeWidth="1.6" />
    <path d="M0 10H30" stroke="currentColor" strokeWidth="1.6" />
    <path d="M0 19H30" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

export default Menu;
