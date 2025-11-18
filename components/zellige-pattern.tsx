export function ZelligePattern({ className = "", opacity = "opacity-20" }: { className?: string; opacity?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={`${className} ${opacity}`} preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="zellige" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          {/* Main star center */}
          <polygon
            points="50,20 65,40 85,40 70,55 80,75 50,60 20,75 30,55 15,40 35,40"
            fill="currentColor"
            opacity="0.6"
          />

          {/* Surrounding circles and geometric elements */}
          <circle cx="50" cy="50" r="12" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
          <circle cx="50" cy="50" r="6" fill="currentColor" opacity="0.7" />

          {/* Corner rotated squares (traditional zellige motif) */}
          <g opacity="0.5">
            <rect x="8" y="8" width="12" height="12" fill="currentColor" transform="rotate(45 14 14)" />
            <rect x="80" y="8" width="12" height="12" fill="currentColor" transform="rotate(45 86 14)" />
            <rect x="8" y="80" width="12" height="12" fill="currentColor" transform="rotate(45 14 86)" />
            <rect x="80" y="80" width="12" height="12" fill="currentColor" transform="rotate(45 86 86)" />
          </g>

          {/* Connecting lines */}
          <line x1="50" y1="20" x2="50" y2="0" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
          <line x1="50" y1="80" x2="50" y2="100" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
          <line x1="20" y1="50" x2="0" y2="50" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
          <line x1="80" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
        </pattern>
      </defs>
      <rect width="200" height="200" fill="url(#zellige)" />
    </svg>
  )
}
