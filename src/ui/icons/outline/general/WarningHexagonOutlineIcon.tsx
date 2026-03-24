import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M12 13.67c.41 0 .75-.34.75-.75V7.37c0-.41-.34-.75-.75-.75s-.75.34-.75.75v5.55c0 .41.34.75.75.75" /><circle cx={12} cy={15.7} r={0.92} /><path d="M20.41 7.01c-.6-1.09-1.65-1.71-3.58-2.86l-.63-.38C14.28 2.63 13.22 2 11.99 2s-2.29.63-4.21 1.77l-.65.39C5.23 5.29 4.18 5.92 3.58 7c-.61 1.09-.61 2.27-.61 4.62v.75c0 2.35 0 3.53.61 4.61.6 1.09 1.65 1.71 3.58 2.86l.63.38c1.92 1.14 2.98 1.77 4.21 1.77s2.29-.63 4.21-1.77l.65-.39c1.9-1.13 2.95-1.76 3.55-2.84.61-1.09.61-2.27.61-4.62v-.75c0-2.35 0-3.53-.61-4.61m-.89 5.36c0 2.09 0 3.14-.42 3.89-.4.73-1.27 1.25-3.04 2.3l-.62.37c-3.49 2.08-3.39 2.08-6.87 0l-.66-.39c-1.73-1.03-2.6-1.55-3.01-2.29-.42-.74-.42-1.79-.42-3.88v-.75c0-2.09 0-3.14.42-3.89.4-.73 1.27-1.25 3.04-2.3l.62-.37c3.49-2.08 3.39-2.08 6.87 0l.66.39c1.73 1.03 2.6 1.55 3.01 2.29.42.74.42 1.79.42 3.88z" /></svg>;


      export const WarningHexagonOutlineIcon = createIcon("WarningHexagonOutlineIcon", SVGComponent, {
  "fileName": "abs-warning-hexagon.svg",
  "presentationName": "warning-hexagon",
  "style": "outline",
  "category": "general"
});