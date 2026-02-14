import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="m20.4 11.11-8.27 4.96c-.08.05-.18.05-.26 0L3.6 11.11a.807.807 0 0 0-1.1.27c-.23.38-.1.87.27 1.1l8.71 5.23c.32.19.71.19 1.03 0l8.71-5.23c.38-.23.5-.72.27-1.1s-.72-.5-1.1-.27Z" /><path d="m20.4 14.77-8.27 4.96c-.08.05-.18.05-.26 0L3.6 14.77a.807.807 0 0 0-1.1.27c-.23.38-.1.87.27 1.1l8.68 5.21c.34.2.75.2 1.09 0l8.68-5.21c.38-.23.5-.72.27-1.1a.8.8 0 0 0-1.1-.27ZM2.78 9.01l8 4.8c.75.45 1.7.45 2.45 0l8-4.8c.38-.23.5-.72.27-1.1a.8.8 0 0 0-.27-.27l-8-4.8c-.75-.45-1.7-.45-2.45 0l-8 4.8c-.38.23-.5.72-.27 1.1.07.11.16.21.27.27" /></svg>;


      export const LayersDoubleSolidIcon = createIcon("LayersDoubleSolidIcon", SVGComponent, {
  "fileName": "abs-layers-double-solid.svg",
  "presentationName": "layers-double",
  "style": "solid",
  "category": "interface"
});