import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, description, children }: SectionProps) {
  return (
    <section id={id} className="section">
      <div className="container">
        <div className="mb-8 max-w-3xl">
          {eyebrow ? (
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#00B894]">{eyebrow}</p>
          ) : null}
          <h2 className="text-2xl font-bold leading-[1.32] tracking-[0] text-[#111827] [overflow-wrap:break-word] [word-break:keep-all] md:text-4xl md:leading-[1.26]">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-7 text-[#6B7280] [overflow-wrap:break-word] [word-break:keep-all]">
              {description}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-[#E5E1D8] bg-white px-3 py-1.5 text-sm font-medium text-[#111827]">
      {children}
    </span>
  );
}
