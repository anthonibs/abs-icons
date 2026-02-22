import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M16.21 7.58c-.35-4.15-2.18-5.42-7.09-5.42-5.54 0-7.14 1.61-7.14 7.15 0 5.07 1.34 6.84 5.81 7.11.35 4.15 2.18 5.42 7.09 5.42 5.54 0 7.14-1.61 7.14-7.15 0-5.07-1.34-6.84-5.81-7.11m-8.48 7.33c-3.49-.21-4.25-1.42-4.25-5.6 0-4.7.95-5.65 5.64-5.65 4.04 0 5.31.7 5.59 3.89.04.45.05.95.06 1.5v.26c0 4.65-.93 5.62-5.54 5.64h-.11c-.51 0-.97-.01-1.39-.04m7.15 5.43c-4.04 0-5.31-.7-5.59-3.89 5.4-.03 6.98-1.66 6.98-7.14v-.22c3.49.21 4.25 1.42 4.25 5.6 0 4.7-.95 5.65-5.64 5.65" /></svg>;


      export const GroupOutlineIcon = createIcon("GroupOutlineIcon", SVGComponent, {
  "fileName": "abs-group.svg",
  "presentationName": "group",
  "style": "outline",
  "category": "general"
});