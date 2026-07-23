import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M6 10.75c-1.52 0-2.75-1.23-2.75-2.75S4.48 5.25 6 5.25 8.75 6.48 8.75 8 7.52 10.75 6 10.75m0-4a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m11 12h-1c-2.07 0-3.75-1.68-3.75-3.75V9c0-2.07 1.68-3.75 3.75-3.75h1c2.07 0 3.75 1.68 3.75 3.75 0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-1.24-1.01-2.25-2.25-2.25h-1c-1.24 0-2.25 1.01-2.25 2.25v6c0 1.24 1.01 2.25 2.25 2.25h1c1.24 0 2.25-1.01 2.25-2.25 0-.41.34-.75.75-.75s.75.34.75.75c0 2.07-1.68 3.75-3.75 3.75" /></svg>;


      export const TemperatureCelsiusOutlineIcon = createIcon("TemperatureCelsiusOutlineIcon", SVGComponent, {
  "fileName": "abs-temperature-celsius.svg",
  "presentationName": "temperature-celsius",
  "style": "outline",
  "category": "nature",
  "isNew": true
});