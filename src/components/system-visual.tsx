import "@/app/artwork.css";

export function SystemVisual({ className = "" }: { className?: string }) {
  return (
    <div className={`system-visual ${className}`} aria-hidden="true">
      <svg viewBox="0 0 560 470" fill="none">
        <path
          className="system-guide"
          d="M33 56V31H58M502 31H527V56M33 414V439H58M502 439H527V414"
        />
        <path
          className="system-guide"
          strokeDasharray="2 8"
          d="M260 25V419M62 228H507"
        />
        <ellipse className="system-orbit" cx="260" cy="240" rx="205" ry="178" />
        <ellipse
          className="system-orbit"
          cx="260"
          cy="240"
          rx="174"
          ry="178"
          transform="rotate(-32 260 240)"
        />
        <path
          className="system-thread"
          strokeDasharray="3 6"
          d="M95 134V332M425 134V332M260 208V405"
        />
        <g className="system-plane system-plane--bottom">
          <path d="m260 256 165 76-165 76-165-76 165-76Z" />
          <path
            className="system-inner"
            d="m260 274 126 58-126 58-126-58 126-58Z"
          />
          <path
            className="system-trace"
            d="m206 332 54-25 54 25-54 25-54-25Z"
          />
          <path
            className="system-trace"
            d="m233 319 54 26m-54 0 54-26M260 307v50"
          />
          <circle className="system-node" cx="260" cy="332" r="5" />
        </g>
        <g className="system-plane system-plane--middle">
          <path d="m260 157 165 76-165 76-165-76 165-76Z" />
          <path
            className="system-inner"
            d="m260 175 126 58-126 58-126-58 126-58Z"
          />
          <path
            className="system-trace"
            d="m192 233 68-31 68 31-68 31-68-31Z"
          />
          <path className="system-trace" d="M192 233h136m-68-31v62" />
          <circle className="system-node" cx="192" cy="233" r="3" />
          <circle className="system-node" cx="260" cy="202" r="3" />
          <circle className="system-node" cx="328" cy="233" r="3" />
          <circle className="system-node" cx="260" cy="264" r="3" />
          <circle className="system-node" cx="260" cy="233" r="5" />
        </g>
        <g className="system-plane system-plane--top">
          <path d="m260 58 165 76-165 76-165-76 165-76Z" />
          <path
            className="system-inner"
            d="m260 76 126 58-126 58-126-58 126-58Z"
          />
          <path
            className="system-trace"
            d="m227 113 34-16 65 30-34 16-65-30Zm-38 18 26-12 37 17-26 12-37-17Zm49 22 26-12 26 12-26 12-26-12Z"
          />
          <path
            className="system-trace"
            d="m298 151 17-8m-27 13 17-8m-27 13 17-8"
          />
        </g>
        <path
          className="system-connector"
          d="M425 134h25m-25 99h25m-25 99h25"
        />
        <circle className="system-node" cx="425" cy="134" r="3" />
        <circle className="system-node" cx="425" cy="233" r="3" />
        <circle className="system-node" cx="425" cy="332" r="3" />
        <g className="system-label">
          <text x="459" y="131">
            01
          </text>
          <text x="459" y="148" className="system-label-name">
            PRODUCT
          </text>
          <text x="459" y="230">
            02
          </text>
          <text x="459" y="247" className="system-label-name">
            SYSTEMS
          </text>
          <text x="459" y="329">
            03
          </text>
          <text x="459" y="346" className="system-label-name">
            INTELLIGENCE
          </text>
        </g>
        <circle className="system-satellite" cx="63" cy="208" r="3" />
        <circle className="system-satellite" cx="346" cy="78" r="3" />
        <text className="system-footer" x="48" y="435">
          DESIGNED TO WORK TOGETHER
        </text>
        <path className="system-connector" d="M435 427h20m-10-10v20" />
      </svg>
    </div>
  );
}
