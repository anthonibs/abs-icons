import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M21.25 20.44H12c-4.15 0-6.23 0-7.37-1.13-1.13-1.13-1.13-3.2-1.13-7.32V2.81c0-.41-.34-.75-.75-.75S2 2.4 2 2.81V12c0 4.54 0 6.81 1.58 8.38 1.57 1.56 3.86 1.56 8.42 1.56h9.25c.41 0 .75-.34.75-.75s-.34-.75-.75-.75" /><path d="M8.75 11.49c.49.61.76.94 1.15 1.15.6.32 1.32.33 1.93.04.4-.19.68-.52 1.2-1.11.33-.38.59-.68.71-.74.18-.09.4-.08.58.01.12.06.36.37.68.77l2.88 3.61c.15.19.37.28.59.28a.743.743 0 0 0 .59-1.21l-2.88-3.61c-.49-.61-.76-.95-1.15-1.16a2.15 2.15 0 0 0-1.93-.04c-.4.19-.68.52-1.2 1.11-.33.38-.6.68-.72.74-.18.09-.4.08-.58-.01-.12-.06-.36-.37-.68-.77L7.04 6.94a.757.757 0 0 0-1.05-.12c-.32.26-.38.73-.12 1.05l2.89 3.62Z" /></svg>;


      export const ChartLineDownOutlineIcon = createIcon("ChartLineDownOutlineIcon", SVGComponent, {
  "fileName": "abs-chart-line-down.svg",
  "presentationName": "chart-line-down",
  "style": "outline",
  "category": "analytics"
});