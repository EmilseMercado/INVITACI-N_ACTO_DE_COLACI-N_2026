import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'motion/react';
import { GoldenParticles } from './components/GoldenParticles';
import { CoverScreen } from './components/CoverScreen';
import { CapsVideoStage } from './components/CapsVideoStage';
import { InvitationScreen } from './components/InvitationScreen';

type ScreenView = 'cover' | 'video' | 'invitation';

export default function App() {
  const [screen, setScreen] = useState<ScreenView>('cover');
  const [isOpening, setIsOpening] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleOpenInvitation = () => {
    if (isOpening || screen !== 'cover') return;
    setIsOpening(true);

    timerRef.current = window.setTimeout(() => {
      setScreen('video');
      setIsOpening(false);
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }, 900);
  };

  const handleVideoComplete = () => {
    setScreen('invitation');
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-[100dvh] w-full overflow-x-hidden bg-[#01091b] text-slate-50 selection:bg-[#edd082]/30 selection:text-white">
        {/* Background Golden Particles */}
        {screen !== 'video' && <GoldenParticles />}

        {/* Ceremonial Golden Light Bloom Transition Overlay */}
        <AnimatePresence>
          {isOpening && (
            <motion.div
              key="golden-transition-bloom"
              aria-hidden="true"
              className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                className="h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(251,243,213,0.92)_0%,rgba(237,208,130,0.55)_35%,rgba(20,73,166,0.2)_70%,transparent_100%)] blur-2xl"
                initial={{ scale: 0.4, opacity: 0.3 }}
                animate={{ scale: 12, opacity: [0.3, 0.95, 0.2] }}
                transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Three-Stage Sequence: Cover -> Standalone Caps Video -> Invitation + Serpentinas */}
        <AnimatePresence mode="wait">
          {screen === 'cover' && (
            <CoverScreen
              key="cover"
              isOpening={isOpening}
              onOpen={handleOpenInvitation}
            />
          )}

          {screen === 'video' && (
            <CapsVideoStage
              key="video"
              onComplete={handleVideoComplete}
            />
          )}

          {screen === 'invitation' && (
            <InvitationScreen key="invitation" />
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
}
