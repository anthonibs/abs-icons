import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><g><path d="M7.77 9.55c-.44 0-.8.36-.8.8v6.22c0 .44.36.8.8.8s.8-.36.8-.8v-6.22c0-.44-.36-.8-.8-.8M12 6.57c-.44 0-.8.36-.8.8v9.2c0 .44.36.8.8.8s.8-.36.8-.8v-9.2c0-.44-.36-.8-.8-.8m4.16 6.27c-.44 0-.8.36-.8.8v2.93c0 .44.36.8.8.8s.8-.36.8-.8v-2.93c0-.44-.36-.8-.8-.8" /><path d="M19.64 4.36C18.11 2.83 15.75 2.15 12 2.15s-6.1.68-7.64 2.21C2.83 5.89 2.15 8.25 2.15 12s.68 6.11 2.21 7.64 3.89 2.21 7.64 2.21 6.11-.68 7.64-2.21 2.21-3.89 2.21-7.64-.68-6.1-2.21-7.64m-1.13 14.15c-1.21 1.21-3.22 1.75-6.51 1.75s-5.3-.54-6.51-1.75S3.74 15.29 3.74 12s.54-5.3 1.75-6.51S8.7 3.74 12 3.74s5.3.54 6.51 1.75S20.26 8.7 20.26 12s-.54 5.3-1.75 6.51" /></g></svg>;


      export const ChartBarsSquareOutlineIcon = createIcon("ChartBarsSquareOutlineIcon", SVGComponent, {
  "fileName": "abs-chart-bars-square.svg",
  "presentationName": "chart-bars-square",
  "style": "outline",
  "category": "analytics"
});