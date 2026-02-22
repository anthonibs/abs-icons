import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M12 21.75c-3.45 0-8.25-5.62-8.25-11.15 0-4.6 3.7-8.35 8.25-8.35S20.25 6 20.25 10.6c0 5.53-4.8 11.15-8.25 11.15m0-18c-3.72 0-6.75 3.07-6.75 6.85 0 4.88 4.27 9.65 6.75 9.65s6.75-4.77 6.75-9.65c0-3.78-3.03-6.85-6.75-6.85" /></svg>;


      export const MarkerPinSimpleOutlineIcon = createIcon("MarkerPinSimpleOutlineIcon", SVGComponent, {
  "fileName": "abs-marker-pin-simple.svg",
  "presentationName": "marker-pin-simple",
  "style": "outline",
  "category": "location"
});