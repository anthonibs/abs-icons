import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path fillRule="evenodd" d="M19.76 4.24C18.2 2.69 15.81 2 12 2s-6.19.69-7.76 2.24C2.69 5.8 2 8.19 2 12s.69 6.2 2.24 7.76C5.8 21.31 8.19 22 12 22s6.2-.69 7.76-2.24C21.31 18.2 22 15.81 22 12s-.69-6.19-2.24-7.76m-2.72 9.42v2.98c0 .45-.37.81-.82.81s-.81-.36-.81-.81v-2.98c0-.44.37-.81.81-.81s.82.37.82.81M12.81 7.3v9.34c0 .45-.36.81-.81.81s-.81-.36-.81-.81V7.3c0-.45.36-.81.81-.81s.81.36.81.81m-4.29 3.02v6.32c0 .45-.37.81-.81.81s-.82-.36-.82-.81v-6.32c0-.44.37-.81.82-.81s.81.37.81.81" /></svg>;


      export const ChartBarsSquareSolidIcon = createIcon("ChartBarsSquareSolidIcon", SVGComponent, {
  "fileName": "abs-chart-bars-square-solid.svg",
  "presentationName": "chart-bars-square",
  "style": "solid",
  "category": "analytics"
});