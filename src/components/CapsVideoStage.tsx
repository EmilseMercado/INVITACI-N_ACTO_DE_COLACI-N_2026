import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';

interface CapsVideoStageProps {
  onComplete: () => void;
}

const VIDEO_PLAY_DURATION_MS = 3000;

export function CapsVideoStage({ onComplete }: CapsVideoStageProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const completedRef = useRef(false);

  const triggerComplete = () => {
    if (completedRef.current) return;
    completedRef.current = true;
    onComplete();
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {
        // Timer below ensures progression even if autoplay is restricted
      });
    }

    // Play the graduation caps video for exactly 3 seconds
    const timer = window.setTimeout(triggerComplete, VIDEO_PLAY_DURATION_MS);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <motion.section
      key="caps-video-stage"
      aria-label="Celebración de birretes volando hacia arriba"
      onClick={triggerComplete}
      className="fixed inset-0 z-30 flex h-[100dvh] w-full items-center justify-center overflow-hidden bg-[#01091b] cursor-pointer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.04,
        filter: 'brightness(1.25)',
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
      }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      <video
        ref={videoRef}
        src={`${import.meta.env.BASE_URL}videos/MODE_95765ca8.mp4`}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="h-full w-full object-cover object-center"
      />

      {/* Subtle Navy & Gold Edge Harmonization */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_48%,rgba(1,9,27,0.52)_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#01091b]/70 to-transparent"
      />
    </motion.section>
  );
}