import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M12.71 9.29a.996.996 0 0 0-1.41 0l-4 4c-.2.2-.29.45-.29.71s.1.51.29.71c.39.39 1.02.39 1.41 0l2.84-2.84c.25-.25.66-.25.92 0l2.84 2.84a.996.996 0 1 0 1.41-1.41l-4-4Z" /></svg>;


      export const ArrowUpOutlineIcon = createIcon("ArrowUpOutlineIcon", SVGComponent, {
  "fileName": "abs-arrow-up.svg",
  "presentationName": "arrow-up",
  "style": "outline",
  "category": "navigation"
});