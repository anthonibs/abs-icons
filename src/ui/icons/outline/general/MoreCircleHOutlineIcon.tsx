import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M16.5 12a2.23 2.23 0 0 1 .66-1.59c.21-.21.46-.37.73-.49a2.27 2.27 0 0 1 1.72 0c.27.11.52.28.73.49s.37.46.49.73a2.25 2.25 0 0 1-.49 2.45A2.248 2.248 0 0 1 16.5 12m-2.25 0a2.23 2.23 0 0 1-.66 1.59c-.21.21-.46.37-.73.49a2.27 2.27 0 0 1-1.72 0c-.27-.11-.52-.28-.73-.49s-.37-.46-.49-.73a2.25 2.25 0 0 1 .49-2.45A2.248 2.248 0 0 1 14.25 12M7.5 12a2.23 2.23 0 0 1-.66 1.59c-.21.21-.46.37-.73.49a2.27 2.27 0 0 1-1.72 0c-.27-.11-.52-.28-.73-.49s-.37-.46-.49-.73a2.25 2.25 0 0 1 .49-2.45A2.248 2.248 0 0 1 7.5 12" /></svg>;


      export const MoreCircleHOutlineIcon = createIcon("MoreCircleHOutlineIcon", SVGComponent, {
  "fileName": "abs-more-circle-h.svg",
  "presentationName": "more-circle-h",
  "style": "outline",
  "category": "general"
});