import { memo } from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export function createIcon(
  SvgComponent: React.FC<React.SVGProps<SVGSVGElement>>,
  displayName?: string
) {
  const IconWrapper = memo(function IconWrapper({
    size = 24,
    ...props
  }: IconProps) {
    return (
      <SvgComponent fill="currentColor" width={size} height={size} {...props} />
    );
  });

  IconWrapper.displayName = displayName || IconWrapper.name || "ViaflexIcon";

  return IconWrapper;
}
