import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { projectOutcomes, projects } from "@/data/site";

export function Portfolio() {
  return (
    <section className="portfolio-section" id="work">
      <div className="section-shell section-block">
        <div className="section-heading">
          <p className="eyebrow">Our Work</p>
          <h2>Technology Built to Solve Real Business Problems</h2>
          <p>
            We don&apos;t measure a project by how much code was written. We measure it by what the technology helped the business achieve.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <div className="project-image">
                <Image src={project.image} alt={`${project.name} preview`} width={760} height={480} />
              </div>
              <div className="project-content">
                <div>
                  <span>{project.category}</span>
                  <h3>{project.name}</h3>
                </div>
                <a href={project.href} aria-label={`Visit ${project.name}`}>
                  <ExternalLink size={18} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="outcome-grid">
          {projectOutcomes.map(({ icon: Icon, label }) => (
            <div className="outcome-tag" key={label}>
              <Icon size={16} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
