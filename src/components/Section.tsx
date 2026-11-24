import type { ReactNode } from "react";

export default function Section({
  children,
  className = "",
  id,
  eyebrow,
  title,
  subtitle,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}) {
  return (
    <section id={id} className={`relative py-16 md:py-24 ${className}`}>
      <div className="container-x relative z-[1]">
        {(eyebrow || title || subtitle) && (
          <header className="mb-10 max-w-3xl">
            {eyebrow && (
              <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-lg text-muted leading-relaxed">{subtitle}</p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
