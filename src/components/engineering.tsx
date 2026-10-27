import { ArrowUpRight, Braces, ScanLine, GitPullRequest } from "lucide-react";
import Link from "next/link";
import { portfolio } from "@/data/portfolio";

const icons = [Braces, ScanLine, GitPullRequest];

export function Engineering() {
  return (
    <section
      className="engineering section"
      aria-labelledby="engineering-title"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 / HOW I ENGINEER</p>
            <h2 id="engineering-title">
              “It works” is
              <br />
              <span className="text-muted">a starting point.</span>
            </h2>
          </div>
          <p className="section-intro">
            AI helps me move faster. Understanding the system tells me whether
            I’m moving in the right direction.
          </p>
        </div>
        <div className="principles-grid">
          {portfolio.principles.map((principle, index) => {
            const Icon = icons[index % icons.length];
            return (
              <article className="principle" key={principle.title}>
                <div className="principle-top">
                  <Icon size={24} strokeWidth={1.4} aria-hidden="true" />
                  <span>0{index + 1}</span>
                </div>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            );
          })}
        </div>
        <div className="engineering-note">
          <span className="note-label">
            <span className="status-dot" />
            IN PRACTICE
          </span>
          <p>
            In the Interview Simulator, the model evaluates answers. Application
            logic enforces the rules.
          </p>
          <Link href="/work/ai-interview-simulator#engineering">
            See the decisions
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
