import { Project } from "@/lib/projects";

// Abstract artwork, rather than simulated application screenshots.
export default function ProjectArtwork({ project }: { project: Project }) {
  const spatial = ["livevolume", "singlepass-studio"].includes(project.id);
  const flow = ["synapse-erp", "reliefstream", "voice-agents"].includes(
    project.id,
  );
  return (
    <div
      aria-hidden
      className="absolute inset-0 overflow-hidden"
      style={{
        background: `radial-gradient(ellipse at 65% 30%, ${project.color}20, transparent 65%), #0b1010`,
      }}
    >
      <svg viewBox="0 0 480 300" className="h-full w-full" fill="none">
        {Array.from({ length: 12 }, (_, i) => (
          <path
            key={`grid-${i}`}
            d={`M${i * 44} 0V300 M0 ${i * 30}H480`}
            stroke={project.color}
            strokeOpacity="0.06"
          />
        ))}
        <g stroke={project.color}>
          {spatial ? (
            Array.from({ length: 11 }, (_, i) => (
              <ellipse
                key={i}
                cx="240"
                cy="146"
                rx={30 + i * 9}
                ry={16 + i * 7}
                transform={`rotate(${i * 12} 240 146)`}
                strokeOpacity={0.2 + i * 0.05}
              />
            ))
          ) : flow ? (
            <>
              <path
                d="M100 90H170L240 150H310L380 90 M100 210H170L240 150H310L380 210"
                strokeOpacity="0.55"
              />
              {[100, 240, 380].map((x, i) => (
                <g key={x}>
                  <rect
                    x={x - 24}
                    y={i === 1 ? 126 : 66}
                    width="48"
                    height="48"
                    rx="12"
                    fill={project.color}
                    fillOpacity="0.12"
                  />
                  <circle
                    cx={x}
                    cy={i === 1 ? 150 : 90}
                    r="7"
                    fill={project.color}
                    fillOpacity="0.65"
                  />
                  {i !== 1 && (
                    <rect
                      x={x - 24}
                      y="186"
                      width="48"
                      height="48"
                      rx="12"
                      fill={project.color}
                      fillOpacity="0.12"
                    />
                  )}
                </g>
              ))}
            </>
          ) : (
            <>
              <rect
                x="145"
                y="65"
                width="190"
                height="175"
                rx="22"
                fill={project.color}
                fillOpacity="0.04"
                strokeOpacity="0.35"
              />
              <path
                d="M170 112H310 M170 144H260 M170 176H288 M170 208H235"
                strokeWidth="3"
                strokeOpacity="0.35"
                strokeLinecap="round"
              />
              <circle
                cx="311"
                cy="207"
                r="25"
                fill="#0b1010"
                strokeOpacity="0.8"
              />
              <path
                d="m300 207 8 8 14-17"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </>
          )}
        </g>
        <circle cx="40" cy="267" r="3" fill={project.color} />
        <text
          x="53"
          y="271"
          fill={project.color}
          opacity="0.65"
          fontFamily="monospace"
          fontSize="10"
          letterSpacing="2"
        >
          {project.category.toUpperCase()}
        </text>
      </svg>
    </div>
  );
}
