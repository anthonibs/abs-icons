import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 19.01 9.31" color="currentColor" width="1em" height="1em" {...props}><path d="M5.21 1.33 2.89 3.65c-.09.09-.03.23.1.23h15.24a.781.781 0 0 1 0 1.56H2.98c-.12 0-.18.15-.1.23L5.2 7.99c.3.3.3.79 0 1.1-.3.3-.79.3-1.1 0L.22 5.21s0-.01-.01-.02a.77.77 0 0 1-.15-.83c.04-.09.09-.17.15-.23 0 0 0-.01.01-.02L4.1.23c.3-.3.79-.3 1.1 0 .3.3.3.79 0 1.1z" /></svg>;


      export const ArrowBackOutlineIcon = createIcon("ArrowBackOutlineIcon", SVGComponent, {
  "fileName": "abs-arrow-back.svg",
  "presentationName": "arrow-back",
  "style": "outline",
  "category": "arrows"
});