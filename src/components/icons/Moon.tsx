import type { FC, SVGProps } from "react";

type Props = SVGProps<SVGSVGElement> & {
  className?: string;
  title?: string;
};

const Moon: FC<Props> = ({
  className = "w-6 h-6",
  title = "Toggle theme",
  ...props
}) => (
  <svg
    {...props}
    className={className}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    role={props.role ?? "img"}
    aria-label={title}
  >
    <title>{title}</title>
    {/* Simple crescent moon using a path */}
    <path
      fill="currentColor"
      d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
    />
  </svg>
);

export default Moon;
