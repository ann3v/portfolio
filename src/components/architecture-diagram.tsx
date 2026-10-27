import { ArrowDown, ArrowRight } from "lucide-react";
import type { DiagramStep } from "@/data/portfolio";

export function ArchitectureDiagram({
  steps,
  label,
}: {
  steps: DiagramStep[];
  label: string;
}) {
  return (
    <figure className="architecture-diagram" aria-label={label}>
      <figcaption className="diagram-label">
        <span className="diagram-live-dot" aria-hidden="true" />
        {label}
        <span>REQUEST → RESULT</span>
      </figcaption>
      <ol className="architecture-steps">
        {steps.map((step, index) => (
          <li key={step.title}>
            <span className="architecture-step-number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <strong>{step.title}</strong>
            <p>{step.description}</p>
            {index < steps.length - 1 && (
              <span className="architecture-arrow" aria-hidden="true">
                <ArrowRight className="flow-right" size={16} />
                <ArrowDown className="flow-down" size={16} />
              </span>
            )}
          </li>
        ))}
      </ol>
    </figure>
  );
}
