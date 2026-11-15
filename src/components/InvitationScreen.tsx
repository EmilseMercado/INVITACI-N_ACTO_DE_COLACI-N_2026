import { motion } from 'motion/react';
import { MapPin, Navigation } from 'lucide-react';
import { CoverBirrete } from './CoverBirrete';
import { GraduateCutoutImage } from './GraduateCutoutImage';
import { SerpentinasCelebration } from './SerpentinasCelebration';
import { UpdsOfficialLogo } from './UpdsOfficialLogo';

const GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/eM11vUpEqysVFAwFA';

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export function InvitationScreen() {
  return (
    <motion.main
      key="invitation-screen"
      aria-label="Invitación de Colación de Grado UPDS 2026"
      className="relative z-10 flex min-h-[100dvh] w-full flex-col items-center justify-center overflow-x-hidden px-3.5 py-6 sm:px-6 sm:py-10"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Celebratory Golden Glow & Falling Serpentinas on Reveal */}
      <SerpentinasCelebration />

      {/* Exclusively Navy & Intense Royal Blue Backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(20,73,166,0.42)_0%,rgba(6,24,64,0.96)_55%,#01091b_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-1/2 h-[540px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(29,78,216,0.22)_0%,transparent_72%)] blur-3xl"
      />

      {/* Upright Ceremonial Invitation Container */}
      <div className="relative z-20 mx-auto w-full max-w-[540px] pt-7 sm:max-w-[600px] sm:pt-10">
        {/* Outer Deep Navy Card with Double Gold Rectangular Frame */}
        <motion.article
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="gold-border-glow relative overflow-visible rounded-3xl border-[1.5px] border-[#dfba5b]/80 bg-gradient-to-b from-[#072053]/96 via-[#041438]/98 to-[#020b22]/98 p-3 shadow-[0_32px_85px_rgba(0,5,18,0.92)] sm:p-4"
        >
          {/* Animated UPDS Blue-and-White Birrete Overlapping Top-Left Frame Corner */}
          <div className="pointer-events-none absolute -top-9 -left-6 z-30 -rotate-[16deg] sm:-top-12 sm:-left-9">
            <CoverBirrete
              interactive={false}
              svgClassName="w-[145px] sm:w-[185px] md:w-[200px]"
            />
          </div>

          {/* Sweeping Metallic Gold Satin Ribbon Accent Draping Top-Right (Zero Flowers) */}
          <svg
            aria-hidden="true"
            viewBox="0 0 220 260"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="pointer-events-none absolute -top-3 -right-2 z-20 h-44 w-36 sm:h-56 sm:w-44 overflow-visible opacity-90"
          >
            <defs>
              <linearGradient id="cornerGoldRibbon" x1="15" y1="10" x2="200" y2="245" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#9C7521" />
                <stop offset="32%" stopColor="#FBF3D5" />
                <stop offset="62%" stopColor="#EDD082" />
                <stop offset="100%" stopColor="#8F691A" />
              </linearGradient>
              <filter id="ribbonDropShadow" x="-15%" y="-15%" width="130%" height="130%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#010716" floodOpacity="0.65" />
              </filter>
            </defs>
            <g filter="url(#ribbonDropShadow)">
              <path
                d="M12 34 C68 6, 138 14, 174 52 C196 76, 188 122, 198 168 C205 198, 214 216, 196 242 L182 224 C194 202, 185 178, 178 150 C168 110, 174 78, 152 58 C122 30, 62 24, 16 48 Z"
                fill="url(#cornerGoldRibbon)"
              />
              <path
                d="M148 34 C178 46, 206 38, 222 18 L210 38 C194 52, 168 52, 144 42 Z"
                fill="url(#cornerGoldRibbon)"
                opacity="0.88"
              />
            </g>
          </svg>

          {/* Outer Gold Hairline Frame */}
          <div className="relative rounded-2xl border border-[#edd082]/75 p-1.5 sm:p-2">
            {/* Inner Gold Hairline Frame */}
            <div className="relative overflow-hidden rounded-xl border border-[#edd082]/55 bg-[#041336]/65 px-4 pt-16 pb-10 sm:px-9 sm:pt-16 sm:pb-12">
              {/* Centered Background Graduate Portrait in Gown Behind All Content */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden"
              >
                <div className="relative flex shrink-0 -translate-y-14 sm:-translate-y-20 items-center justify-center">
                  <div className="pointer-events-none absolute inset-0 scale-110 rounded-full bg-[radial-gradient(circle,rgba(20,73,166,0.38)_0%,rgba(237,208,130,0.16)_46%,transparent_74%)] blur-2xl" />
                  <GraduateCutoutImage className="w-[470px] sm:w-[580px] md:w-[630px] shrink-0 opacity-[0.54] contrast-105 saturate-105" />
                </div>
                {/* Soft Edge Vignette Scrim to Keep Portrait Prominent & Text Crisp */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(4,19,54,0.04)_0%,rgba(4,19,54,0.36)_76%,rgba(2,11,34,0.64)_100%)]" />
              </div>

              {/* Subtle Top Radial Illumination */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-12 left-1/2 z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(237,208,130,0.09)_0%,rgba(20,73,166,0.16)_48%,transparent_74%)] blur-2xl"
              />

              {/* Content Stack Following Centered Ceremonial Flow */}
              <div className="relative z-10 mx-auto flex flex-col items-center text-center">
                {/* 1. Top Title Area */}
                <motion.header
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.14}
                  className="flex flex-col items-center"
                >
                  <span className="font-[family-name:var(--font-script)] text-[1.85rem] sm:text-[2.25rem] font-normal text-white leading-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
                    Acto de
                  </span>

                  <h1
                    className="mt-1 font-[family-name:var(--font-script)] text-[2.75rem] sm:text-[3.55rem] font-normal text-white leading-[1.06] title-illumination"
                    style={{ textWrap: 'balance' }}
                  >
                    Colación de Grado
                  </h1>

                  <div className="mt-1.5 flex items-baseline justify-center gap-2 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]">
                    <span className="font-sans text-lg sm:text-xl font-extrabold tracking-[0.04em]">
                      UPDS
                    </span>
                    <span className="font-sans text-lg sm:text-xl font-normal tracking-[0.04em] text-[#fbf3d5]">
                      2026
                    </span>
                  </div>
                </motion.header>

                {/* 2. Frase principal & Mensaje */}
                <motion.section
                  aria-label="Mensaje de la graduada"
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.25}
                  className="mt-6 flex max-w-md flex-col items-center"
                >
                  <p
                    className="font-[family-name:var(--font-script)] text-[1.95rem] sm:text-[2.25rem] font-normal text-[#fbf3d5] leading-snug drop-shadow-[0_2px_10px_rgba(1,9,27,0.85)]"
                    style={{ textWrap: 'balance' }}
                  >
                    ¡El día que estaba esperando, llegó!
                  </p>

                  <p className="mt-2.5 font-sans text-[14.5px] sm:text-[15px] leading-[1.7] text-slate-100 drop-shadow-[0_2px_8px_rgba(1,9,27,0.9)]">
                    Me siento muy feliz por lograr una de las metas más importantes de mi vida,
                    culminar mis estudios universitarios. Agradezco a Dios, a mi familia y a todos
                    los que fueron parte en esta etapa. Es un honor para mí invitarle a ser parte
                    de la alegría de mi Acto de Graduación.
                  </p>
                </motion.section>

                {/* 3. DATOS DE LA GRADUADA — Clean Borderless Typography Without Background Boxes:
                    First: INGENIERÍA DE SISTEMAS (Montserrat Bold Italic)
                    Below: Emilse Mercado Ramos (Alex Brush) */}
                <motion.section
                  aria-label="Datos de la graduada"
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.36}
                  className="mt-6 flex w-full max-w-md flex-col items-center text-center"
                >
                  <p className="font-[family-name:var(--font-career)] italic text-base sm:text-lg font-extrabold tracking-[0.14em] text-[#edd082] uppercase drop-shadow-[0_2px_10px_rgba(1,9,27,0.92)]">
                    INGENIERÍA DE SISTEMAS
                  </p>

                  <h2 className="mt-1.5 font-[family-name:var(--font-signature)] text-[2.5rem] sm:text-[3rem] font-normal tracking-normal text-white leading-[1.12] drop-shadow-[0_3px_12px_rgba(1,9,27,0.95)]">
                    Emilse Mercado Ramos
                  </h2>
                </motion.section>

                {/* 5. 3-Column Horizontal Date/Time Strip (SÁBADO | 21 NOVIEMBRE | 8:30 A. M.) */}
                <motion.section
                  aria-label="Fecha y hora del evento"
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.45}
                  className="mt-7 grid w-full max-w-md grid-cols-3 items-center gap-2 sm:gap-4"
                >
                  {/* Left: Day of week between horizontal gold lines */}
                  <div className="border-y border-[#edd082]/60 py-2 text-center">
                    <span className="font-[family-name:var(--font-date)] text-xs sm:text-sm font-bold tracking-[0.14em] text-[#fbf3d5] uppercase">
                      Sábado
                    </span>
                  </div>

                  {/* Center: Day number + Month */}
                  <div className="flex flex-col items-center justify-center leading-none">
                    <span className="font-[family-name:var(--font-date)] text-3xl sm:text-4xl font-bold text-white tabular-nums">
                      21
                    </span>
                    <span className="mt-1 font-[family-name:var(--font-date)] text-xs sm:text-sm font-bold tracking-[0.14em] text-[#edd082] uppercase">
                      Noviembre
                    </span>
                  </div>

                  {/* Right: Time between horizontal gold lines */}
                  <div className="border-y border-[#edd082]/60 py-2 text-center">
                    <span className="font-[family-name:var(--font-date)] text-xs sm:text-sm font-bold tracking-[0.1em] text-[#fbf3d5] uppercase whitespace-nowrap">
                      8:30 A. M.
                    </span>
                  </div>
                </motion.section>

                {/* 6. Centered Venue & Closing Footer */}
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.55}
                  className="mt-7 flex flex-col items-center text-center"
                >
                  <span className="font-sans text-[11px] font-semibold tracking-[0.2em] text-[#edd082] uppercase">
                    Lugar
                  </span>

                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-1.5 inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-xl border border-[#edd082]/45 bg-[#072257]/75 px-4 py-2 font-sans text-sm sm:text-base font-bold text-white shadow-sm transition-all hover:border-[#fbf3d5] hover:bg-[#0b3178] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#edd082]"
                  >
                    <MapPin className="h-4 w-4 shrink-0 text-[#edd082]" aria-hidden="true" />
                    <span>Campus UPDS</span>
                    <Navigation
                      className="h-3.5 w-3.5 shrink-0 text-[#edd082] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </a>

                  {/* Bottom Closing: Tarija 2026 & Universidad Privada Domingo Savio */}
                  <footer className="mt-6 flex flex-col items-center">
                    <div className="mb-1.5 flex items-center gap-2.5">
                      <span className="h-px w-5 bg-gradient-to-r from-transparent to-[#edd082]/75" />
                      <span className="font-[family-name:var(--font-script)] text-[1.6rem] sm:text-[1.85rem] font-normal tracking-wide text-[#fbf3d5]">
                        Tarija 2026
                      </span>
                      <span className="h-px w-5 bg-gradient-to-l from-transparent to-[#edd082]/75" />
                    </div>

                    <UpdsOfficialLogo />
                  </footer>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </motion.main>
  );
}
