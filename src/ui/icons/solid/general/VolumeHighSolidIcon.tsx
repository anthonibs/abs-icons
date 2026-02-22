import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path fillRule="evenodd" d="M19.95 5.41a.746.746 0 0 0-1.04-.21c-.34.23-.44.7-.21 1.04 2.31 3.45 2.31 8.08 0 11.53-.23.34-.14.81.21 1.04q.195.12.42.12c.24 0 .48-.11.62-.33 2.65-3.94 2.65-9.24 0-13.19" /><path fillRule="evenodd" d="M16.51 7.61c-.36.2-.49.66-.29 1.02a7.04 7.04 0 0 1 0 6.75c-.2.36-.07.82.29 1.02a.76.76 0 0 0 1.02-.3c1.4-2.52 1.4-5.66 0-8.19-.2-.37-.66-.5-1.02-.3m-4.22-2.49c-1.71-1.02-3.28.19-4.42 1.07-.47.36-.91.7-1.25.81-.46.15-.85.19-1.24.24-.67.08-1.36.16-2.11.8-1.21 1.03-1.21 2.66-1.21 3.97 0 1.3 0 2.93 1.21 3.96.75.64 1.44.72 2.11.8.38.05.78.09 1.24.24.34.12.78.46 1.25.81.83.64 1.89 1.45 3.07 1.45.45 0 .91-.12 1.39-.4 1.37-.97 1.85-2.77 1.85-6.86s-.47-5.89-1.88-6.89Z" /></svg>;


      export const VolumeHighSolidIcon = createIcon("VolumeHighSolidIcon", SVGComponent, {
  "fileName": "abs-volume-high-solid.svg",
  "presentationName": "volume-high",
  "style": "solid",
  "category": "general"
});