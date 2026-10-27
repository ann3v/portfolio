import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <Link href="/" className="footer-name">
          {portfolio.name}
          <span>.</span>
        </Link>
        <p>Thoughtfully built. Always improving.</p>
        <a href="#top" className="back-to-top">
          Back to top <ArrowUp size={15} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
