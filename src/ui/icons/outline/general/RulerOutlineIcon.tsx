import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M18.51 6.65H5.49C3.24 6.65 2 7.89 2 10.14v3.72c0 2.25 1.24 3.49 3.49 3.49h13.02c2.25 0 3.49-1.24 3.49-3.49v-3.72c0-2.25-1.24-3.49-3.49-3.49m2.09 7.21c0 1.47-.63 2.09-2.09 2.09H5.49c-1.47 0-2.09-.63-2.09-2.09v-3.72c0-1.47.63-2.09 2.09-2.09h.23v3.02c0 .39.31.7.7.7s.7-.31.7-.7V8.05h2.36L9.44 12c0 .39.31.7.69.7s.69-.31.7-.69l.04-3.96h2.29v2.09c0 .39.31.7.7.7s.7-.31.7-.7V8.05h2.33V12c0 .39.31.7.7.7s.7-.31.7-.7V8.05h.23c1.47 0 2.09.63 2.09 2.09v3.72Z" /></svg>;


      export const RulerOutlineIcon = createIcon("RulerOutlineIcon", SVGComponent, {
  "fileName": "abs-ruler.svg",
  "presentationName": "ruler",
  "style": "outline",
  "category": "general"
});