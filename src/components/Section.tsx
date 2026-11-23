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
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container-x">
        {(eyebrow || title || subtitle) && (
          <header className="mb-10 max-w-3xl">
            {eyebrow && (
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
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