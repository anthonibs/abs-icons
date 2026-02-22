import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M12 7.5a2.23 2.23 0 0 1-1.59-.66c-.21-.21-.37-.46-.49-.73a2.27 2.27 0 0 1 0-1.72c.11-.27.28-.52.49-.73s.46-.37.73-.49a2.25 2.25 0 0 1 2.45.49A2.248 2.248 0 0 1 12 7.5m0 2.25a2.23 2.23 0 0 1 1.59.66c.21.21.37.46.49.73a2.27 2.27 0 0 1 0 1.72c-.11.27-.28.52-.49.73s-.46.37-.73.49a2.25 2.25 0 0 1-2.45-.49A2.248 2.248 0 0 1 12 9.75m0 6.75a2.23 2.23 0 0 1 1.59.66c.21.21.37.46.49.73a2.27 2.27 0 0 1 0 1.72c-.11.27-.28.52-.49.73s-.46.37-.73.49a2.25 2.25 0 0 1-2.45-.49A2.248 2.248 0 0 1 12 16.5" /></svg>;


      export const MoreCircleVOutlineIcon = createIcon("MoreCircleVOutlineIcon", SVGComponent, {
  "fileName": "abs-more-circle-v.svg",
  "presentationName": "more-circle-v",
  "style": "outline",
  "category": "general"
});