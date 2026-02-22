import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M14.53 11.83H9.48c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.05c.41 0 .75.34.75.75s-.34.75-.75.75" /><path d="M12 22.01a5.52 5.52 0 0 1-3.84-1.56C5.44 17.81 2.44 13.62 3.57 8.6 4.6 4.05 8.54 2.01 12 2.01s7.4 2.04 8.43 6.6c1.13 5.02-1.88 9.21-4.6 11.84A5.48 5.48 0 0 1 12 22.01M5.03 8.92C4.06 13.26 6.76 17 9.2 19.37a3.984 3.984 0 0 0 5.58 0c2.45-2.37 5.16-6.1 4.18-10.44-.9-4-4.31-5.43-6.97-5.43-2.65 0-6.06 1.42-6.97 5.42Z" /></svg>;


      export const MarkerPinMinusOutlineIcon = createIcon("MarkerPinMinusOutlineIcon", SVGComponent, {
  "fileName": "abs-marker-pin-minus.svg",
  "presentationName": "marker-pin-minus",
  "style": "outline",
  "category": "location"
});