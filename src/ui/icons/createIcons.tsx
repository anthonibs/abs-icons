import React, { forwardRef, memo } from "react";

export function createIcon(Svg: React.FC<React.SVGProps<SVGSVGElement>>) {
  const Icon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
    ({ width = 24, height = 24, ...rest }, ref) => (
      <Svg
        width={width}
        height={height}
        fill="currentColor"
        role="img"
        ref={ref}
        {...rest}
      />
    )
  );

  Icon.displayName = Svg.displayName || Svg.name || "ViaflexIcon";

  return memo(Icon);
}
