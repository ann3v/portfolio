import { ArrowUpRight, FileText, Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/brand-icons";
import { portfolio } from "@/data/portfolio";

export type PublicProfile = {
  github: string;
  linkedin: string;
  contactEmail?: string;
  resumeUrl?: string;
};

export function ProfileLinks({
  profile = portfolio,
  className = "",
}: {
  profile?: PublicProfile;
  className?: string;
}) {
  return (
    <div className={`profile-links ${className}`}>
      <a href={profile.github} target="_blank" rel="noopener noreferrer">
        <Github size={16} aria-hidden="true" />
        GitHub
        <ArrowUpRight size={13} aria-hidden="true" />
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
      <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
        <Linkedin size={16} aria-hidden="true" />
        LinkedIn
        <ArrowUpRight size={13} aria-hidden="true" />
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
      {profile.contactEmail && (
        <a href={`mailto:${profile.contactEmail}`}>
          <Mail size={16} aria-hidden="true" />
          Email: {profile.contactEmail}
        </a>
      )}
      {profile.resumeUrl && (
        <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
          <FileText size={16} aria-hidden="true" />
          Résumé<span className="sr-only"> (opens in a new tab)</span>
        </a>
      )}
    </div>
  );
}
