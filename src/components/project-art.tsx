import "@/app/artwork.css";

function KosvibeArt() {
  return (
    <svg viewBox="0 0 680 420" fill="none">
      <text className="art-caption" x="30" y="35">
        PRODUCT ARCHITECTURE
      </text>
      <text className="art-caption art-caption--quiet" x="615" y="35">
        01 / 03
      </text>
      <g className="map-contours">
        {Array.from({ length: 10 }, (_, index) => (
          <path
            key={index}
            transform={`translate(335 224) scale(${1 - index * 0.073}) translate(-335 -224)`}
            d="M106 120C134 58 229 58 283 86c53 28 83-27 156-1 40 14 54 51 103 71 69 28 61 82 20 106-31 18-62 17-86 49-44 60-125 59-168 22-35-30-95 25-158-7-56-27-76-73-46-115 20-28-17-50 2-91Z"
          />
        ))}
      </g>
      <path className="art-route" d="M194 182h81l53 82h109l57-102" />
      <path
        className="art-route art-route--quiet"
        strokeDasharray="3 6"
        d="m194 182 23 106 111-24m166-102-119-36-100 56"
      />
      <g className="map-pin">
        <circle cx="194" cy="182" r="18" />
        <circle cx="194" cy="182" r="5" />
      </g>
      <g className="map-pin">
        <circle cx="328" cy="264" r="18" />
        <circle cx="328" cy="264" r="5" />
      </g>
      <g className="map-pin">
        <circle cx="494" cy="162" r="18" />
        <circle cx="494" cy="162" r="5" />
      </g>
      <g className="art-small-node">
        <circle cx="217" cy="288" r="4" />
        <circle cx="375" cy="126" r="4" />
        <circle cx="437" cy="264" r="4" />
      </g>
      <g className="art-label-pill">
        <rect x="142" y="135" width="105" height="26" rx="13" />
        <text x="194" y="152" textAnchor="middle">
          DISCOVERY
        </text>
      </g>
      <g className="art-label-pill">
        <rect x="276" y="297" width="105" height="26" rx="13" />
        <text x="328" y="314" textAnchor="middle">
          COMMUNITY
        </text>
      </g>
      <g className="art-label-pill">
        <rect x="446" y="115" width="97" height="26" rx="13" />
        <text x="494" y="132" textAnchor="middle">
          BUSINESS
        </text>
      </g>
      <path className="art-cross" d="M38 361v14m-7-7h14m593-267v14m-7-7h14" />
      <text className="art-caption art-caption--quiet" x="30" y="394">
        LOCAL CONNECTIONS. SHARED POSSIBILITIES.
      </text>
      <path className="art-cross" d="M625 388h25m-5-5 5 5-5 5" />
    </svg>
  );
}

function InterviewArt() {
  return (
    <svg viewBox="0 0 680 420" fill="none">
      <text className="art-caption" x="30" y="35">
        EVALUATION PIPELINE
      </text>
      <text className="art-caption art-caption--quiet" x="615" y="35">
        02 / 03
      </text>
      <circle
        className="ai-orbit ai-orbit--outer"
        cx="340"
        cy="216"
        r="142"
        strokeDasharray="2 8"
      />
      <circle className="ai-orbit" cx="340" cy="216" r="107" />
      <circle className="ai-ring" cx="340" cy="216" r="76" />
      <circle className="ai-ring ai-ring--inner" cx="340" cy="216" r="64" />
      <path
        className="ai-ring-segment"
        d="M272 181a76 76 0 0 1 117-23m25 80a76 76 0 0 1-122 36"
      />
      <g className="ai-core">
        <path d="M340 189v54m-23-40 46 27m-46 0 46-27" />
        <circle cx="340" cy="189" r="3" />
        <circle cx="340" cy="243" r="3" />
        <circle cx="317" cy="203" r="3" />
        <circle cx="363" cy="230" r="3" />
        <circle cx="317" cy="230" r="3" />
        <circle cx="363" cy="203" r="3" />
      </g>
      <path
        className="ai-flow"
        d="M159 216h105m152 0h105M340 120v20m0 152v20"
      />
      <path
        className="ai-flow ai-flow--secondary"
        d="M104 190v-69a23 23 0 0 1 23-23h151m124 0h151a23 23 0 0 1 23 23v69m0 52v69a23 23 0 0 1-23 23H402m-124 0H127a23 23 0 0 1-23-23v-69"
      />
      <g className="ai-box">
        <rect x="48" y="190" width="112" height="52" rx="5" />
        <text x="104" y="211" textAnchor="middle">
          01 / ANSWER
        </text>
        <path d="M89 225h30m-30 4h21" />
      </g>
      <g className="ai-box">
        <rect x="278" y="72" width="124" height="52" rx="5" />
        <text x="340" y="94" textAnchor="middle">
          02 / VALIDATE
        </text>
        <path d="m333 108 5 5 10-10" />
      </g>
      <g className="ai-box">
        <rect x="520" y="190" width="112" height="52" rx="5" />
        <text x="576" y="211" textAnchor="middle">
          03 / EVALUATE
        </text>
        <path d="M564 232v-7m8 7v-11m8 11v-15m8 15v-9" />
      </g>
      <g className="ai-box">
        <rect x="278" y="308" width="124" height="52" rx="5" />
        <text x="340" y="330" textAnchor="middle">
          04 / FEEDBACK
        </text>
        <path d="M325 343h30m-30 4h20" />
      </g>
      <g className="ai-direction">
        <path d="m249 94 4 4-4 4m323 66 4 4 4-4m-149 162-4 4 4 4m-331-72 4-4 4 4" />
      </g>
      <text className="art-caption art-caption--quiet" x="30" y="394">
        FROM RESPONSE TO REFLECTION.
      </text>
      <path className="art-cross" d="M625 388h25m-5-5 5 5-5 5" />
    </svg>
  );
}

