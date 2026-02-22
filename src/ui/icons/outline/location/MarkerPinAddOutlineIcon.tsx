import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M14.53 10.33h-1.78V8.54c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.79H9.47c-.41 0-.75.34-.75.75s.34.75.75.75h1.78v1.79c0 .41.34.75.75.75s.75-.34.75-.75v-1.79h1.78c.41 0 .75-.34.75-.75s-.34-.75-.75-.75" /><path d="M20.43 8.6C19.41 4.04 15.46 2 12 2S4.6 4.04 3.57 8.59c-1.13 5.02 1.87 9.22 4.59 11.85C9.24 21.48 10.62 22 12 22s2.76-.52 3.83-1.56c2.72-2.63 5.73-6.82 4.6-11.84m-5.65 10.77a3.984 3.984 0 0 1-5.58 0C6.76 17 4.05 13.26 5.03 8.92c.9-4 4.32-5.42 6.97-5.42s6.07 1.42 6.97 5.43c.98 4.34-1.74 8.07-4.18 10.44Z" /></svg>;


      export const MarkerPinAddOutlineIcon = createIcon("MarkerPinAddOutlineIcon", SVGComponent, {
  "fileName": "abs-marker-pin-add.svg",
  "presentationName": "marker-pin-add",
  "style": "outline",
  "category": "location"
});