export function DropDownSvg(gradient?: React.ReactNode) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.7321 21C16.9623 22.3333 15.0378 22.3333 14.2679 21L10.8038 15C10.034 13.6667 10.9963 12 12.5359 12L19.4641 12C21.0037 12 21.966 13.6667 21.1962 15L17.7321 21Z"
        fill="#1B1B1B"
      />
      {gradient}
    </svg>
  );
}
