interface EmbossedNavyReliefProps {
  idPrefix?: string;
  className?: string;
}

/**
 * Tone-on-tone blind-embossed navy paper relief combining ceremonial laurel
 * foliage and subtle geometric Systems Engineering nodes.
 */
export function EmbossedNavyRelief({
  idPrefix = 'emboss',
  className = '',
}: EmbossedNavyReliefProps) {
  const shadowColor = 'rgba(1, 7, 22, 0.58)';
  const highlightColor = 'rgba(59, 130, 246, 0.22)';

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 600 900"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
    >
      <defs>
        <filter id={`${idPrefix}-relief`} x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="-1" dy="-1" stdDeviation="0.9" floodColor={highlightColor} />
          <feDropShadow dx="1.5" dy="1.8" stdDeviation="1.2" floodColor={shadowColor} />
        </filter>
      </defs>

      <g filter={`url(#${idPrefix}-relief)`}>
        {/* Left Side Embossed Botanical & Geometric Cluster */}
        <g stroke="#082458" strokeWidth="1.5" fill="#061D48" fillOpacity="0.55">
          {/* Flowing Stem */}
          <path
            d="M-10 300 C48 335, 92 395, 118 465 C140 525, 112 605, 45 675"
            fill="none"
            stroke="#0A2B66"
            strokeWidth="2.2"
          />
          {/* Embossed Petals / Blossom 1 */}
          <g transform="translate(68, 392) rotate(-18)">
            <ellipse cx="0" cy="-22" rx="11" ry="20" />
            <ellipse cx="21" cy="-7" rx="11" ry="20" transform="rotate(72)" />
            <ellipse cx="13" cy="18" rx="11" ry="20" transform="rotate(144)" />
            <ellipse cx="-13" cy="18" rx="11" ry="20" transform="rotate(216)" />
            <ellipse cx="-21" cy="-7" rx="11" ry="20" transform="rotate(288)" />
            <circle cx="0" cy="0" r="8" fill="#0A2B66" />
          </g>
          {/* Laurel Leaves & Circuit Nodes */}
          <path d="M22 332 C42 320, 65 326, 70 344 C52 350, 34 344, 22 332 Z" />
          <path d="M105 448 C128 438, 150 448, 152 468 C132 472, 114 462, 105 448 Z" />
          <path d="M88 532 C62 522, 42 532, 44 552 C64 556, 80 546, 88 532 Z" />
          <path d="M92 595 C115 588, 134 600, 132 618 C112 622, 98 610, 92 595 Z" />
          <path d="M35 642 C14 630, -4 640, -2 658 C18 662, 28 654, 35 642 Z" />

          {/* Subtle Embossed Systems Trace Lines */}
          <path d="M12 245 L46 278 L46 312" fill="none" stroke="#0B2E70" strokeWidth="1.3" />
          <circle cx="46" cy="314" r="3.5" fill="#0B2E70" />
          <path d="M122 496 L158 518 L158 552" fill="none" stroke="#0B2E70" strokeWidth="1.3" />
          <circle cx="158" cy="554" r="3.5" fill="#0B2E70" />
        </g>

        {/* Top-Right Embossed Botanical & Geometric Cluster */}
        <g stroke="#082458" strokeWidth="1.5" fill="#061D48" fillOpacity="0.55">
          <path
            d="M525 18 C488 78, 466 135, 480 198 C495 262, 548 310, 610 345"
            fill="none"
            stroke="#0A2B66"
            strokeWidth="2.2"
          />
          <g transform="translate(498, 148) rotate(22)">
            <ellipse cx="0" cy="-20" rx="10" ry="18" />
            <ellipse cx="19" cy="-6" rx="10" ry="18" transform="rotate(72)" />
            <ellipse cx="12" cy="16" rx="10" ry="18" transform="rotate(144)" />
            <ellipse cx="-12" cy="16" rx="10" ry="18" transform="rotate(216)" />
            <ellipse cx="-19" cy="-6" rx="10" ry="18" transform="rotate(288)" />
            <circle cx="0" cy="0" r="7.5" fill="#0A2B66" />
          </g>
          <path d="M472 78 C448 68, 430 78, 434 96 C452 100, 466 90, 472 78 Z" />
          <path d="M530 198 C554 188, 574 198, 572 216 C552 220, 538 210, 530 198 Z" />
          <path d="M512 268 C488 262, 474 274, 478 292 C496 294, 508 282, 512 268 Z" />

          {/* Geometric Node Trace */}
          <path d="M430 120 L398 145 L398 176" fill="none" stroke="#0B2E70" strokeWidth="1.3" />
          <circle cx="398" cy="178" r="3.5" fill="#0B2E70" />
        </g>

        {/* Bottom-Right Embossed Cluster */}
        <g stroke="#082458" strokeWidth="1.5" fill="#061D48" fillOpacity="0.55">
          <path
            d="M610 560 C552 605, 512 668, 502 742 C494 795, 518 852, 558 905"
            fill="none"
            stroke="#0A2B66"
            strokeWidth="2.2"
          />
          <g transform="translate(528, 706) rotate(-14)">
            <ellipse cx="0" cy="-21" rx="10.5" ry="19" />
            <ellipse cx="20" cy="-6" rx="10.5" ry="19" transform="rotate(72)" />
            <ellipse cx="12" cy="17" rx="10.5" ry="19" transform="rotate(144)" />
            <ellipse cx="-12" cy="17" rx="10.5" ry="19" transform="rotate(216)" />
            <ellipse cx="-20" cy="-6" rx="10.5" ry="19" transform="rotate(288)" />
            <circle cx="0" cy="0" r="8" fill="#0A2B66" />
          </g>
          <path d="M542 630 C518 622, 502 634, 506 652 C524 654, 536 644, 542 630 Z" />
          <path d="M506 778 C482 770, 466 782, 470 800 C488 802, 500 792, 506 778 Z" />
          <path d="M548 824 C570 816, 588 828, 584 846 C566 848, 554 838, 548 824 Z" />
        </g>

        {/* Top-Left Subtle Corner Relief */}
        <g stroke="#082458" strokeWidth="1.4" fill="#061D48" fillOpacity="0.5">
          <path d="M88 18 C118 68, 128 118, 108 168" fill="none" stroke="#0A2B66" strokeWidth="2" />
          <path d="M116 96 C140 88, 158 100, 154 118 C136 120, 122 110, 116 96 Z" />
          <path d="M98 134 C74 128, 58 140, 62 158 C80 160, 92 148, 98 134 Z" />
        </g>
      </g>
    </svg>
  );
}
