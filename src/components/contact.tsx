import { ArrowUpRight } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { ProfileLinks, type PublicProfile } from "@/components/profile-links";

export function Contact({ profile = portfolio }: { profile?: PublicProfile }) {
  return (
    <section
      id="contact"
      className="contact section container"
      aria-labelledby="contact-title"
    >
      <div className="contact-panel">
        <div className="contact-top">
          <p className="eyebrow">05 / WHAT’S NEXT</p>
          <span className="availability">
            <span className="status-dot" />
            OPEN TO OPPORTUNITIES
          </span>
        </div>
        <h2 id="contact-title">
          Good work starts
          <br />
          with a <span>conversation.</span>
        </h2>
        <div className="contact-bottom">
          <div>
            <p>
              I’m looking for a team where I can contribute,
              <br className="desktop-break" /> take on hard problems, and keep
              getting better.
            </p>
            <span className="contact-location">
              Full-stack · Software engineering · AI-powered products
            </span>
          </div>
          <a
            className="button button-primary"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            Let’s connect
            <ArrowUpRight size={18} aria-hidden="true" />
            <span className="sr-only"> on LinkedIn (opens in a new tab)</span>
          </a>
        </div>
        <div className="contact-meta">
          <span>{portfolio.availability}</span>
          <ProfileLinks profile={profile} />
        </div>
      </div>
    </section>
  );
}
