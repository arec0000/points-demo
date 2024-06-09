export function MinusSvg(gradient?: React.ReactNode) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.5 16C24.5 16.8284 23.8284 17.5 23 17.5H9C8.17157 17.5 7.5 16.8284 7.5 16C7.5 15.1716 8.17157 14.5 9 14.5L23 14.5C23.8284 14.5 24.5 15.1716 24.5 16Z"
        fill="#1B1B1B"
      />
      {gradient}
    </svg>
  );
}
