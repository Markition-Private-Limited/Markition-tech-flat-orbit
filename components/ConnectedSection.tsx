import { connectedBenefits, connectedNodes } from "@/data/site";

export function ConnectedSection() {
  return (
    <section className="section-shell section-block connected-section" id="connected">
      <div className="section-heading">
        <p className="eyebrow">Connected Technology</p>
        <h2>Your Business Shouldn&apos;t Run on Isolated Systems</h2>
        <p>
          Markition Tech connects the systems behind your business so information can move where it needs to go, teams can work from better data, and customers can experience a more connected digital journey.
        </p>
      </div>

      <div className="connected-diagram">
        <div className="connected-hub">
          <span>Markition</span>
        </div>
        <div className="connected-nodes">
          {connectedNodes.map((node) => (
            <div className="connected-node" key={node}>
              {node}
            </div>
          ))}
        </div>
      </div>

      <div className="outcome-grid">
        {connectedBenefits.map((benefit) => (
          <div className="outcome-tag" key={benefit}>
            <span>{benefit}</span>
          </div>
        ))}
      </div>

      <p className="section-callout">
        We Don&apos;t Just Build Systems. We Connect Them.
      </p>
    </section>
  );
}
