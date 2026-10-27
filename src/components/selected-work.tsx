import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import { ProjectArt } from "@/components/project-art";
import { projectMedia } from "@/data/media";

function WorkCard({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  const media = projectMedia[project.slug];
  return (
    <article
      className={`work-card work-${project.accent} ${compact ? "work-compact" : ""}`}
    >
      <Link
        className="work-visual-link"
        href={`/work/${project.slug}`}
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="work-art">
          {media ? (
            <Image
              src={media.src}
              alt={media.alt}
              fill
              sizes="(max-width: 760px) 100vw, 50vw"
              className="project-screenshot"
            />
          ) : (
            <ProjectArt slug={project.slug} />
          )}
        </div>
      </Link>
      <div className="work-body">
        <div className="work-kicker">
          <span>
            {project.number} / {project.category}
          </span>
          <span className="work-status">{project.status.split(" / ")[0]}</span>
        </div>
        <h3>
          <Link href={`/work/${project.slug}`}>
            {project.title}
            <ArrowUpRight className="work-arrow" size={25} aria-hidden="true" />
          </Link>
        </h3>
        <p className="work-summary">{project.summary}</p>
        <p className="work-role">{project.role}</p>
        <div className="work-bottom">
          <div className="work-stack">
            {project.stack.slice(0, compact ? 4 : 3).map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
          <Link href={`/work/${project.slug}`} className="case-link">
            Read case study <ArrowUpRight size={14} aria-hidden="true" />
            <span className="sr-only">: {project.title}</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

export function SelectedWork() {
  return (
    <section
      id="work"
      className="section selected-work container"
      aria-labelledby="work-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">01 / SELECTED WORK</p>
          <h2 id="work-title">
            Different challenges.
            <br />
            <span className="text-muted">One engineering mindset.</span>
          </h2>
        </div>
        <p className="section-intro">
          Three projects. From product workflows to AI reliability and the
          backend underneath.
        </p>
      </div>
      <div className="work-grid">
        {projects.map((project, index) => (
          <WorkCard
            key={project.slug}
            project={project}
            compact={index === 2}
          />
        ))}
      </div>
    </section>
  );
}
