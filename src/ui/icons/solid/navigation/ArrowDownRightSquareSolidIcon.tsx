import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M21.99 10.6C21.73 3.89 19.38 2 12 2S2.19 3.95 2 10.94c-.02.34-.02.69-.02 1.06s0 .72.02 1.06C2.19 20.05 4.5 22 12 22s9.73-1.89 9.99-8.6c.02-.44.03-.91.03-1.4s-.01-.96-.03-1.4M8.64 7.15c.29-.29.77-.29 1.06 0l4.38 4.38V9.1c0-.41.34-.75.75-.75s.75.34.75.75v4.24c0 .1-.02.19-.06.29-.08.18-.22.33-.41.41-.09.04-.19.06-.29.06h-4.24c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.43L8.64 8.21a.754.754 0 0 1 0-1.06m9.6 10.07c-2.01.67-4.12 1.01-6.24 1.01s-4.23-.34-6.24-1.01a.753.753 0 0 1-.47-.95c.13-.39.55-.61.95-.47 3.72 1.24 7.81 1.24 11.53 0 .39-.13.82.08.95.47.12.4-.09.82-.48.95" /></svg>;


      export const ArrowDownRightSquareSolidIcon = createIcon("ArrowDownRightSquareSolidIcon", SVGComponent, {
  "fileName": "abs-arrow-down-right-square-solid.svg",
  "presentationName": "arrow-down-right-square",
  "style": "solid",
  "category": "navigation"
});