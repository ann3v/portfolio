import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main id="main-content" className="container not-found">
      <p className="eyebrow">404 / A WRONG TURN</p>
      <h1>
        This page isn’t
        <br />
        part of the system.
      </h1>
      <p>The work you’re looking for may have moved. Let’s get you back.</p>
      <Link className="button button-primary" href="/#work">
        <ArrowLeft size={16} aria-hidden="true" />
        Back to selected work
      </Link>
    </main>
  );
}
