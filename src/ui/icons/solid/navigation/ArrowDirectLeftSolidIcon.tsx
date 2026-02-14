import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="m19.82 15.38-1.11-2.22c-.42-.84-.42-1.5-.14-2.06l1.23-2.47c.69-1.37.53-3.09-.57-4.16-1.08-1.05-2.64-1.27-3.97-.58L5.6 8.97c-1.13.59-1.83 1.75-1.83 3.02s.7 2.43 1.83 3.02l9.66 5.08c.51.27 1.05.41 1.61.41.91 0 1.79-.38 2.44-1.07 1.03-1.08 1.17-2.73.51-4.06Z" /></svg>;


      export const ArrowDirectLeftSolidIcon = createIcon("ArrowDirectLeftSolidIcon", SVGComponent, {
  "fileName": "abs-arrow-direct-left-solid.svg",
  "presentationName": "arrow-direct-left",
  "style": "solid",
  "category": "navigation"
});