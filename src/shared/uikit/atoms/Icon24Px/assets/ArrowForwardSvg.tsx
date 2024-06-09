export function ArrowForwardSvg(gradient?: React.ReactNode) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 17L16 12L11 7"
        stroke="#1B1B1B"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {gradient}
    </svg>
  );
}
