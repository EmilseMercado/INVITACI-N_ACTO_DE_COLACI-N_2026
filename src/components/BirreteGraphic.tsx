import { motion } from 'motion/react';

interface BirreteGraphicProps {
  size?: 'lg' | 'md';
  isOpening?: boolean;
  interactive?: boolean;
  onClick?: () => void;
}

export function BirreteGraphic({
  size = 'lg',
  isOpening = false,
  interactive = false,
  onClick,
}: BirreteGraphicProps) {
  const dimensions =
    size === 'lg'
      ? 'w-[280px] sm:w-[340px] md:w-[380px] h-auto'
      : 'w-[220px] sm:w-[260px] md:w-[290px] h-auto';

  return (
    <motion.div
      className={`relative inline-flex items-center justify-center select-none ${
        interactive ? 'cursor-pointer' : ''
      }`}
      onClick={onClick}
      role={interactive ? 'button' : undefined}
      tabIndex={interactive ? 0 : undefined}
      aria-label={interactive ? 'Abrir invitación de colación de grado' : undefined}
      onKeyDown={
        interactive && onClick
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onClick();
              }
            }
          : undefined
      }
      initial={{ opacity: 0, y: -22, scale: 0.94 }}
      animate={
        isOpening
          ? {
              opacity: 0,
              y: -52,
              scale: 1.09,
              filter: 'drop-shadow(0 0 36px rgba(237, 208, 130, 0.75))',
            }
          : {
              opacity: 1,
              y: 0,
              scale: 1,
              filter: 'drop-shadow(0 20px 34px rgba(0, 7, 24, 0.72))',
            }
      }
      whileHover={
        interactive && !isOpening
          ? {
              y: -6,
              scale: 1.025,
              transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] },
            }
          : undefined
      }
      whileTap={interactive && !isOpening ? { scale: 0.98 } : undefined}
      transition={{
        duration: isOpening ? 0.75 : 0.9,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {/* Ambient radial gold/blue aura behind cap */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-4 rounded-full bg-[radial-gradient(circle,rgba(237,208,130,0.22)_0%,rgba(20,73,166,0.2)_45%,transparent_75%)] blur-xl"
      />

      <svg
        viewBox="0 0 440 245"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${dimensions} relative z-10 overflow-visible`}
      >
        <defs>
          {/* Metallic Gold Gradient */}
          <linearGradient id="birreteGoldStroke" x1="20" y1="20" x2="420" y2="210" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#9B7321" />
            <stop offset="24%" stopColor="#EDD082" />
            <stop offset="50%" stopColor="#FBF3D5" />
            <stop offset="76%" stopColor="#D6AD49" />
            <stop offset="100%" stopColor="#8F691A" />
          </linearGradient>

          {/* Mortarboard Top Dark Navy Surface */}
          <linearGradient id="mortarboardSurface" x1="220" y1="16" x2="220" y2="146" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0D1E46" />
            <stop offset="52%" stopColor="#040C20" />
            <stop offset="100%" stopColor="#071535" />
          </linearGradient>

          {/* Crown Band Intense Royal Blue */}
          <linearGradient id="crownRoyalBlue" x1="110" y1="115" x2="330" y2="195" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#04153B" />
            <stop offset="28%" stopColor="#0B2E74" />
            <stop offset="50%" stopColor="#174EB5" />
            <stop offset="72%" stopColor="#0B2E74" />
            <stop offset="100%" stopColor="#04153B" />
          </linearGradient>

          {/* Silver/White Cord & Tassel */}
          <linearGradient id="tasselSilver" x1="340" y1="150" x2="368" y2="215" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="55%" stopColor="#E2E8F0" />
            <stop offset="100%" stopColor="#B8C4D4" />
          </linearGradient>

          {/* Subtle UPDS Lettering Gradient */}
          <linearGradient id="updsSilver" x1="220" y1="138" x2="220" y2="178" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="70%" stopColor="#E2E8F0" />
            <stop offset="100%" stopColor="#CBD5E1" />
          </linearGradient>

          <filter id="crownShadow" x="-15%" y="-15%" width="130%" height="140%">
            <feDropShadow dx="0" dy="8" stdDeviation="7" floodColor="#010716" floodOpacity="0.65" />
          </filter>
          <filter id="textShadowSoft" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#020B24" floodOpacity="0.8" />
          </filter>
        </defs>

        {/* Crown Band (Base of Cap) */}
        <g filter="url(#crownShadow)">
          <path
            d="M114 108 C114 108 118 168 122 184 C162 204 195 212 220 218 C245 212 278 204 318 184 C322 168 326 108 326 108 Z"
            fill="url(#crownRoyalBlue)"
            stroke="url(#birreteGoldStroke)"
            strokeWidth="2.4"
            strokeLinejoin="round"
          />

          {/* Subtle vertical center fold sheen on crown */}
          <path
            d="M220 120 L220 216"
            stroke="rgba(255,255,255,0.14)"
            strokeWidth="1.2"
          />

          {/* Stitched dashed seam along bottom curve matching reference */}
          <path
            d="M123 176 C162 195 194 203 220 209 C246 203 278 195 317 176"
            stroke="rgba(203, 213, 225, 0.45)"
            strokeWidth="1.2"
            strokeDasharray="4 4"
            fill="none"
          />

          {/* UPDS Insignia on the Royal Blue Band */}
          <text
            x="220"
            y="172"
            textAnchor="middle"
            fill="url(#updsSilver)"
            filter="url(#textShadowSoft)"
            style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontWeight: 700,
              fontStyle: 'italic',
              fontSize: '33px',
              letterSpacing: '0.07em',
            }}
          >
            UPDS
          </text>
        </g>

        {/* Mortarboard Top Diamond */}
        <g>
          {/* Base shadow wedge beneath board */}
          <path
            d="M22 82 L220 148 L418 82 L220 140 Z"
            fill="#010715"
            opacity="0.85"
          />

          {/* Main Diamond Board */}
          <path
            d="M220 16 L422 80 L220 144 L18 80 Z"
            fill="url(#mortarboardSurface)"
            stroke="url(#birreteGoldStroke)"
            strokeWidth="3.2"
            strokeLinejoin="round"
          />

          {/* Inner Royal Blue Fine Hairline */}
          <path
            d="M220 25 L401 80 L220 135 L39 80 Z"
            fill="none"
            stroke="#1D4ED8"
            strokeOpacity="0.45"
            strokeWidth="1.1"
          />

          {/* Subtle Top Specular Glint */}
          <path
            d="M220 18 L380 70 L220 96 L60 70 Z"
            fill="rgba(255,255,255,0.035)"
          />
        </g>

        {/* Center Gold Eyelet Button */}
        <g>
          <ellipse
            cx="220"
            cy="79"
            rx="12.5"
            ry="7.5"
            fill="#0A1838"
            stroke="url(#birreteGoldStroke)"
            strokeWidth="2.2"
          />
          <ellipse cx="220" cy="79" rx="5.5" ry="3.4" fill="url(#birreteGoldStroke)" />
        </g>

        {/* Hanging Cord & Gently Swaying Tassel */}
        <motion.g
          style={{ transformOrigin: '351px 86px' }}
          animate={
            isOpening
              ? { rotate: -14 }
              : {
                  rotate: [0, 2.2, -1.8, 0],
                }
          }
          transition={
            isOpening
              ? { duration: 0.5 }
              : {
                  duration: 5.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }
          }
        >
          {/* Cord extending from center button to right edge */}
          <path
            d="M223 79 Q290 83 351 86"
            stroke="url(#tasselSilver)"
            strokeWidth="3.6"
            strokeLinecap="round"
            fill="none"
          />
          {/* Vertical hanging thread from board edge */}
          <path
            d="M351 86 L351 146"
            stroke="#D6E0EE"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* Gold tassel collar */}
          <rect
            x="344"
            y="144"
            width="14"
            height="6.5"
            rx="2"
            fill="url(#birreteGoldStroke)"
          />
          {/* Tassel strands */}
          <path
            d="M344.5 150.5 L337 204 L365 204 L357.5 150.5 Z"
            fill="url(#tasselSilver)"
          />
          <path
            d="M348 151 L345 204 M351 151 L351 204 M354 151 L357 204"
            stroke="rgba(148, 163, 184, 0.55)"
            strokeWidth="0.9"
          />
        </motion.g>
      </svg>
    </motion.div>
  );
}