function PlannerArt() {
  return (
    <svg viewBox="0 0 680 420" fill="none">
      <text className="art-caption" x="30" y="35">
        APPLICATION ARCHITECTURE
      </text>
      <text className="art-caption art-caption--quiet" x="615" y="35">
        03 / 03
      </text>
      <path
        className="planner-grid"
        d="m80 265 260-130 260 130-260 130L80 265Zm65 32 260-130m-195 163 260-130m-195 163 260-130M145 233l260 130M210 200l260 130M275 168l260 130"
      />
      <path
        className="planner-route"
        strokeDasharray="4 5"
        d="m196 229 144-71 144 71-144 74-144-74Z"
      />
      <g className="planner-device">
        <rect x="165" y="151" width="62" height="107" rx="10" />
        <path d="M186 159h20m-19 90h18" />
        <rect x="174" y="171" width="44" height="61" rx="3" />
        <path
          className="planner-detail"
          d="M183 185h26m-26 10h19m-19 10h26m-26 10h14"
        />
      </g>
      <g className="planner-server">
        <path d="m340 109 47 26v55l-47 26-47-26v-55l47-26Z" />
        <path d="m293 135 47 27 47-27m-47 27v54" />
        <path
          className="planner-detail"
          d="m306 159 20 11m-20-2 20 11m29-8 18-10m-18 19 18-10"
        />
        <path className="planner-detail" d="m330 136 10-6 10 6-10 6-10-6Z" />
      </g>
      <g className="planner-data">
        <path d="M449 188v52c0 11 70 11 70 0v-52" />
        <ellipse cx="484" cy="188" rx="35" ry="12" />
        <path d="M449 205c0 16 70 16 70 0m-70 17c0 16 70 16 70 0" />
      </g>
      <g className="planner-label">
        <text x="196" y="289" textAnchor="middle">
          MOBILE
        </text>
        <text x="340" y="247" textAnchor="middle">
          API
        </text>
        <text x="484" y="280" textAnchor="middle">
          DATA
        </text>
      </g>
      <g className="planner-route-node">
        <circle cx="340" cy="303" r="4" />
        <circle cx="196" cy="229" r="3" />
        <circle cx="484" cy="229" r="3" />
      </g>
      <text className="art-caption art-caption--quiet" x="30" y="394">
        A CONNECTED LEARNING EXPERIENCE.
      </text>
      <path className="art-cross" d="M625 388h25m-5-5 5 5-5 5" />
    </svg>
  );
}

export function ProjectArt({
  slug,
  className = "",
}: {
  slug: string;
  className?: string;
}) {
  const kind =
    slug === "kosvibe"
      ? "kosvibe"
      : slug.includes("interview")
        ? "interview"
        : "planner";
  return (
    <div
      className={`project-art project-art--${kind} ${className}`}
      aria-hidden="true"
    >
      {kind === "kosvibe" ? (
        <KosvibeArt />
      ) : kind === "interview" ? (
        <InterviewArt />
      ) : (
        <PlannerArt />
      )}
    </div>
  );
}
