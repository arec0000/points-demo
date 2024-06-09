export function ArrowBackSvg(gradient?: React.ReactNode) {
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
        d="M20.0607 7.93934C20.6464 8.52513 20.6464 9.47487 20.0607 10.0607L14.1213 16L20.0607 21.9393C20.6464 22.5251 20.6464 23.4749 20.0607 24.0607C19.4749 24.6464 18.5251 24.6464 17.9393 24.0607L10.9393 17.0607C10.3536 16.4749 10.3536 15.5251 10.9393 14.9393L17.9393 7.93934C18.5251 7.35355 19.4749 7.35355 20.0607 7.93934Z"
        fill="#1B1B1B"
      />
      {gradient}
    </svg>
  );
}
