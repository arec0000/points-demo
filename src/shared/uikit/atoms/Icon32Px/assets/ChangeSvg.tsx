export function ChangeSvg(gradient?: React.ReactNode) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 14L22 16L24 14"
        stroke="#1B1B1B"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 18L9 16L7 18"
        stroke="#1B1B1B"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 14C22 10.6863 19.0695 8 15.4545 8C13.1779 8 11.1726 9.06551 10 10.6822"
        stroke="#1B1B1B"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M9 18C9 21.3137 11.9305 24 15.5455 24C17.8222 24 19.8274 22.9345 21 21.3178"
        stroke="#1B1B1B"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {gradient}
    </svg>
  );
}
