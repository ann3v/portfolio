import { ArrowUpRight } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export function About() {
  return (
    <section
      id="about"
      className="about section container"
      aria-labelledby="about-title"
    >
      <div className="about-main">
        <div>
          <p className="eyebrow">03 / THE PERSON BEHIND THE CODE</p>
          <h2 id="about-title">
            I didn’t grow up
            <br />
            building computers.
            <br />
            <span className="text-muted">I grew into this.</span>
          </h2>
          <div className="education-note">
            <span className="education-mark" aria-hidden="true">
              ↗
            </span>
            <div>
              <h3>{portfolio.education.program}</h3>
              <p>{portfolio.education.status}</p>
              {portfolio.education.institution && (
                <p>{portfolio.education.institution}</p>
              )}
            </div>
          </div>
        </div>
        <div className="about-copy">
          {portfolio.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <a
            className="text-link"
            href={portfolio.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore the learning history
            <ArrowUpRight size={16} aria-hidden="true" />
            <span className="sr-only"> on GitHub (opens in a new tab)</span>
          </a>
        </div>
      </div>
      <div className="progression" aria-label="Learning progression">
        {portfolio.progression.map((step, index) => (
          <div className="progression-step" key={step.title}>
            <span className="progression-number">0{index + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
