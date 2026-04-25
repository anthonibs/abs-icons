import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M19.67 13.63c0-.39-.31-.7-.7-.7h-2.79c-.39 0-.7.31-.7.7v6.28h-1.4V4.79c0-.68 0-1.12-.04-1.44-.04-.3-.11-.4-.16-.45s-.15-.12-.45-.16c-.32-.04-.76-.04-1.44-.04s-1.12 0-1.44.04c-.3.04-.4.11-.45.16s-.12.15-.16.45c-.04.32-.04.76-.04 1.44v15.12H8.5V8.98c0-.39-.31-.7-.7-.7H5.01c-.39 0-.7.31-.7.7v10.93H2.68c-.39 0-.7.31-.7.7s.31.7.7.7h18.6c.39 0 .7-.31.7-.7s-.31-.7-.7-.7h-1.63v-6.28Z" /></svg>;


      export const ChartHistogramTwoSolidIcon = createIcon("ChartHistogramTwoSolidIcon", SVGComponent, {
  "fileName": "abs-chart-histogram-two-solid.svg",
  "presentationName": "chart-histogram-two",
  "style": "solid",
  "category": "analytics"
});