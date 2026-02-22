import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M12.8 12.49h-2.1c-.41 0-.75.34-.75.75s.34.75.75.75h3.9a.75.75 0 0 0 .52-.21h.01c.07-.07.13-.15.16-.24.04-.09.06-.19.06-.29V9.33c0-.41-.34-.75-.75-.75s-.75.34-.75.75v2.1L9.93 7.48a.754.754 0 0 0-1.06 0c-.29.29-.3.77 0 1.06l3.93 3.96Zm4.48 2.97a16.7 16.7 0 0 1-10.55 0 .753.753 0 0 0-.95.47c-.13.39.08.82.47.95 1.86.62 3.81.94 5.76.94s3.9-.31 5.76-.94c.39-.13.6-.56.47-.95s-.56-.6-.95-.47Z" /><path d="M12 2C4.13 2 1.98 4.15 1.98 12S4.13 22 12 22s10.02-2.15 10.02-10S19.87 2 12 2m0 18.5c-7.01 0-8.52-1.51-8.52-8.5S4.99 3.5 12 3.5s8.52 1.51 8.52 8.5-1.51 8.5-8.52 8.5" /></svg>;


      export const ArrowDownRightSquareOutlineIcon = createIcon("ArrowDownRightSquareOutlineIcon", SVGComponent, {
  "fileName": "abs-arrow-down-right-square.svg",
  "presentationName": "arrow-down-right-square",
  "style": "outline",
  "category": "navigation"
});