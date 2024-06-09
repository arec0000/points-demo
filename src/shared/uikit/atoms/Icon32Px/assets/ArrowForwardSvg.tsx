export function ArrowForwardSvg(gradient?: React.ReactNode) {
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
        d="M10.9393 24.0607C10.3536 23.4749 10.3536 22.5251 10.9393 21.9393L16.8787 16L10.9393 10.0607C10.3536 9.47487 10.3536 8.52513 10.9393 7.93934C11.5251 7.35355 12.4749 7.35355 13.0607 7.93934L20.0607 14.9393C20.6464 15.5251 20.6464 16.4749 20.0607 17.0607L13.0607 24.0607C12.4749 24.6464 11.5251 24.6464 10.9393 24.0607Z"
        fill="#1B1B1B"
      />
      {gradient}
    </svg>
  );
}
