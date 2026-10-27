import { portfolio } from "@/data/portfolio";

export function Skills() {
  return (
    <section
      id="skills"
      className="skills section container"
      aria-labelledby="skills-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">04 / THE TOOLKIT</p>
          <h2 id="skills-title">
            Tools for the
            <br />
            <span className="text-muted">whole picture.</span>
          </h2>
        </div>
        <p className="section-intro">
          Used in the projects above.
          <br />
          Always learning what comes next.
        </p>
      </div>
      <div className="skills-grid">
        {portfolio.skills.map((group, index) => (
          <div className="skill-group" key={group.title}>
            <span className="skill-number">0{index + 1}</span>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
