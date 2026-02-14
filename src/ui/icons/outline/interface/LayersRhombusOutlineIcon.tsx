import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="m2.8 12.46 8.65 5.19c.34.21.77.21 1.11 0l8.65-5.19c.38-.23.5-.72.27-1.1a.8.8 0 0 0-1.1-.27L12.19 16a.37.37 0 0 1-.38 0l-8.19-4.91a.807.807 0 0 0-1.1.27c-.23.38-.1.87.27 1.1Z" /><path d="m20.38 14.74-8.19 4.91a.37.37 0 0 1-.38 0l-8.19-4.91a.807.807 0 0 0-1.1.27c-.23.38-.1.87.27 1.1l8.65 5.19c.34.21.77.21 1.11 0l8.65-5.19c.38-.23.5-.72.27-1.1a.8.8 0 0 0-1.1-.27ZM2.8 9l7.98 4.79c.37.22.79.34 1.22.34s.85-.12 1.22-.34L21.2 9a.8.8 0 0 0 0-1.37l-7.98-4.79c-.75-.45-1.69-.45-2.45 0L2.8 7.63A.8.8 0 0 0 2.8 9m8.8-4.79c.25-.15.55-.15.8 0l6.84 4.1-6.84 4.1c-.25.15-.55.15-.8 0l-6.84-4.1z" /></svg>;


      export const LayersRhombusOutlineIcon = createIcon("LayersRhombusOutlineIcon", SVGComponent, {
  "fileName": "abs-layers-rhombus.svg",
  "presentationName": "layers-rhombus",
  "style": "outline",
  "category": "interface"
});