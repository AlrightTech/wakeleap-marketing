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
      <div className="space-y-4">
        {items.map((f, i) => (
          <details
            key={i}
            className="group rounded-xl border border-border bg-surface p-5 open:border-accent/60"
          >
            <summary className="cursor-pointer list-none font-semibold text-foreground flex items-center justify-between gap-4">
              <span>{f.q}</span>
              <span className="text-accent transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-muted leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}