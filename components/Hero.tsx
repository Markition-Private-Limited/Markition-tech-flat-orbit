import { ArrowUpRight, ArrowRight } from "lucide-react";
import Image from "next/image";
import { featuredMetrics, stats } from "@/data/site";

export function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-grid section-shell">
        <div className="hero-copy">
          <p className="eyebrow">Technology / Digital Infrastructure</p>
          <h1>We Build Technology Around Your Business</h1>
          <p className="hero-lede">
            Your business isn&apos;t built like everyone else&apos;s. Your technology shouldn&apos;t be either. Markition Tech designs and develops custom software, business systems, web platforms, mobile applications, and integrations around the way your business actually works — helping you automate operations, connect your systems, and scale with confidence.
          </p>
          <div className="hero-actions">
            <a className="primary-action large" href="#contact">
              Start a Project
              <ArrowUpRight size={18} />
            </a>
            <a className="secondary-action" href="#services">
              <ArrowRight size={16} />
              Explore Our Solutions
            </a>
          </div>
          <div className="stat-row" aria-label="Markition delivery model">
            {stats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual" aria-label="Markition project preview">
          <div className="project-window">
            <div className="window-bar">
              <span />
              <span />
              <span />
            </div>
            <Image
              src="/assets/aimscholar-CvJCjHHq.png"
              alt="Project preview"
              width={900}
              height={560}
              priority
            />
          </div>
          <div className="metric-stack">
            {featuredMetrics.map(({ icon: Icon, label, value }) => (
              <div className="metric-card" key={label}>
                <Icon size={20} />
                <div>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="hero-subline section-shell">
        From business idea to enterprise system — we design, build, integrate, and scale technology that works for you.
      </p>
    </section>
  );
}
