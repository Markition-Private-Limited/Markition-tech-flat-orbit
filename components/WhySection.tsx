import { whyReasons } from "@/data/site";

export function WhySection() {
  return (
    <section className="section-shell section-block" id="why">
      <div className="section-heading">
        <p className="eyebrow">Why Markition Tech</p>
        <h2>Technology Built Around Your Business</h2>
      </div>

      <div className="service-grid">
        {whyReasons.map(({ icon: Icon, title, description }) => (
          <article className="service-card" key={title}>
            <div className="icon-tile">
              <Icon size={22} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>

      <p className="section-callout">
        We&apos;re not here to build technology and walk away. We&apos;re here to build technology your business can grow with.
      </p>
    </section>
  );
}
