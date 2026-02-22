import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M19.79 11.37h-6.52c-.66 0-1.19-.53-1.19-1.19V3.66c0-.66.53-1.19 1.18-1.11a8.91 8.91 0 0 1 7.64 7.64c.09.65-.45 1.18-1.11 1.18M9.05 3.85c.67-.14 1.25.41 1.25 1.09v7.31c0 .21.07.41.2.57l4.9 5.91c.43.52.34 1.31-.26 1.63a8.8 8.8 0 0 1-4.25 1.08c-4.91 0-8.9-3.99-8.9-8.9 0-4.28 3.02-7.86 7.05-8.7Zm9.46 9.3h2.37c.69 0 1.23.58 1.09 1.25a8.9 8.9 0 0 1-2.58 4.6c-.46.43-1.17.34-1.57-.14l-3.13-3.77c-.64-.77-.09-1.94.91-1.94h2.9Z" /></svg>;


      export const ChartPieAltSolidIcon = createIcon("ChartPieAltSolidIcon", SVGComponent, {
  "fileName": "abs-chart-pie-alt-solid.svg",
  "presentationName": "chart-pie-alt",
  "style": "solid",
  "category": "analytics"
});