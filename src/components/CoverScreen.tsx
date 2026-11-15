import { motion } from 'motion/react';
import { GoldenWaxSeal } from './GoldenWaxSeal';

interface CoverScreenProps {
  isOpening: boolean;
  onOpen: () => void;
}

export function CoverScreen({ isOpening, onOpen }: CoverScreenProps) {
  return (
    <motion.section
      key="cover-screen"
      aria-label="Portada de invitación de colación de grado"
      className="relative z-10 flex min-h-[100dvh] w-full items-center justify-center overflow-hidden sm:px-6 sm:py-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
      }}
    >
      {/* Ambient Deep Navy Backdrop (Desktop/Tablet) */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_center,#061c4b_0%,#03102e_55%,#010716_100%)]"
      />

      {/* Upright Tall Envelope Container Matching Reference Proportions */}
      <div
        className="relative z-10 flex h-[100dvh] w-full items-center justify-center overflow-hidden sm:h-[90dvh] sm:max-h-[880px] sm:max-w-[490px] sm:rounded-3xl sm:border sm:border-[#edd082]/25 sm:shadow-[0_32px_85px_rgba(0,4,16,0.92)]"
        style={{ perspective: '1600px' }}
      >
        {/* Radiant Inner Golden Glow Revealed When Envelope Opens */}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,243,213,0.95)_0%,rgba(237,208,130,0.52)_30%,rgba(13,54,128,0.9)_70%,#020b22_100%)]"
          initial={{ opacity: 0.1 }}
          animate={isOpening ? { opacity: 1 } : { opacity: 0.1 }}
          transition={{ duration: 0.65 }}
        />

        {/* Base Textured Navy Envelope Interior */}
        <motion.div
          aria-hidden="true"
          animate={isOpening ? { opacity: 0.25 } : { opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="pointer-events-none absolute inset-0 bg-[#04173c]"
        />

        {/* LEFT & RIGHT LOWER POCKET PANELS (Matte Fine-Grain Navy Paper) */}
        <motion.div
          aria-hidden="true"
          style={{
            clipPath: 'polygon(0% 0%, 50% 54%, 0% 100%)',
            transformOrigin: 'left center',
          }}
          animate={
            isOpening
              ? { x: '-100%', rotateY: 24, opacity: 0.2 }
              : { x: '0%', rotateY: 0, opacity: 1 }
          }
          transition={{ duration: 0.88, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-[#061e4d] via-[#041638] to-[#020d24]"
        >
          <div
            className="absolute inset-0 opacity-[0.18] mix-blend-overlay"
            style={{
              backgroundImage:
                'radial-gradient(rgba(255,255,255,0.6) 0.65px, transparent 0.65px), radial-gradient(rgba(0,0,0,0.75) 0.65px, transparent 0.65px)',
              backgroundSize: '5px 5px',
              backgroundPosition: '0 0, 2.5px 2.5px',
            }}
          />
        </motion.div>

        <motion.div
          aria-hidden="true"
          style={{
            clipPath: 'polygon(100% 0%, 50% 54%, 100% 100%)',
            transformOrigin: 'right center',
          }}
          animate={
            isOpening
              ? { x: '100%', rotateY: -24, opacity: 0.2 }
              : { x: '0%', rotateY: 0, opacity: 1 }
          }
          transition={{ duration: 0.88, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-bl from-[#061e4d] via-[#041638] to-[#020d24]"
        >
          <div
            className="absolute inset-0 opacity-[0.18] mix-blend-overlay"
            style={{
              backgroundImage:
                'radial-gradient(rgba(255,255,255,0.6) 0.65px, transparent 0.65px), radial-gradient(rgba(0,0,0,0.75) 0.65px, transparent 0.65px)',
              backgroundSize: '5px 5px',
              backgroundPosition: '0 0, 2.5px 2.5px',
            }}
          />
        </motion.div>

        {/* BOTTOM TRIANGULAR ENVELOPE POCKET FLAP (Pointing Up Behind Top Flap) */}
        <motion.div
          aria-hidden="true"
          style={{
            clipPath: 'polygon(0% 100%, 50% 37%, 100% 100%)',
            transformOrigin: 'bottom center',
          }}
          animate={
            isOpening
              ? { y: '105%', rotateX: 30, opacity: 0.2 }
              : { y: '0%', rotateX: 0, opacity: 1 }
          }
          transition={{ duration: 0.88, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#03102b] via-[#051a42] to-[#082458] drop-shadow-[0_-12px_20px_rgba(0,3,12,0.72)]"
        >
          <div
            className="absolute inset-0 opacity-[0.18] mix-blend-overlay"
            style={{
              backgroundImage:
                'radial-gradient(rgba(255,255,255,0.6) 0.65px, transparent 0.65px), radial-gradient(rgba(0,0,0,0.75) 0.65px, transparent 0.65px)',
              backgroundSize: '5px 5px',
              backgroundPosition: '0 0, 2.5px 2.5px',
            }}
          />
        </motion.div>

        {/* Subtle V-Crease Shadows for Bottom Pocket Edges */}
        <motion.svg
          aria-hidden="true"
          viewBox="0 0 490 860"
          preserveAspectRatio="none"
          animate={isOpening ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="pointer-events-none absolute inset-0 z-10 h-full w-full"
        >
          <defs>
            <filter id="pocketShadow" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur stdDeviation="5" />
            </filter>
          </defs>
          <path
            d="M0 860 L245 318 L490 860"
            stroke="rgba(0, 3, 12, 0.72)"
            strokeWidth="8"
            fill="none"
            filter="url(#pocketShadow)"
          />
          <path
            d="M0 860 L245 318 L490 860"
            stroke="rgba(147, 197, 253, 0.14)"
            strokeWidth="1"
            fill="none"
          />
        </motion.svg>

        {/* TOP TRIANGULAR V-FLAP (Pointing Down Over the Center) */}
        <motion.div
          aria-hidden="true"
          style={{
            clipPath: 'polygon(0% 0%, 100% 0%, 50% 54%)',
            transformOrigin: 'top center',
          }}
          animate={
            isOpening
              ? { rotateX: -165, y: '-40%', opacity: 0.15 }
              : { rotateX: 0, y: '0%', opacity: 1 }
          }
          transition={{ duration: 0.88, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-b from-[#07204f] via-[#05183f] to-[#03112e] drop-shadow-[0_14px_24px_rgba(0,3,12,0.85)]"
        >
          {/* Matte Paper Grain */}
          <div
            className="absolute inset-0 opacity-[0.18] mix-blend-overlay"
            style={{
              backgroundImage:
                'radial-gradient(rgba(255,255,255,0.6) 0.65px, transparent 0.65px), radial-gradient(rgba(0,0,0,0.75) 0.65px, transparent 0.65px)',
              backgroundSize: '5px 5px',
              backgroundPosition: '0 0, 2.5px 2.5px',
            }}
          />
        </motion.div>

        {/* Deep Realistic Drop Shadow Under the Top V-Flap Edges */}
        <motion.svg
          aria-hidden="true"
          viewBox="0 0 490 860"
          preserveAspectRatio="none"
          animate={isOpening ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="pointer-events-none absolute inset-0 z-20 h-full w-full"
        >
          <defs>
            <filter id="topFlapShadow" x="-15%" y="-15%" width="130%" height="130%">
              <feGaussianBlur stdDeviation="7" />
            </filter>
          </defs>
          <path
            d="M0 0 L245 468 L490 0"
            stroke="rgba(0, 3, 12, 0.85)"
            strokeWidth="11"
            fill="none"
            filter="url(#topFlapShadow)"
          />
          <path
            d="M0 0 L245 464 L490 0"
            stroke="rgba(237, 208, 130, 0.22)"
            strokeWidth="1.2"
            fill="none"
          />
        </motion.svg>

        {/* Centered Golden Wax Seal Button with Embossed Cap & Curved "TOCA PARA ABRIR" */}
        <div className="relative z-30 mt-14 sm:mt-16 flex items-center justify-center">
          <GoldenWaxSeal isOpening={isOpening} onClick={onOpen} />
        </div>
      </div>
    </motion.section>
  );
}
