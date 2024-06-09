export function TimeSvg(gradient?: React.ReactNode) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z"
        stroke="#1B1B1B"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 12L14.4545 14.4546"
        stroke="#1B1B1B"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M12 12L12 7.09091"
        stroke="#1B1B1B"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {gradient}
    </svg>
  );
}
