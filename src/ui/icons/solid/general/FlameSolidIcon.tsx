import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M16.78 7.52c-1.14-1.34-2.12-2.5-2.26-4.21-.03-.37-.26-.7-.59-.86a1 1 0 0 0-1 .07c-2.59 1.75-3.25 5.06-3.4 7.1-.12-.26-.22-.58-.25-.98-.04-.37-.26-.69-.59-.85a1 1 0 0 0-1 .07c-2.15 1.41-3.43 3.76-3.43 6.28 0 4.14 3.48 7.5 7.75 7.5s7.75-3.36 7.75-7.5c0-3.13-1.58-4.99-2.97-6.62Z" /></svg>;


      export const FlameSolidIcon = createIcon("FlameSolidIcon", SVGComponent, {
  "fileName": "abs-flame-solid.svg",
  "presentationName": "flame",
  "style": "solid",
  "category": "general"
});