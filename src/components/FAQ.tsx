import { faqPageSchema, JsonLd } from "@/lib/seo";

export default function FAQ({
  items,
  withSchema = true,
}: {
  items: { q: string; a: string }[];
  withSchema?: boolean;
}) {
  return (
    <div>
      {withSchema && <JsonLd data={faqPageSchema(items)} />}
      <div className="space-y-3">
        {items.map((f, i) => (
          <details
            key={i}
            className="group rounded-2xl border border-border bg-gradient-to-br from-surface-2/90 to-surface/90 p-5 open:border-accent/50"
          >
            <summary className="cursor-pointer list-none font-semibold text-foreground flex items-center justify-between gap-4">
              <span>{f.q}</span>
              <span
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-2 text-accent transition-transform group-open:rotate-45"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="mt-3 text-muted leading-relaxed border-t border-border/60 pt-3">
              {f.a}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}
