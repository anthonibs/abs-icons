import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M18.44 12c0 .65-.52 1.17-1.17 1.17S16.1 12.65 16.1 12s.52-1.17 1.17-1.17 1.17.52 1.17 1.17M12 10.83c-.65 0-1.17.52-1.17 1.17s.52 1.17 1.17 1.17 1.17-.52 1.17-1.17-.52-1.17-1.17-1.17m-5.27 0c-.65 0-1.17.52-1.17 1.17s.52 1.17 1.17 1.17S7.9 12.65 7.9 12s-.52-1.17-1.17-1.17" /></svg>;


      export const MoreCircleHOutlineIcon = createIcon("MoreCircleHOutlineIcon", SVGComponent, {
  "fileName": "abs-more-circle-h.svg",
  "presentationName": "more-circle-h",
  "style": "outline",
  "category": "general"
});