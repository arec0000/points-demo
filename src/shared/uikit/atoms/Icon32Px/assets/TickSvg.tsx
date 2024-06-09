export function TickSvg(gradient?: React.ReactNode) {
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
        d="M23.0472 10.926C23.6403 11.5043 23.6523 12.454 23.074 13.0472L15.964 20.3395C15.0081 21.3199 13.4414 21.3489 12.4498 20.4046L8.96552 17.0862C8.36562 16.5149 8.34247 15.5654 8.9138 14.9655C9.48512 14.3656 10.4346 14.3425 11.0345 14.9138L14.1609 17.8914L20.926 10.9529C21.5043 10.3597 22.454 10.3477 23.0472 10.926Z"
        fill="#1B1B1B"
      />
      {gradient}
    </svg>
  );
}
