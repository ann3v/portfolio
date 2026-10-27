import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { ProfileLinks } from "@/components/profile-links";
import { SystemVisual } from "@/components/system-visual";

export function Hero() {
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero-main">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">
            <span className="tiny-cross" aria-hidden="true">
              +
            </span>{" "}
            FULL-STACK DEVELOPER · AI-POWERED PRODUCTS
          </p>
          <h1 id="hero-title">
            Ideas into
            <br />
            software.
            <br />
            <span className="hero-soft">Built with intent.</span>
          </h1>
          <p className="hero-description">
            I’m Ardit. I build across web, mobile, backend, and AI — connecting
            the pieces, questioning the details, and making ideas work in the
            real world.
          </p>
          <div className="hero-actions">
            <Link href="#work" className="button button-primary">
              Explore my work
              <ArrowDown size={17} aria-hidden="true" />
            </Link>
            <Link href="#about" className="button button-text">
              A little about me
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <ProfileLinks />
        </div>
        <div className="hero-art">
          <SystemVisual />
          <div className="hero-art-caption">
            <span className="status-dot" />
            <span>THE WHOLE SYSTEM, NOT JUST THE SURFACE.</span>
          </div>
        </div>
      </div>
      <div className="hero-footnote">
        <div>
          <span className="status-dot" />
          <span>Open to opportunities</span>
        </div>
        <p>
          Remote worldwide <span>↗</span> On-site across Europe
        </p>
        <span className="hero-scroll">
          SCROLL TO EXPLORE <ArrowDown size={12} aria-hidden="true" />
        </span>
      </div>
      <span className="sr-only">{portfolio.role}</span>
    </section>
  );
}
