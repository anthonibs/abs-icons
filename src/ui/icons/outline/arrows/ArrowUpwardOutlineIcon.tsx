import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 9.31 19.01" color="currentColor" width="1em" height="1em" {...props}><path d="M7.98 5.21 5.66 2.89c-.09-.09-.23-.03-.23.1v15.24a.781.781 0 0 1-1.56 0V2.98c0-.12-.15-.18-.23-.1L1.32 5.2c-.3.3-.79.3-1.1 0-.3-.3-.3-.79 0-1.1L4.1.22s.01 0 .02-.01c.07-.06.15-.12.23-.15a.82.82 0 0 1 .61 0c.09.04.17.09.23.15 0 0 .01 0 .02.01L9.09 4.1c.3.3.3.79 0 1.1-.3.3-.79.3-1.1 0Z" /></svg>;


      export const ArrowUpwardOutlineIcon = createIcon("ArrowUpwardOutlineIcon", SVGComponent, {
  "fileName": "abs-arrow-upward.svg",
  "presentationName": "arrow-upward",
  "style": "outline",
  "category": "arrows"
});