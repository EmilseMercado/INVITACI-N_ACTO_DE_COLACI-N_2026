export function SystemsCircuitCorners() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Top-Left Precision Circuit Trace */}
      <svg
        viewBox="0 0 220 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0 h-36 w-36 sm:h-48 sm:w-48 opacity-35"
      >
        <path
          d="M0 34 H58 L78 54 H134"
          stroke="#EDD082"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M0 58 H42 L66 82 V128"
          stroke="#DFBA5B"
          strokeWidth="1"
          strokeOpacity="0.7"
          strokeLinecap="round"
        />
        <path
          d="M34 0 V46 L52 64 H92"
          stroke="#EDD082"
          strokeWidth="1"
          strokeOpacity="0.55"
          strokeLinecap="round"
        />
        <circle cx="136" cy="54" r="3" fill="#041336" stroke="#EDD082" strokeWidth="1.4" />
        <circle cx="66" cy="130" r="2.8" fill="#041336" stroke="#EDD082" strokeWidth="1.4" />
        <circle cx="94" cy="64" r="2.5" fill="#EDD082" />
      </svg>

      {/* Top-Right Precision Circuit Trace */}
      <svg
        viewBox="0 0 220 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 right-0 h-36 w-36 sm:h-48 sm:w-48 opacity-35 -scale-x-100"
      >
        <path
          d="M0 34 H58 L78 54 H134"
          stroke="#EDD082"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M0 58 H42 L66 82 V128"
          stroke="#DFBA5B"
          strokeWidth="1"
          strokeOpacity="0.7"
          strokeLinecap="round"
        />
        <path
          d="M34 0 V46 L52 64 H92"
          stroke="#EDD082"
          strokeWidth="1"
          strokeOpacity="0.55"
          strokeLinecap="round"
        />
        <circle cx="136" cy="54" r="3" fill="#041336" stroke="#EDD082" strokeWidth="1.4" />
        <circle cx="66" cy="130" r="2.8" fill="#041336" stroke="#EDD082" strokeWidth="1.4" />
        <circle cx="94" cy="64" r="2.5" fill="#EDD082" />
      </svg>

      {/* Bottom-Left Precision Circuit Trace */}
      <svg
        viewBox="0 0 220 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 left-0 h-36 w-36 sm:h-48 sm:w-48 opacity-30 -scale-y-100"
      >
        <path
          d="M0 34 H58 L78 54 H134"
          stroke="#EDD082"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M0 58 H42 L66 82 V128"
          stroke="#DFBA5B"
          strokeWidth="1"
          strokeOpacity="0.7"
          strokeLinecap="round"
        />
        <circle cx="136" cy="54" r="3" fill="#041336" stroke="#EDD082" strokeWidth="1.4" />
        <circle cx="66" cy="130" r="2.8" fill="#041336" stroke="#EDD082" strokeWidth="1.4" />
      </svg>

      {/* Bottom-Right Precision Circuit Trace */}
      <svg
        viewBox="0 0 220 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 right-0 h-36 w-36 sm:h-48 sm:w-48 opacity-30 scale-x-[-1] scale-y-[-1]"
      >
        <path
          d="M0 34 H58 L78 54 H134"
          stroke="#EDD082"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M0 58 H42 L66 82 V128"
          stroke="#DFBA5B"
          strokeWidth="1"
          strokeOpacity="0.7"
          strokeLinecap="round"
        />
        <circle cx="136" cy="54" r="3" fill="#041336" stroke="#EDD082" strokeWidth="1.4" />
        <circle cx="66" cy="130" r="2.8" fill="#041336" stroke="#EDD082" strokeWidth="1.4" />
      </svg>
    </div>
  );
}

export function SystemsCircuitDivider() {
  return (
    <div aria-hidden="true" className="flex w-full items-center justify-center gap-2.5 my-5">
      <svg viewBox="0 0 120 16" fill="none" className="h-4 w-20 sm:w-28 opacity-80">
        <path d="M0 8 H84 L94 3 H114" stroke="url(#divLeft)" strokeWidth="1.1" />
        <circle cx="116" cy="3" r="2" fill="#EDD082" />
        <defs>
          <linearGradient id="divLeft" x1="0" y1="8" x2="114" y2="8" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#EDD082" stopOpacity="0" />
            <stop offset="100%" stopColor="#EDD082" stopOpacity="0.9" />
          </linearGradient>
        </defs>
      </svg>

      {/* Geometric Systems Node Crest */}
      <svg viewBox="0 0 28 28" fill="none" className="h-5 w-5 shrink-0 text-[#edd082]">
        <polygon
          points="14,2 25,8.5 25,19.5 14,26 3,19.5 3,8.5"
          stroke="currentColor"
          strokeWidth="1.2"
          fill="#072257"
        />
        <circle cx="14" cy="14" r="3.2" fill="currentColor" />
      </svg>

      <svg viewBox="0 0 120 16" fill="none" className="h-4 w-20 sm:w-28 opacity-80 -scale-x-100">
        <path d="M0 8 H84 L94 3 H114" stroke="url(#divRight)" strokeWidth="1.1" />
        <circle cx="116" cy="3" r="2" fill="#EDD082" />
        <defs>
          <linearGradient id="divRight" x1="0" y1="8" x2="114" y2="8" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#EDD082" stopOpacity="0" />
            <stop offset="100%" stopColor="#EDD082" stopOpacity="0.9" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
