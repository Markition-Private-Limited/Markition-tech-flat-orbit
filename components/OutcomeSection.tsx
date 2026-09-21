import { outcomes } from "@/data/site";

export function OutcomeSection() {
  return (
    <section className="section-shell section-block" id="outcomes">
      <div className="section-heading">
        <p className="eyebrow">The Outcome</p>
        <h2>Built for Results. Designed for Growth.</h2>
      </div>

      <div className="outcome-grid large">
        {outcomes.map(({ icon: Icon, label }) => (
          <div className="outcome-card" key={label}>
            <div className="icon-tile">
              <Icon size={22} />
            </div>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
