import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M12 21.5c-3.06 0-7.92-5.32-7.92-10.98C4.08 6.09 7.62 2.5 12 2.5s7.92 3.59 7.92 8.02c0 5.66-4.86 10.98-7.92 10.98" /></svg>;


      export const MarkerPinSimpleSolidIcon = createIcon("MarkerPinSimpleSolidIcon", SVGComponent, {
  "fileName": "abs-marker-pin-simple-solid.svg",
  "presentationName": "marker-pin-simple",
  "style": "solid",
  "category": "location"
});