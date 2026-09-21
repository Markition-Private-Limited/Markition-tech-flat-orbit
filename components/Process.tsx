import { processSteps } from "@/data/site";

export function Process() {
  return (
    <section className="section-shell section-block" id="process">
      <div className="process-layout">
        <div className="section-heading align-left">
          <p className="eyebrow">How We Build</p>
          <h2>From Business Problem to Working Technology</h2>
          <p>
            You bring the business challenge. We turn it into working technology.
          </p>
        </div>

        <div className="process-list">
          {processSteps.map(({ icon: Icon, title, description }, index) => (
            <article className="process-item" key={title}>
              <div className="process-number">{String(index + 1).padStart(2, "0")}</div>
              <div className="icon-tile">
                <Icon size={22} />
              </div>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
