import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M11.29 14.71c.39.39 1.02.39 1.41 0l4-4c.2-.2.29-.45.29-.71s-.1-.51-.29-.71a.996.996 0 0 0-1.41 0l-2.84 2.84c-.25.25-.66.25-.92 0L8.69 9.29a.996.996 0 1 0-1.41 1.41l4 4Z" /></svg>;


      export const ArrowDownOutlineIcon = createIcon("ArrowDownOutlineIcon", SVGComponent, {
  "fileName": "abs-arrow-down.svg",
  "presentationName": "arrow-down",
  "style": "outline",
  "category": "navigation"
});