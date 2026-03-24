import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 19.01 9.31" color="currentColor" width="1em" height="1em" {...props}><path d="m13.8 1.33 2.32 2.32c.09.09.03.23-.1.23H.78a.781.781 0 0 0 0 1.56h15.25c.12 0 .18.15.1.23l-2.32 2.32c-.3.3-.3.79 0 1.1.3.3.79.3 1.1 0l3.88-3.88s0-.01.01-.02a.77.77 0 0 0 .15-.83.8.8 0 0 0-.15-.23s0-.01-.01-.02L14.91.23c-.3-.3-.79-.3-1.1 0-.3.3-.3.79 0 1.1z" /></svg>;


      export const ArrowForwardOutlineIcon = createIcon("ArrowForwardOutlineIcon", SVGComponent, {
  "fileName": "abs-arrow-forward.svg",
  "presentationName": "arrow-forward",
  "style": "outline",
  "category": "arrows"
});