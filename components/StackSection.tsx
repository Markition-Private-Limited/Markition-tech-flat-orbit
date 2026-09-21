import { techCategories } from "@/data/site";

export function StackSection() {
  return (
    <section className="section-shell section-block" id="stack">
      <div className="section-heading">
        <p className="eyebrow">The Stack</p>
        <h2>The Technology Behind the Technology</h2>
        <p>
          The right technology depends on the problem we&apos;re solving. We select modern, reliable technologies based on your product requirements, performance needs, scalability goals, integrations, and long-term roadmap.
        </p>
      </div>

      <div className="industry-grid">
        {techCategories.map((category) => (
          <div className="industry-tag" key={category}>
            {category}
          </div>
        ))}
      </div>

      <p className="section-callout">
        Technology should serve your business — not the other way around.
      </p>
    </section>
  );
}
