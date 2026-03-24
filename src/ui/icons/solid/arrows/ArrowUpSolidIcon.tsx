import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 8 4.37" color="currentColor" width="1em" height="1em" {...props}><path d="M.62 4.37h6.77c.55 0 .82-.66.43-1.05L4.86.36c-.47-.47-1.25-.47-1.72 0L2.01 1.49.18 3.32a.617.617 0 0 0 .44 1.05" /></svg>;


      export const ArrowUpSolidIcon = createIcon("ArrowUpSolidIcon", SVGComponent, {
  "fileName": "abs-arrow-up-solid.svg",
  "presentationName": "arrow-up",
  "style": "solid",
  "category": "arrows"
});