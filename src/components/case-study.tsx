import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  MoveUpRight,
} from "lucide-react";
import { ArchitectureDiagram } from "@/components/architecture-diagram";
import { projects, type Project } from "@/data/portfolio";
import { projectMedia } from "@/data/media";
import "@/app/case-study.css";

function SectionHeading({
  label,
  title,
  id,
}: {
  label: string;
  title: string;
  id: string;
}) {
  return (
    <div className="case-section-heading">
      <p className="eyebrow">{label}</p>
      <h2 id={id}>{title}</h2>
    </div>
  );
}

export function CaseStudy({ project }: { project: Project }) {
  const next =
    projects[
      (projects.findIndex((entry) => entry.slug === project.slug) + 1) %
        projects.length
    ];
  const media = projectMedia[project.slug];
  return (
    <main id="main-content" className={`case-study case-${project.accent}`}>
      <div className="container">
        <header className="case-hero">
          <Link href="/#work" className="case-back">
            <ArrowLeft size={15} aria-hidden="true" />
            All selected work
          </Link>
          <p className="eyebrow case-project-label">
            <span>PROJECT {project.number}</span>
            <span>{project.category}</span>
          </p>
          <h1>{project.title}</h1>
          <p className="case-headline">{project.headline}</p>
          {project.liveUrl && (
            <a
              className="button button-primary case-live-button"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open live app
              <ArrowUpRight size={17} aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          )}
          <dl className="case-meta">
            <div>
              <dt>Contribution</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>Stage</dt>
              <dd>{project.status}</dd>
            </div>
            <div>
              <dt>Core stack</dt>
              <dd>{project.stack.slice(0, 3).join(" · ")}</dd>
            </div>
          </dl>
        </header>

        {media && (
          <figure className="case-project-media">
            <Image
              src={media.src}
              alt={media.alt}
              fill
              sizes="(max-width: 760px) 100vw, 1200px"
              priority
            />
          </figure>
        )}

        <nav className="case-jump-nav" aria-label="Case study sections">
          <a href="#overview">Overview</a>
          <a href="#architecture">Architecture</a>
          <a href="#contribution">My contribution</a>
          <a href="#engineering">Engineering</a>
          {project.experiment && <a href="#experiment">Experiment</a>}
          <a href="#next-steps">Next steps</a>
        </nav>

        <section
          className="case-section case-overview"
          aria-labelledby="overview"
        >
          <SectionHeading
            label="01 / THE IDEA"
            title="Built around a real use case."
            id="overview"
          />
          <div>
            <p className="case-lead">{project.overview}</p>
            {project.evolution && (
              <ol className="case-evolution" aria-label="Project evolution">
                {project.evolution.map((step, index) => (
                  <li key={step}>
                    <span>0{index + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            )}
          </div>
        </section>

        <section className="case-section" aria-labelledby="product">
          <SectionHeading
            label="02 / THE PRODUCT"
            title="What the application does."
            id="product"
          />
          <p className="case-section-intro">{project.product.intro}</p>
          <div
            className={`case-feature-grid ${project.product.features.length === 3 ? "case-feature-three" : ""}`}
          >
            {project.product.features.map((feature, index) => (
              <article className="case-feature" key={feature.title}>
                <span className="case-feature-index">
                  0{index + 1}
                  <MoveUpRight size={18} aria-hidden="true" />
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
          {project.workflow && (
            <div className="case-workflow">
              <div>
                <p className="eyebrow">WORKFLOW DESIGN</p>
                <h3>{project.workflow.title}</h3>
                <p>{project.workflow.description}</p>
              </div>
              <ol>
                {project.workflow.steps.map((step, index) => (
                  <li key={step}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {step}
                    {index < project.workflow!.steps.length - 1 && (
                      <ArrowRight aria-hidden="true" size={15} />
                    )}
                  </li>
                ))}
              </ol>
            </div>
          )}
        </section>

        <section className="case-section" aria-labelledby="architecture">
          <SectionHeading
            label="03 / SYSTEM DESIGN"
            title="How the pieces connect."
            id="architecture"
          />
          <p className="case-section-intro">
            {project.architecture.description}
          </p>
          <ArchitectureDiagram
            steps={project.architecture.steps}
            label={`${project.title} / architecture`}
          />
          <p className="case-diagram-note">{project.architecture.note}</p>
        </section>

        <section
          className="case-section case-contribution"
          aria-labelledby="contribution"
        >
          <SectionHeading
            label="04 / MY CONTRIBUTION"
            title={project.contribution.title}
            id="contribution"
          />
          <div>
            <p className="case-lead">{project.contribution.description}</p>
            <ul className="case-check-list">
              {project.contribution.items.map((item) => (
                <li key={item}>
                  <Check size={16} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="case-section" aria-labelledby="engineering">
          <SectionHeading
            label="05 / ENGINEERING DECISIONS"
            title={
              project.layers
                ? "Judgment from the model. Rules from the software."
                : "The work beneath the interface."
            }
            id="engineering"
          />
          {project.layers && (
            <div className="case-layers">
              {project.layers.map((layer, index) => (
                <article key={layer.title}>
                  <div className="case-layer-top">
                    <span className="eyebrow">
                      {index === 0
                        ? "GENERATE & EVALUATE"
                        : "VALIDATE & ENFORCE"}
                    </span>
                    <span aria-hidden="true">0{index + 1}</span>
                  </div>
                  <h3>{layer.title}</h3>
                  <p>{layer.description}</p>
                  <ul>
                    {layer.items.map((item) => (
                      <li key={item}>
                        <span aria-hidden="true">
                          {index === 0 ? "↗" : "+"}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          )}
          <div className="case-decisions">
            {project.challenges.map((challenge, index) => (
              <article key={challenge.title}>
                <span className="case-decision-number">0{index + 1}</span>
                <h3>{challenge.title}</h3>
                <p>{challenge.description}</p>
              </article>
            ))}
          </div>
        </section>

        {project.experiment && (
          <section
            className="case-section case-experiment"
            aria-labelledby="experiment"
          >
            <SectionHeading
              label="06 / THE RECORDED EXPERIMENT"
              title={project.experiment.title}
              id="experiment"
            />
            <p className="case-section-intro">
              {project.experiment.description}
            </p>
            <div
              className="experiment-equation"
              aria-label={`${project.experiment.design.answers} answers times ${project.experiment.design.repetitions} repetitions equals ${project.experiment.design.evaluations} protocol evaluations`}
            >
              <div>
                <strong>{project.experiment.design.answers}</strong>
                <span>authored answers</span>
              </div>
              <span aria-hidden="true">×</span>
              <div>
                <strong>{project.experiment.design.repetitions}</strong>
                <span>repetitions each</span>
              </div>
              <span aria-hidden="true">=</span>
              <div>
                <strong>{project.experiment.design.evaluations}</strong>
                <span>protocol evaluations</span>
              </div>
            </div>
            <div className="experiment-findings">
              {project.experiment.findings.map((finding) => (
                <div key={finding.title}>
                  <strong>{finding.title}</strong>
                  <p>{finding.description}</p>
                </div>
              ))}
            </div>
            <aside className="experiment-limitations">
              <h3>What these results can tell us</h3>
              <p>{project.experiment.limitations}</p>
            </aside>
          </section>
        )}

        <section className="case-section" aria-labelledby="quality">
          <SectionHeading
            label={`${project.experiment ? "07" : "06"} / RELIABILITY & SECURITY`}
            title="Making the boundaries explicit."
            id="quality"
          />
          <div className="case-quality-grid">
            {project.quality.map((item) => (
              <article key={item.title}>
                <span className="case-quality-mark" aria-hidden="true">
                  +
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="case-section case-next-steps"
          aria-labelledby="next-steps"
        >
          <SectionHeading
            label={`${project.experiment ? "08" : "07"} / WHAT COMES NEXT`}
            title="Working software. Room to improve."
            id="next-steps"
          />
          <div>
            <p className="case-stage-note">
              Current stage: <strong>{project.status}.</strong>
              {project.experiment &&
                " This is an interview-practice system; it is not a validated hiring assessment."}
            </p>
            <ul>
              {project.improvements.map((item) => (
                <li key={item}>
                  <ArrowUpRight size={16} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="case-stack" aria-labelledby="stack">
          <h2 id="stack" className="eyebrow">
            BUILT WITH
          </h2>
          <ul>
            {project.stack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </section>
        <nav className="case-next-project" aria-label="Other projects">
          <div>
            <p className="eyebrow">NEXT PROJECT / {next.number}</p>
            <Link href={`/work/${next.slug}`}>
              {next.title}
              <ArrowUpRight aria-hidden="true" />
            </Link>
            <p>{next.category}</p>
          </div>
          <Link className="case-back" href="/#work">
            <ArrowLeft size={15} aria-hidden="true" />
            Back to all work
          </Link>
        </nav>
      </div>
    </main>
  );
}
