import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 15.5 15.23" color="currentColor" width="1em" height="1em" {...props}><path d="m8.74.41 6.54 6.54c.29.29.29.77 0 1.06s-.77.29-1.06 0L8.5 2.29v12.19c0 .41-.34.75-.75.75S7 14.89 7 14.48V2.29L1.28 8.01c-.29.29-.77.29-1.06 0C.07 7.86 0 7.67 0 7.48s.07-.38.22-.53L6.76.41c.27-.27.62-.41.99-.41s.73.15.99.41" /></svg>;


      export const ArrowUpAltOutlineIcon = createIcon("ArrowUpAltOutlineIcon", SVGComponent, {
  "fileName": "abs-arrow-up-alt.svg",
  "presentationName": "arrow-up-alt",
  "style": "outline",
  "category": "arrows"
});