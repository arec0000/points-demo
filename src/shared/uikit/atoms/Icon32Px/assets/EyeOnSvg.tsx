export function EyeOnSvg(gradient?: React.ReactNode) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 16C6 16 9 9 16 9C23 9 26 16 26 16C26 16 23 23 16 23C9 23 6 16 6 16Z"
        stroke="#1B1B1B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z"
        stroke="#1B1B1B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {gradient}
    </svg>
  );
}
