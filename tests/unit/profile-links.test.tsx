import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ProfileLinks, type PublicProfile } from "@/components/profile-links";

const publicProfile: PublicProfile = {
  github: "https://github.com/ann3v",
  linkedin: "https://www.linkedin.com/in/ardit-avdiu-397975365/",
};

describe("public profile links", () => {
  it("shows the public profiles and omits unconfigured contact and resume links", () => {
    render(<ProfileLinks profile={publicProfile} />);
    expect(screen.getAllByRole("link")).toHaveLength(2);
    expect(screen.getByRole("link", { name: /github/i })).toHaveAttribute(
      "href",
      publicProfile.github,
    );
    expect(screen.getByRole("link", { name: /linkedin/i })).toHaveAttribute(
      "href",
      publicProfile.linkedin,
    );
    expect(
      screen.queryByRole("link", { name: /email/i }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: /résumé/i }),
    ).not.toBeInTheDocument();
  });

  it("renders only explicitly configured email and resume destinations", () => {
    render(
      <ProfileLinks
        profile={{
          ...publicProfile,
          contactEmail: "public@example.com",
          resumeUrl: "/resume/ardit-avdiu.pdf",
        }}
      />,
    );
    expect(screen.getByRole("link", { name: /email/i })).toHaveAttribute(
      "href",
      "mailto:public@example.com",
    );
    expect(screen.getByRole("link", { name: /résumé/i })).toHaveAttribute(
      "href",
      "/resume/ardit-avdiu.pdf",
    );
  });

  it("labels new tabs and protects their opener", () => {
    render(<ProfileLinks profile={publicProfile} />);
    for (const link of screen.getAllByRole("link")) {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", expect.stringContaining("noopener"));
      expect(link).toHaveAttribute(
        "rel",
        expect.stringContaining("noreferrer"),
      );
      expect(link).toHaveAccessibleName(/opens in a new tab/i);
    }
  });
});
