import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M12 5.56c.65 0 1.17.52 1.17 1.17S12.65 7.9 12 7.9s-1.17-.52-1.17-1.17.52-1.17 1.17-1.17M10.83 12c0 .65.52 1.17 1.17 1.17s1.17-.52 1.17-1.17-.52-1.17-1.17-1.17-1.17.52-1.17 1.17m0 5.27c0 .65.52 1.17 1.17 1.17s1.17-.52 1.17-1.17-.52-1.17-1.17-1.17-1.17.52-1.17 1.17" /></svg>;


      export const MoreCircleVOutlineIcon = createIcon("MoreCircleVOutlineIcon", SVGComponent, {
  "fileName": "abs-more-circle-v.svg",
  "presentationName": "more-circle-v",
  "style": "outline",
  "category": "general"
});