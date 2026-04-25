import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><g><path d="M21.25 20.44H12c-4.15 0-6.23 0-7.37-1.13-1.13-1.13-1.13-3.2-1.13-7.32V2.81c0-.41-.34-.75-.75-.75S2 2.4 2 2.81V12c0 4.54 0 6.81 1.58 8.38 1.57 1.56 3.86 1.56 8.42 1.56h9.25c.41 0 .75-.34.75-.75s-.34-.75-.75-.75" /><path d="M13 17.75c-.41 0-.75-.34-.75-.75V9c0-.41.34-.75.75-.75s.75.34.75.75v8c0 .41-.34.75-.75.75m5 0c-.41 0-.75-.34-.75-.75V5c0-.41.34-.75.75-.75s.75.34.75.75v12c0 .41-.34.75-.75.75m-10 0c-.41 0-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75" /></g></svg>;


      export const ChartColumnIncreasingOutlineIcon = createIcon("ChartColumnIncreasingOutlineIcon", SVGComponent, {
  "fileName": "abs-chart-column-increasing.svg",
  "presentationName": "chart-column-increasing",
  "style": "outline",
  "category": "analytics"
});