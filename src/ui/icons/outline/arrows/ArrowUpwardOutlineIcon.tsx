import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="m15.33 7.71-2.32-2.32c-.09-.09-.23-.03-.23.1v15.24a.781.781 0 0 1-1.56 0V5.47c0-.12-.15-.18-.23-.1L8.67 7.69c-.3.3-.79.3-1.1 0-.3-.3-.3-.79 0-1.1l3.88-3.88s.01 0 .02-.01a.77.77 0 0 1 .83-.15c.09.04.17.09.23.15 0 0 .01 0 .02.01l3.88 3.88c.3.3.3.79 0 1.1-.3.3-.79.3-1.1 0Z" /></svg>;


      export const ArrowUpwardOutlineIcon = createIcon("ArrowUpwardOutlineIcon", SVGComponent, {
  "fileName": "abs-arrow-upward.svg",
  "presentationName": "arrow-upward",
  "style": "outline",
  "category": "arrows"
});