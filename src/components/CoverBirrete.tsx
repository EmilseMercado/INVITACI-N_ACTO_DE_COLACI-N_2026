import { motion } from 'motion/react';

interface CoverBirreteProps {
  isOpening?: boolean;
  interactive?: boolean;
  onClick?: () => void;
  svgClassName?: string;
}

export function CoverBirrete({
  isOpening = false,
  interactive = true,
  onClick,
  svgClassName = 'w-[280px] sm:w-[335px] md:w-[365px]',
}: CoverBirreteProps) {
  return (
    <motion.div
      role={interactive ? 'button' : undefined}
      tabIndex={interactive ? 0 : undefined}
      aria-label={interactive ? 'Toca el birrete para abrir la invitación' : undefined}
      onClick={interactive ? onClick : undefined}
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
      className={`group relative inline-flex items-center justify-center select-none rounded-2xl ${
        interactive
          ? 'cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-white'
          : 'pointer-events-none'
      }`}
      initial={{ opacity: 0, y: -14, scale: 0.94 }}
      animate={
        isOpening
          ? {
              opacity: 0,
              y: -44,
              scale: 1.12,
              transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
            }
          : {
              opacity: 1,
              y: [0, -6, 0],
              rotate: interactive ? 0 : [-2.5, 2.5, -2.5],
              scale: 1,
              transition: {
                opacity: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
                scale: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
                y: { duration: 4.2, repeat: Infinity, ease: 'easeInOut' },
                rotate: { duration: 5.5, repeat: Infinity, ease: 'easeInOut' },
              },
            }
      }
      whileHover={
        interactive && !isOpening
          ? {
              scale: 1.04,
              y: -8,
              transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] },
            }
          : undefined
      }
      whileTap={interactive && !isOpening ? { scale: 0.97 } : undefined}
    >
      {/* Subtle Ambient Aura Behind Cap */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-4 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.22)_0%,rgba(37,99,235,0.3)_45%,transparent_72%)] blur-2xl transition-opacity duration-300 group-hover:opacity-100"
      />

      <svg
        viewBox="0 0 440 245"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`relative z-10 h-auto overflow-visible drop-shadow-[0_22px_34px_rgba(0,4,14,0.85)] ${svgClassName}`}
      >
        <defs>
          {/* Crisp White Border Gradient */}
          <linearGradient id="coverWhiteStroke" x1="20" y1="20" x2="420" y2="210" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#F8FAFC" />
            <stop offset="100%" stopColor="#E2E8F0" />
          </linearGradient>

          {/* Mortarboard Top Dark Navy-Blue Surface */}
          <linearGradient id="coverMortarboardBlue" x1="220" y1="16" x2="220" y2="146" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#12306E" />
            <stop offset="52%" stopColor="#061433" />
            <stop offset="100%" stopColor="#0A2152" />
          </linearGradient>

          {/* Crown Band Intense Royal Blue */}
          <linearGradient id="coverCrownRoyalBlue" x1="110" y1="115" x2="330" y2="195" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#04153B" />
            <stop offset="28%" stopColor="#0B2E74" />
            <stop offset="50%" stopColor="#1A56C4" />
            <stop offset="72%" stopColor="#0B2E74" />
            <stop offset="100%" stopColor="#04153B" />
          </linearGradient>

          {/* White/Silver Cord & Tassel */}
          <linearGradient id="coverTasselWhite" x1="340" y1="150" x2="368" y2="215" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="55%" stopColor="#F1F5F9" />
            <stop offset="100%" stopColor="#CBD5E1" />
          </linearGradient>

          <filter id="coverCrownShadow" x="-15%" y="-15%" width="130%" height="140%">
            <feDropShadow dx="0" dy="8" stdDeviation="7" floodColor="#010716" floodOpacity="0.65" />
          </filter>
          <filter id="coverTextShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#020B24" floodOpacity="0.85" />
          </filter>
        </defs>

        {/* Crown Band (Pointed Royal-Blue Base with White Borders) */}
        <g filter="url(#coverCrownShadow)">
          <path
            d="M114 108 C114 108 118 168 122 184 C162 204 195 212 220 218 C245 212 278 204 318 184 C322 168 326 108 326 108 Z"
            fill="url(#coverCrownRoyalBlue)"
            stroke="url(#coverWhiteStroke)"
            strokeWidth="2.8"
            strokeLinejoin="round"
          />

          {/* Subtle vertical center fold sheen on crown */}
          <path
            d="M220 120 L220 216"
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="1.2"
          />

          {/* Stitched dashed seam along bottom curve */}
          <path
            d="M123 176 C162 195 194 203 220 209 C246 203 278 195 317 176"
            stroke="rgba(255, 255, 255, 0.55)"
            strokeWidth="1.2"
            strokeDasharray="4 4"
            fill="none"
          />

          {/* UPDS Insignia on the Royal Blue Band */}
          <text
            x="220"
            y="172"
            textAnchor="middle"
            fill="#FFFFFF"
            filter="url(#coverTextShadow)"
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

        {/* Mortarboard Top Diamond with Crisp White Borders */}
        <g>
          {/* Base shadow wedge beneath board */}
          <path
            d="M22 82 L220 148 L418 82 L220 140 Z"
            fill="#010715"
            opacity="0.82"
          />

          {/* Main Diamond Board */}
          <path
            d="M220 16 L422 80 L220 144 L18 80 Z"
            fill="url(#coverMortarboardBlue)"
            stroke="url(#coverWhiteStroke)"
            strokeWidth="3.4"
            strokeLinejoin="round"
          />

          {/* Inner Royal Blue Fine Hairline */}
          <path
            d="M220 25 L401 80 L220 135 L39 80 Z"
            fill="none"
            stroke="#60A5FA"
            strokeOpacity="0.45"
            strokeWidth="1.1"
          />

          {/* Subtle Top Specular Glint */}
          <path
            d="M220 18 L380 70 L220 96 L60 70 Z"
            fill="rgba(255,255,255,0.05)"
          />
        </g>

        {/* Center Eyelet Button (White Border) */}
        <g>
          <ellipse
            cx="220"
            cy="79"
            rx="12.5"
            ry="7.5"
            fill="#0A2152"
            stroke="#FFFFFF"
            strokeWidth="2.2"
          />
          <ellipse cx="220" cy="79" rx="5.5" ry="3.4" fill="#FFFFFF" />
        </g>

        {/* Hanging Cord & Gently Swaying Tassel (La colita con movimiento) */}
        <motion.g
          style={{ transformOrigin: '351px 86px' }}
          animate={
            isOpening
              ? { rotate: -18 }
              : {
                  rotate: [-6, 6, -6],
                }
          }
          transition={
            isOpening
              ? { duration: 0.45 }
              : {
                  duration: 2.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }
          }
        >
          {/* Cord extending from center button to right edge */}
          <path
            d="M223 79 Q290 83 351 86"
            stroke="url(#coverTasselWhite)"
            strokeWidth="3.6"
            strokeLinecap="round"
            fill="none"
          />
          {/* Vertical hanging thread from board edge */}
          <path
            d="M351 86 L351 146"
            stroke="#FFFFFF"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          {/* White/Silver tassel collar */}
          <rect
            x="344"
            y="144"
            width="14"
            height="6.5"
            rx="2"
            fill="#FFFFFF"
            stroke="#93C5FD"
            strokeWidth="1"
          />
          {/* Tassel strands with subtle secondary sway */}
          <motion.g
            style={{ transformOrigin: '351px 150.5px' }}
            animate={
              isOpening
                ? { rotate: -10 }
                : {
                    rotate: [3, -4, 3],
                  }
            }
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.25,
            }}
          >
            <path
              d="M344.5 150.5 L336.5 206 L365.5 206 L357.5 150.5 Z"
              fill="url(#coverTasselWhite)"
              stroke="#FFFFFF"
              strokeWidth="0.9"
              strokeLinejoin="round"
            />
            <path
              d="M348 151 L344.5 205 M351 151 L351 206 M354 151 L357.5 205"
              stroke="rgba(30, 64, 175, 0.32)"
              strokeWidth="0.9"
            />
          </motion.g>
        </motion.g>
      </svg>
    </motion.div>
  );
}
