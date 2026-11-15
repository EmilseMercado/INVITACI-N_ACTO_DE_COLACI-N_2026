import { motion } from 'motion/react';

export function UpdsOfficialLogo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.72, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center justify-center text-center select-none"
      aria-label="Universidad Privada Domingo Savio"
    >
      <p className="font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-[0.26em] text-slate-200/95">
        Universidad Privada Domingo Savio
      </p>
    </motion.div>
  );
}
