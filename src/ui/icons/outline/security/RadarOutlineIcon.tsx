import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M12 9.25c-1.52 0-2.75 1.23-2.75 2.75s1.23 2.75 2.75 2.75 2.75-1.23 2.75-2.75S13.52 9.25 12 9.25m0 4a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5m8.6-7.7a.75.75 0 0 0-1.2.9c1.21 1.6 1.85 3.52 1.85 5.55s-.64 3.95-1.85 5.55a.75.75 0 0 0 1.2.9c1.41-1.87 2.15-4.1 2.15-6.45s-.74-4.59-2.15-6.45M4.45 5.4a.75.75 0 0 0-1.05.15C1.99 7.42 1.25 9.65 1.25 12s.74 4.59 2.15 6.45c.15.2.37.3.6.3a.75.75 0 0 0 .6-1.2c-1.21-1.6-1.85-3.52-1.85-5.55s.64-3.95 1.85-5.55a.75.75 0 0 0-.15-1.05m11.9 2.4a.75.75 0 0 0-.15 1.05c.69.92 1.05 2.01 1.05 3.15s-.36 2.23-1.05 3.15a.75.75 0 0 0 1.2.9c.88-1.18 1.35-2.58 1.35-4.05s-.47-2.87-1.35-4.05a.75.75 0 0 0-1.05-.15m-8.7 0a.75.75 0 0 0-1.05.15C5.72 9.13 5.25 10.53 5.25 12s.47 2.87 1.35 4.05c.15.2.37.3.6.3q.24 0 .45-.15c.33-.25.4-.72.15-1.05-.69-.92-1.05-2.01-1.05-3.15s.36-2.23 1.05-3.15a.75.75 0 0 0-.15-1.05" /></svg>;


      export const RadarOutlineIcon = createIcon("RadarOutlineIcon", SVGComponent, {
  "fileName": "abs-radar.svg",
  "presentationName": "radar",
  "style": "outline",
  "category": "security"
});