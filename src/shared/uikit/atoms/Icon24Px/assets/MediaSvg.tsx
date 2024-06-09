export function MediaSvg(gradient?: React.ReactNode) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.5 6.4197C4.5 4.89004 6.14731 3.92661 7.48052 4.67654L17.4011 10.2568C18.7604 11.0215 18.7604 12.9785 17.4011 13.7432L7.48052 19.3235C6.14732 20.0734 4.5 19.11 4.5 17.5803V6.4197Z"
        fill="#1B1B1B"
      />
      {gradient}
    </svg>
  );
}
