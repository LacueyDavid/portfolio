import React from "react";

interface SectionDividerProps {
  label: string;
}

const SectionDivider: React.FC<SectionDividerProps> = ({ label }) => {
  return (
    <div className="relative flex items-center justify-center w-full my-8">
      {/* ligne with fade at the edges using mask-image */}
      <div
        className="w-full absolute h-[1px] bg-[var(--border)]"
        style={{
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 0%, black 50%, transparent 100%)",
          maskImage:
            "linear-gradient(90deg, transparent 0%, black 50%, transparent 100%)",
        }}
      />

      {/* texte (theme-aware) */}
      <span className="relative px-4 py-1 text-sm text-[var(--text)] border border-[var(--border)] rounded-full bg-[var(--page-bg)]">
        {label}
      </span>
    </div>
  );
};

export default SectionDivider;
