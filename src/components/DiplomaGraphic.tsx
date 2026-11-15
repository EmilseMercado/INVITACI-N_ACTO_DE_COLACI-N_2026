import { motion } from 'motion/react';

export function DiplomaGraphic() {
  return (
    <motion.div
      aria-hidden="true"
      className="relative inline-flex items-center justify-center select-none"
      animate={{
        y: [0, -6, 0],
        rotate: [-1.2, 1.2, -1.2],
      }}
      transition={{
        duration: 5.8,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(237,208,130,0.18)_0%,transparent_70%)] blur-lg" />
      <svg
        viewBox="0 0 180 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 h-14 w-36 sm:h-16 sm:w-44 drop-shadow-[0_10px_18px_rgba(1,8,24,0.65)]"
      >
        <defs>
          <linearGradient id="scrollPaper" x1="16" y1="20" x2="164" y2="56" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F5EFE0" />
            <stop offset="45%" stopColor="#FFFDF7" />
            <stop offset="100%" stopColor="#E6D9BE" />
          </linearGradient>
          <linearGradient id="scrollGold" x1="66" y1="12" x2="114" y2="66" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#9C7521" />
            <stop offset="35%" stopColor="#F1D88D" />
            <stop offset="65%" stopColor="#C99E3A" />
            <stop offset="100%" stopColor="#8A6418" />
          </linearGradient>
          <linearGradient id="scrollBlueRibbon" x1="76" y1="14" x2="104" y2="62" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#08245B" />
            <stop offset="50%" stopColor="#1449A6" />
            <stop offset="100%" stopColor="#061942" />
          </linearGradient>
        </defs>

        {/* Rolled Scroll Body */}
        <path
          d="M28 21 L150 21 C158 21 163 29 163 38 C163 47 158 55 150 55 L28 55 C20 55 15 47 15 38 C15 29 20 21 28 21 Z"
          fill="url(#scrollPaper)"
          stroke="#C99E3A"
          strokeWidth="1.4"
        />

        {/* Scroll Left Spiral End */}
        <ellipse cx="28" cy="38" rx="9" ry="17" fill="#EAE0C8" stroke="#C99E3A" strokeWidth="1.2" />
        <ellipse cx="28" cy="38" rx="4.5" ry="9" fill="#B59E74" />

        {/* Scroll Right Spiral End */}
        <ellipse cx="150" cy="38" rx="8.5" ry="17" fill="#DFD2B5" stroke="#C99E3A" strokeWidth="1.2" />
        <ellipse cx="150" cy="38" rx="3.8" ry="8.2" fill="#9A835C" />

        {/* Subtle sheen line along scroll */}
        <path d="M40 27 L140 27" stroke="#FFFFFF" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" />

        {/* Ribbon Tails */}
        <path d="M84 52 L72 72 L83 67 L89 74 L91 52 Z" fill="url(#scrollBlueRibbon)" stroke="url(#scrollGold)" strokeWidth="1" />
        <path d="M96 52 L108 72 L97 67 L91 74 L89 52 Z" fill="url(#scrollBlueRibbon)" stroke="url(#scrollGold)" strokeWidth="1" />

        {/* Center Blue & Gold Band */}
        <rect
          x="80"
          y="18.5"
          width="20"
          height="39"
          rx="2.5"
          fill="url(#scrollBlueRibbon)"
          stroke="url(#scrollGold)"
          strokeWidth="1.8"
        />

        {/* Gold Seal Medallion */}
        <circle cx="90" cy="38" r="8.5" fill="url(#scrollGold)" stroke="#FFF7DF" strokeWidth="1" />
        <circle cx="90" cy="38" r="5" fill="#0B2D70" stroke="#FBF3D5" strokeWidth="0.9" />
      </svg>
    </motion.div>
  );
}
