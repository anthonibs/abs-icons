import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M11.99 22c-.77 0-1.53-.2-2.21-.6-2.11-1.24-2.84-3.98-1.62-6.11.31-.54.73-1.01 1.22-1.38V4.64C9.38 3.18 10.55 2 12 2s2.62 1.18 2.62 2.64v9.26c1.8 1.33 2.37 3.86 1.22 5.85a4.36 4.36 0 0 1-2.71 2.09c-.38.1-.76.15-1.15.15Zm0-18.4c-.56 0-1.02.47-1.02 1.04v10.15l-.4.23c-.43.25-.79.62-1.04 1.05a2.903 2.903 0 0 0 1.04 3.94 2.81 2.81 0 0 0 3.87-1.05c.79-1.38.32-3.14-1.04-3.94l-.4-.23V4.64c0-.57-.46-1.04-1.02-1.04Z" /></svg>;


      export const TemperatureOutlineIcon = createIcon("TemperatureOutlineIcon", SVGComponent, {
  "fileName": "abs-temperature.svg",
  "presentationName": "temperature",
  "style": "outline",
  "category": "general"
});