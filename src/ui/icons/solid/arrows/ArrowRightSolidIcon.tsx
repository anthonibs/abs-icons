import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 4.37 8" color="currentColor" width="1em" height="1em" {...props}><path d="M0 .62v6.77c0 .55.66.82 1.05.43l2.96-2.96c.47-.47.47-1.25 0-1.72L2.88 2.01 1.05.18A.617.617 0 0 0 0 .62" /></svg>;


      export const ArrowRightSolidIcon = createIcon("ArrowRightSolidIcon", SVGComponent, {
  "fileName": "abs-arrow-right-solid.svg",
  "presentationName": "arrow-right",
  "style": "solid",
  "category": "arrows"
});