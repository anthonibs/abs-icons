import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M14.18 8.62v6.77c0 .55-.66.82-1.05.43l-2.96-2.96c-.47-.47-.47-1.25 0-1.72l1.13-1.13 1.83-1.83a.617.617 0 0 1 1.05.44" /></svg>;


      export const ArrowLeftSolidIcon = createIcon("ArrowLeftSolidIcon", SVGComponent, {
  "fileName": "abs-arrow-left-solid.svg",
  "presentationName": "arrow-left",
  "style": "solid",
  "category": "arrows"
});