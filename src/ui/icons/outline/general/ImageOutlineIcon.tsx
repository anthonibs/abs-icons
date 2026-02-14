import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="m20.77 15.83-2.61-6.09c-.55-1.27-1.39-2.01-2.38-2.06h-.09c-.95 0-1.83.64-2.48 1.81l-1.58 2.84c-.26.47-.61.75-.99.78-.37.04-.75-.18-1.1-.6l-.18-.23c-.68-.84-1.58-1.27-2.46-1.18-.89.1-1.67.71-2.16 1.68l-1.43 2.88c-.58 1.18-.52 2.55.16 3.66a3.72 3.72 0 0 0 3.2 1.78h10.64c1.28 0 2.45-.64 3.13-1.71.7-1.06.82-2.39.32-3.55ZM7.15 12.59c.36 0 .72.22 1.04.64l.18.23c.65.81 1.52 1.23 2.4 1.16.87-.08 1.66-.64 2.16-1.55l1.57-2.84c.36-.64.84-1.06 1.19-1.04.37.01.78.45 1.07 1.15l2.61 6.09c.31.71.24 1.48-.19 2.13s-1.11 1.02-1.89 1.02H6.68a2.252 2.252 0 0 1-2.02-3.27l1.43-2.87c.26-.51.61-.81.99-.85zm.68-3.17c1.79 0 3.25-1.46 3.25-3.25S9.62 2.92 7.83 2.92 4.58 4.38 4.58 6.17s1.46 3.25 3.25 3.25M6.08 6.17c0-.96.79-1.75 1.75-1.75s1.75.79 1.75 1.75-.79 1.75-1.75 1.75-1.75-.79-1.75-1.75" /></svg>;


      export const ImageOutlineIcon = createIcon("ImageOutlineIcon", SVGComponent, {
  "fileName": "abs-image.svg",
  "presentationName": "image",
  "style": "outline",
  "category": "general"
});