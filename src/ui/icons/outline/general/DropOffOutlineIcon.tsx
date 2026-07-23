import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M10.17 5.97c.73-.7 1.39-1.22 1.78-1.53.02-.02.04-.02.05-.02s.04 0 .06.02c1.4 1.08 5.98 4.93 5.95 9.15 0 .39-.04.78-.11 1.15h.02c0 .05-.03.09-.03.14 0 .41.33.75.74.75.32 0 .59-.21.69-.5.24-.7.17-.72.17-1.54.03-4.76-4.56-8.82-6.53-10.35a1.62 1.62 0 0 0-1.94 0c-.5.39-1.18.94-1.91 1.63-.31.3-.32.79-.02 1.1s.77.3 1.06 0Zm10.76 13.9L4.13 3.07c-.29-.29-.77-.29-1.06 0s-.29.77 0 1.06L6.64 7.7c-1.21 1.69-2.15 3.7-2.13 5.89 0 4.14 3.36 7.5 7.5 7.5 2.21 0 4.18-.96 5.54-2.48l2.33 2.33c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06Zm-8.92-.29c-3.31 0-6-2.69-6-6-.02-1.73.73-3.38 1.71-4.8l8.77 8.77a5.98 5.98 0 0 1-4.48 2.03" /></svg>;


      export const DropOffOutlineIcon = createIcon("DropOffOutlineIcon", SVGComponent, {
  "fileName": "abs-drop-off.svg",
  "presentationName": "drop-off",
  "style": "outline",
  "category": "general",
  "isNew": true
});