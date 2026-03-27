import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M15.38 9.82H8.61c-.55 0-.82.66-.43 1.05l2.96 2.96c.47.47 1.25.47 1.72 0l1.13-1.13 1.83-1.83a.617.617 0 0 0-.44-1.05" /></svg>;


      export const ArrowDownSolidIcon = createIcon("ArrowDownSolidIcon", SVGComponent, {
  "fileName": "abs-arrow-down-solid.svg",
  "presentationName": "arrow-down",
  "style": "solid",
  "category": "arrows"
});