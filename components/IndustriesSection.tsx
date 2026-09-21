import { industries } from "@/data/site";

export function IndustriesSection() {
  return (
    <section className="section-shell section-block" id="industries">
      <div className="section-heading">
        <p className="eyebrow">Industry Solutions</p>
        <h2>Technology Built for Your Industry</h2>
        <p>
          Every industry has different workflows, customers, regulations, and operational challenges. Our approach starts by understanding how your business operates — then we build technology around it.
        </p>
      </div>

      <div className="industry-grid">
        {industries.map((name) => (
          <div className="industry-tag" key={name}>
            {name}
          </div>
        ))}
      </div>

      <p className="section-callout">
        If your industry isn&apos;t listed, that&apos;s not a limitation. We build around the business problem — not just the industry label.
      </p>
    </section>
  );
}
