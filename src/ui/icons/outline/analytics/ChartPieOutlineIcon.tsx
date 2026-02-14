import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><g><path d="M22.07 7.21c-.73-2.47-2.8-4.54-5.27-5.27-1.88-.55-3.17-.5-4.06.16-1.06.8-1.18 2.25-1.18 3.28v2.88c0 2.78 1.26 4.19 3.75 4.19h3.32c1.03 0 2.48-.12 3.28-1.18.66-.88.71-2.17.16-4.06m-1.36 3.16c-.29.39-.97.58-2.08.58h-3.32c-1.39 0-2.25-.45-2.25-2.69V5.38c0-1.1.19-1.78.58-2.08.21-.16.53-.24.94-.24.47 0 1.07.11 1.79.32 1.96.58 3.67 2.29 4.25 4.25.4 1.35.42 2.27.08 2.74Z" /><path d="M20.45 13.66c-.41-.08-.8.18-.88.59-.89 4.42-5.09 7.3-9.57 6.58-3.46-.56-6.27-3.37-6.84-6.83-.72-4.46 2.16-8.66 6.55-9.56a.75.75 0 0 0 .59-.88.74.74 0 0 0-.88-.58c-5.18 1.05-8.58 6-7.73 11.26.67 4.09 3.99 7.41 8.08 8.07.55.09 1.09.13 1.62.13 4.64 0 8.71-3.22 9.65-7.9.08-.41-.18-.8-.59-.88" /></g></svg>;


      export const ChartPieOutlineIcon = createIcon("ChartPieOutlineIcon", SVGComponent, {
  "fileName": "abs-chart-pie.svg",
  "presentationName": "chart-pie",
  "style": "outline",
  "category": "analytics"
});