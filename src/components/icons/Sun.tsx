import type { FC, SVGProps } from "react";

type Props = SVGProps<SVGSVGElement> & {
  className?: string;
  title?: string;
};

const Sun: FC<Props> = ({
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
    {/* Filled sun using currentColor so color is controlled by Tailwind text-* utilities */}
    <circle cx="12" cy="12" r="4" fill="currentColor" />
    <g fill="currentColor">
      <rect x="11" y="1" width="2" height="3" rx="1" />
      <rect x="11" y="20" width="2" height="3" rx="1" />
      <rect x="1" y="11" width="3" height="2" rx="1" />
      <rect x="20" y="11" width="3" height="2" rx="1" />
      <rect
        x="4.2"
        y="4.2"
        width="2"
        height="3"
        transform="rotate(-45 5.2 5.7)"
      />
      <rect
        x="17.8"
        y="17.8"
        width="2"
        height="3"
        transform="rotate(-45 18.8 19.3)"
      />
      <rect
        x="4.2"
        y="16.8"
        width="2"
        height="3"
        transform="rotate(45 5.2 18.3)"
      />
      <rect
        x="17.8"
        y="6.2"
        width="2"
        height="3"
        transform="rotate(45 18.8 7.7)"
      />
    </g>
  </svg>
);

export default Sun;
