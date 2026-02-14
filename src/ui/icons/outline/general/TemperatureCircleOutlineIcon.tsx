import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M9.62 21.5c-4.81.09-7.39-6.05-3.96-9.41V6.46c.17-5.23 7.75-5.22 7.92 0v5.63c3.43 3.37.85 9.5-3.96 9.41m0-17.42c-1.31 0-2.37 1.06-2.37 2.37v5.97c0 .22-.1.44-.26.59a3.97 3.97 0 0 0 2.64 6.9c2.19-.02 3.95-1.82 3.93-4.02-.01-1.1-.48-2.14-1.29-2.89a.77.77 0 0 1-.26-.59V6.44c0-1.31-1.06-2.37-2.37-2.37Zm0 14.25a2.386 2.386 0 0 1-2.35-2.41c.01-.99.63-1.86 1.56-2.2V6.46c0-.44.35-.79.79-.79s.79.35.79.79v7.26c1.23.45 1.87 1.82 1.41 3.06-.34.93-1.22 1.55-2.2 1.56Zm0-3.17c-.44 0-.79.35-.79.79s.35.79.79.79.79-.35.79-.79-.35-.79-.79-.79m7.92-7.92c-1.31 0-2.37-1.06-2.37-2.37s1.06-2.37 2.37-2.37 2.37 1.06 2.37 2.37-1.06 2.37-2.37 2.37m0-3.17c-.44 0-.79.35-.79.79s.35.79.79.79.79-.35.79-.79-.35-.79-.79-.79" /></svg>;


      export const TemperatureCircleOutlineIcon = createIcon("TemperatureCircleOutlineIcon", SVGComponent, {
  "fileName": "abs-temperature-circle.svg",
  "presentationName": "temperature-circle",
  "style": "outline",
  "category": "general"
});