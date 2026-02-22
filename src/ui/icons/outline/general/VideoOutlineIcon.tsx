import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M21.26 6.89c-.88-.95-3.19.41-4.74 1.52-.85-2.78-3.01-3.89-7.04-3.89C4.02 4.52 2 6.55 2 12.01s2.03 7.49 7.48 7.49c4.04 0 6.2-1.12 7.05-3.91 1.2.85 2.85 1.86 3.93 1.86.33 0 .6-.09.8-.3.98-1.05.99-9.18 0-10.24ZM9.48 17.99c-4.64 0-5.98-1.34-5.98-5.99s1.34-5.99 5.98-5.99c3.82 0 5.4.92 5.84 3.83v.06c.09.61.13 1.3.13 2.09s-.04 1.47-.13 2.08c0 .03 0 .06-.01.1-.44 2.9-2.03 3.81-5.84 3.81Zm10.75-2.07c-.59-.17-1.94-.89-3.37-1.96.07-.6.11-1.24.11-1.95s-.04-1.37-.11-1.97c1.43-1.08 2.78-1.8 3.36-1.95.39 1.32.38 6.55.02 7.83Z" /></svg>;


      export const VideoOutlineIcon = createIcon("VideoOutlineIcon", SVGComponent, {
  "fileName": "abs-video.svg",
  "presentationName": "video",
  "style": "outline",
  "category": "general"
});