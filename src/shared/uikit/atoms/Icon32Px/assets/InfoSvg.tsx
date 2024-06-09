export function InfoSvg(gradient?: React.ReactNode) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 5C9.92487 5 5 9.92487 5 16C5 22.0751 9.92487 27 16 27C22.0751 27 27 22.0751 27 16C27 9.92487 22.0751 5 16 5Z"
        stroke="#1B1B1B"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 10L16 9.5"
        stroke="#1B1B1B"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M16 22L16 14"
        stroke="#1B1B1B"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {gradient}
    </svg>
  );
}
