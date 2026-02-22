import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M11.25 12.67V17c0 .41.34.75.75.75s.75-.34.75-.75v-4.33c2.54-.37 4.5-2.54 4.5-5.17a5.25 5.25 0 1 0-10.5 0c0 2.64 1.96 4.81 4.5 5.17M12 3.75c2.07 0 3.75 1.68 3.75 3.75s-1.68 3.75-3.75 3.75S8.25 9.57 8.25 7.5 9.93 3.75 12 3.75M19.75 18c0 2.14-3.33 3.75-7.75 3.75S4.25 20.14 4.25 18c0-1.57 1.72-2.86 4.6-3.44.41-.08.8.18.88.59s-.18.8-.59.88c-2.23.45-3.4 1.34-3.4 1.98 0 .92 2.43 2.25 6.25 2.25s6.25-1.33 6.25-2.25c0-.64-1.17-1.52-3.4-1.98a.75.75 0 1 1 .29-1.47c2.88.58 4.6 1.87 4.6 3.44Z" /></svg>;


      export const MapPinStandardOutlineIcon = createIcon("MapPinStandardOutlineIcon", SVGComponent, {
  "fileName": "abs-map-pin-standard.svg",
  "presentationName": "map-pin-standard",
  "style": "outline",
  "category": "location"
});