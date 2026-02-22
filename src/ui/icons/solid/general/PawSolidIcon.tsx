import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path fillRule="evenodd" d="M15.09 3.43c-1.46 0-2.36 1.43-2.36 2.81s.91 2.81 2.36 2.81 2.36-1.43 2.36-2.81-.91-2.81-2.36-2.81M6.55 6.24c0-1.38.91-2.81 2.36-2.81s2.36 1.43 2.36 2.81-.91 2.81-2.36 2.81-2.36-1.43-2.36-2.81m13.01 2.52c-1.47 0-2.45 1.39-2.45 2.81s.97 2.81 2.45 2.81 2.45-1.39 2.45-2.81-.97-2.81-2.45-2.81M2 11.57c0-1.42.97-2.81 2.45-2.81s2.45 1.39 2.45 2.81-.97 2.81-2.45 2.81S2 12.99 2 11.57m10-.13c-1.72 0-3 .89-3.82 2.02-.81 1.1-1.22 2.48-1.22 3.6 0 1.31.81 2.21 1.79 2.75.96.53 2.17.76 3.25.76s2.29-.23 3.25-.76c.98-.54 1.79-1.44 1.79-2.75 0-1.12-.41-2.49-1.22-3.6-.82-1.12-2.1-2.02-3.82-2.02" /></svg>;


      export const PawSolidIcon = createIcon("PawSolidIcon", SVGComponent, {
  "fileName": "abs-paw-solid.svg",
  "presentationName": "paw",
  "style": "solid",
  "category": "general"
});