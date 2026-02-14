import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><g><path d="M12 2.92c-.41 0-.75.34-.75.75s.34.75.75.75c4.18 0 7.58 3.4 7.58 7.58s-3.4 7.58-7.58 7.58-7.58-3.4-7.58-7.58c0-1.66.53-3.24 1.53-4.57a.72.72 0 0 0 .14-.55.749.749 0 0 0-1.34-.36A9 9 0 0 0 2.92 12c0 5.01 4.07 9.08 9.08 9.08s9.08-4.07 9.08-9.08S17.01 2.92 12 2.92" /><path d="M5.42 12c0 3.63 2.95 6.58 6.58 6.58s6.58-2.95 6.58-6.58S15.63 5.42 12 5.42c-.41 0-.75.34-.75.75s.34.75.75.75c2.8 0 5.08 2.28 5.08 5.08S14.8 17.08 12 17.08 6.92 14.8 6.92 12c0-.41-.34-.75-.75-.75s-.75.34-.75.75" /><path d="M12 14.58c-.41 0-.75.34-.75.75s.34.75.75.75c2.25 0 4.08-1.83 4.08-4.08S14.25 7.92 12 7.92c-.41 0-.75.34-.75.75s.34.75.75.75c1.42 0 2.58 1.16 2.58 2.58s-1.16 2.58-2.58 2.58" /></g></svg>;


      export const ChartPolarOutlineIcon = createIcon("ChartPolarOutlineIcon", SVGComponent, {
  "fileName": "abs-chart-polar.svg",
  "presentationName": "chart-polar",
  "style": "outline",
  "category": "analytics"
});