import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M12 6.25c-2.07 0-3.75 1.68-3.75 3.75s1.68 3.75 3.75 3.75 3.75-1.68 3.75-3.75S14.07 6.25 12 6.25m0 6c-1.24 0-2.25-1.01-2.25-2.25S10.76 7.75 12 7.75s2.25 1.01 2.25 2.25-1.01 2.25-2.25 2.25m0-10c-4.42 0-7.75 3.33-7.75 7.75 0 6.21 4.74 10.08 6.77 11.45.3.2.64.3.98.3s.68-.1.97-.3c2.04-1.38 6.78-5.25 6.78-11.45 0-4.42-3.33-7.75-7.75-7.75m.13 17.96c-.08.06-.19.06-.27 0-1.43-.97-6.11-4.57-6.11-10.21 0-3.56 2.69-6.25 6.25-6.25s6.25 2.69 6.25 6.25c0 5.48-4.28 8.97-6.12 10.21" /></svg>;


      export const MarkerPinOutlineIcon = createIcon("MarkerPinOutlineIcon", SVGComponent, {
  "fileName": "abs-marker-pin.svg",
  "presentationName": "marker-pin",
  "style": "outline",
  "category": "location"
});