import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path fillRule="evenodd" d="M12 2.5c-4.41 0-8 3.63-8 8.1 0 5.41 4.65 10.9 8 10.9s8-5.49 8-10.9c0-4.47-3.59-8.1-8-8.1m.01 11.07a2.86 2.86 0 1 1-.001-5.719 2.86 2.86 0 0 1 .001 5.719" /></svg>;


      export const MarkerPinSolidIcon = createIcon("MarkerPinSolidIcon", SVGComponent, {
  "fileName": "abs-marker-pin-solid.svg",
  "presentationName": "marker-pin",
  "style": "solid",
  "category": "location"
});