import { solutions } from "@/data/site";

export function SolutionsSection() {
  return (
    <section className="section-shell section-block" id="solutions">
      <div className="section-heading">
        <p className="eyebrow">Our Solutions</p>
        <h2>From One System to Your Entire Business</h2>
        <p>
          Technology should not create another layer of complexity. We help businesses build connected digital ecosystems — starting with one critical system and expanding as the business grows.
        </p>
      </div>

      <div className="service-grid">
        {solutions.map(({ icon: Icon, title, description }) => (
          <article className="service-card" key={title}>
            <div className="icon-tile">
              <Icon size={22} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
