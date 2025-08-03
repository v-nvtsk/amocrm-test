interface CopyIconProps {
  size?: number;
  color?: string;
}

export const CopyIcon = ({ size = 24, color = "currentColor" }: CopyIconProps) => (
  <svg
    role="img"
    aria-label="Copy icon"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    fill={color}
    stroke={color}
    strokeWidth="2"
  >
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" fill={color} />
    <rect x="3" y="3" width="13" height="13" rx="2" ry="2" fill="none" />
  </svg>
);
