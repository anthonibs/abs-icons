import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M20.24 19.16c.59-.59.1-1.55-.71-1.67-2.89-.43-5.56-2.17-7.13-4.97-1.6-2.85-1.71-6.17-.56-9 .32-.78-.23-1.7-1.03-1.48C6.6 3.2 3.5 7.15 3.5 11.84 3.5 17.45 7.92 22 13.38 22c2.66 0 5.08-1.08 6.86-2.84" /></svg>;


      export const MoonSolidIcon = createIcon("MoonSolidIcon", SVGComponent, {
  "fileName": "abs-moon-solid.svg",
  "presentationName": "moon",
  "style": "solid",
  "category": "general"
});