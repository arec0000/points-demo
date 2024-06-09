export function InfoSvg(gradient?: React.ReactNode) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 19.5C16.1421 19.5 19.5 16.1421 19.5 12C19.5 7.85786 16.1421 4.5 12 4.5C7.85787 4.5 4.5 7.85786 4.5 12C4.5 16.1421 7.85786 19.5 12 19.5ZM22.5 12C22.5 17.799 17.799 22.5 12 22.5C6.20101 22.5 1.5 17.799 1.5 12C1.5 6.20101 6.20101 1.5 12 1.5C17.799 1.5 22.5 6.20101 22.5 12Z"
        fill="#1B1B1B"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 17C11.1716 17 10.5 16.3284 10.5 15.5L10.5 11.5C10.5 10.6716 11.1716 10 12 10C12.8284 10 13.5 10.6716 13.5 11.5L13.5 15.5C13.5 16.3284 12.8284 17 12 17Z"
        fill="#1B1B1B"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 9C11.1716 9 10.5 8.32843 10.5 7.5C10.5 6.67157 11.1716 6 12 6C12.8284 6 13.5 6.67157 13.5 7.5C13.5 8.32843 12.8284 9 12 9Z"
        fill="#1B1B1B"
      />
      {gradient}
    </svg>
  );
}
