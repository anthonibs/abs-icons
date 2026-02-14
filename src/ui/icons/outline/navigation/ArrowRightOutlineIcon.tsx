import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M14.71 11.29c.39.39.39 1.02 0 1.41l-4 4c-.2.2-.45.29-.71.29s-.51-.1-.71-.29a.996.996 0 0 1 0-1.41l2.84-2.84c.25-.25.25-.66 0-.92L9.29 8.69a.996.996 0 1 1 1.41-1.41l4 4Z" /></svg>;


      export const ArrowRightOutlineIcon = createIcon("ArrowRightOutlineIcon", SVGComponent, {
  "fileName": "abs-arrow-right.svg",
  "presentationName": "arrow-right",
  "style": "outline",
  "category": "navigation"
});