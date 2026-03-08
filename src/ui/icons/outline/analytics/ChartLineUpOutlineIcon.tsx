import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M21.25 21.94H12c-4.56 0-6.85 0-8.42-1.56C2 18.81 2 16.54 2 12V2.81c0-.41.34-.75.75-.75s.75.34.75.75V12c0 4.12 0 6.19 1.13 7.32 1.14 1.13 3.22 1.13 7.37 1.13h9.25c.41 0 .75.34.75.75s-.34.75-.75.75Z" /><path d="M6.45 15.51a.743.743 0 0 1-.59-1.21l2.88-3.61c.49-.62.76-.95 1.15-1.16.6-.32 1.32-.33 1.93-.04.4.19.68.52 1.2 1.11.33.38.6.68.72.74.18.09.4.08.58-.01.12-.06.37-.37.68-.77l2.89-3.61c.26-.32.73-.37 1.05-.12.32.26.38.73.12 1.05l-2.88 3.61c-.49.61-.76.95-1.15 1.16-.6.32-1.32.33-1.93.04-.4-.19-.69-.52-1.2-1.11-.33-.38-.6-.68-.72-.74a.66.66 0 0 0-.58.01c-.12.06-.36.37-.68.76l-2.89 3.62c-.15.19-.37.28-.59.28Z" /></svg>;


      export const ChartLineUpOutlineIcon = createIcon("ChartLineUpOutlineIcon", SVGComponent, {
  "fileName": "abs-chart-line-up.svg",
  "presentationName": "chart-line-up",
  "style": "outline",
  "category": "analytics"
});