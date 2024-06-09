export function SearchSvg(gradient?: React.ReactNode) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.3323 21.2999C25.9772 17.655 25.9772 11.7454 22.3323 8.10053C18.6874 4.45564 12.7779 4.45564 9.13299 8.10053C5.48809 11.7454 5.4881 17.655 9.13299 21.2999C12.7779 24.9448 18.6874 24.9448 22.3323 21.2999ZM22.3323 21.2999L27.5986 26.5662"
        stroke="#1B1B1B"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {gradient}
    </svg>
  );
}
