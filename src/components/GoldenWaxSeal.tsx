import { motion } from 'motion/react';

interface GoldenWaxSealProps {
  isOpening?: boolean;
  onClick: () => void;
}

export function GoldenWaxSeal({ isOpening = false, onClick }: GoldenWaxSealProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      disabled={isOpening}
      aria-label="Toca para abrir la invitación"
      className="group relative flex flex-col items-center justify-center cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-[#fbf3d5] rounded-full"
      initial={{ opacity: 0, scale: 0.88 }}
      animate={
        isOpening
          ? {
              opacity: 0,
              scale: 1.15,
              y: -28,
              transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
            }
          : {
              opacity: 1,
              scale: 1,
              y: 0,
              transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
            }
      }
      whileHover={
        isOpening
          ? undefined
          : {
              scale: 1.05,
              y: -3,
              transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] },
            }
      }
      whileTap={isOpening ? undefined : { scale: 0.96 }}
    >
      {/* Subtle Breathing Golden Halo Behind Wax Seal */}
      <motion.span
        aria-hidden="true"
        animate={
          isOpening
            ? { opacity: 0 }
            : {
                opacity: [0.35, 0.65, 0.35],
                scale: [0.95, 1.06, 0.95],
              }
        }
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute inset-4 rounded-full bg-[radial-gradient(circle,rgba(237,208,130,0.45)_0%,rgba(201,158,58,0.18)_55%,transparent_75%)] blur-xl"
      />

      <svg
        viewBox="0 0 240 245"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 h-auto w-[176px] sm:w-[205px] overflow-visible drop-shadow-[0_14px_26px_rgba(0,4,14,0.85)]"
      >
        <defs>
          {/* Melted Metallic Gold Wax Body */}
          <radialGradient id="waxGoldBody" cx="38%" cy="32%" r="68%">
            <stop offset="0%" stopColor="#FFF6D6" />
            <stop offset="22%" stopColor="#EDD082" />
            <stop offset="56%" stopColor="#C99E3A" />
            <stop offset="85%" stopColor="#8F6719" />
            <stop offset="100%" stopColor="#5E410C" />
          </radialGradient>

          {/* Outer Bevel Rim Highlight */}
          <linearGradient id="waxGoldRim" x1="40" y1="30" x2="200" y2="185" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFF9E2" />
            <stop offset="35%" stopColor="#E4BE62" />
            <stop offset="70%" stopColor="#9C7320" />
            <stop offset="100%" stopColor="#F5DC93" />
          </linearGradient>

          {/* Recessed Inner Stamp Well */}
          <radialGradient id="waxInnerWell" cx="60%" cy="62%" r="65%">
            <stop offset="0%" stopColor="#D9B04E" />
            <stop offset="55%" stopColor="#B88B2B" />
            <stop offset="88%" stopColor="#855E14" />
            <stop offset="100%" stopColor="#62430A" />
          </radialGradient>

          {/* Embossed Cap Gold */}
          <linearGradient id="embossedCapGold" x1="85" y1="78" x2="155" y2="132" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFF7D8" />
            <stop offset="45%" stopColor="#E6C166" />
            <stop offset="100%" stopColor="#9C721D" />
          </linearGradient>

          {/* Curved Text Gold */}
          <linearGradient id="curvedTextGold" x1="55" y1="185" x2="185" y2="185" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#D6AD49" />
            <stop offset="50%" stopColor="#FBF3D5" />
            <stop offset="100%" stopColor="#D6AD49" />
          </linearGradient>

          <filter id="waxOuterShadow" x="-20%" y="-20%" width="140%" height="145%">
            <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#000511" floodOpacity="0.78" />
          </filter>

          <filter id="capEmbossShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="-0.8" dy="-0.8" stdDeviation="0.6" floodColor="#FFF8DE" floodOpacity="0.55" />
            <feDropShadow dx="1.2" dy="1.8" stdDeviation="1.2" floodColor="#422B05" floodOpacity="0.72" />
          </filter>

          {/* Curved Arc Path for "TOCA PARA ABRIR" right beneath the wax seal */}
          <path id="tocaParaAbrirArc" d="M 43 136 A 80 80 0 0 0 197 136" />
        </defs>

        {/* Organic Uneven Melted Gold Wax Perimeter */}
        <g filter="url(#waxOuterShadow)">
          <path
            d="M120 31
               C137 30, 152 38, 165 46
               C177 53, 189 65, 192 81
               C196 96, 198 112, 193 128
               C188 143, 180 158, 166 168
               C152 178, 136 184, 118 183
               C101 182, 85 180, 72 169
               C58 159, 46 144, 44 127
               C41 110, 44 91, 51 76
               C58 60, 72 48, 87 40
               C98 34, 109 32, 120 31 Z"
            fill="url(#waxGoldBody)"
            stroke="url(#waxGoldRim)"
            strokeWidth="2.4"
          />

          {/* Thick Raised Outer Ring Ridge */}
          <circle
            cx="120"
            cy="107"
            r="60"
            fill="none"
            stroke="url(#waxGoldRim)"
            strokeWidth="5.5"
            opacity="0.75"
          />

          {/* Recessed Inner Stamp Well */}
          <circle
            cx="120"
            cy="107"
            r="53"
            fill="url(#waxInnerWell)"
            stroke="#5E400A"
            strokeWidth="1.6"
          />
          <circle
            cx="120"
            cy="107"
            r="51.2"
            fill="none"
            stroke="#FFF4CC"
            strokeOpacity="0.32"
            strokeWidth="1"
          />
        </g>

        {/* Embossed Golden Graduation Cap Inside the Seal */}
        <g filter="url(#capEmbossShadow)">
          {/* Cap Crown Base */}
          <path
            d="M99 109 L99 124 C99 130 141 130 141 124 L141 109 Z"
            fill="url(#embossedCapGold)"
            stroke="#785310"
            strokeWidth="1"
            strokeLinejoin="round"
          />
          {/* Mortarboard Top Diamond */}
          <path
            d="M120 84 L161 99 L120 114 L79 99 Z"
            fill="url(#embossedCapGold)"
            stroke="#FFF5D1"
            strokeOpacity="0.65"
            strokeWidth="1.1"
            strokeLinejoin="round"
          />
          {/* Center Button */}
          <ellipse cx="120" cy="99" rx="3.4" ry="2.1" fill="#FFF7D8" stroke="#855E14" strokeWidth="0.7" />
          {/* Top Cord */}
          <path d="M121 99 Q136 100 149 103" stroke="#FFF4CC" strokeWidth="1.6" strokeLinecap="round" />

          {/* Gently Swaying Embossed Tassel */}
          <motion.g
            style={{ transformOrigin: '149px 103px' }}
            animate={
              isOpening
                ? { rotate: -14 }
                : {
                    rotate: [-5, 5, -5],
                  }
            }
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <path d="M149 103 L149 122" stroke="#FFF4CC" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="149" cy="122" r="2.1" fill="#FFF6D6" stroke="#855E14" strokeWidth="0.6" />
            <path
              d="M146.5 124 L144.5 135 L153.5 135 L151.5 124 Z"
              fill="url(#embossedCapGold)"
              stroke="#785310"
              strokeWidth="0.7"
              strokeLinejoin="round"
            />
          </motion.g>
        </g>

        {/* Curved Gold Text Hugging Bottom of Wax Seal: "TOCA PARA ABRIR" */}
        <text
          fill="url(#curvedTextGold)"
          style={{
            fontFamily: '"Bodoni Moda", Georgia, serif',
            fontSize: '12.5px',
            fontWeight: 600,
            letterSpacing: '0.18em',
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.85))',
          }}
        >
          <textPath href="#tocaParaAbrirArc" startOffset="50%" textAnchor="middle">
            TOCA PARA ABRIR
          </textPath>
        </text>
      </svg>
    </motion.button>
  );
}
