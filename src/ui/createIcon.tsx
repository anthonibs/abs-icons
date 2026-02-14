import { memo } from "react";
import type { SVGProps, FC, NamedExoticComponent } from "react";
import { IconMetadata } from "../web/interfaces";

export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

export function createIcon(
  name: string,
  SvgComponent: FC<SVGProps<SVGSVGElement>>,
  metadata: IconMetadata,
) {
  const IconWrapper = memo(function IconWrapper({
    size = 24,
    ...props
  }: IconProps) {
    return (
      <SvgComponent fill="currentColor" width={size} height={size} {...props} />
    );
  }) as unknown as NamedExoticComponent<IconProps> & { metadata: IconMetadata };

  IconWrapper.displayName = name;
  IconWrapper.metadata = metadata;

  return IconWrapper;
}
