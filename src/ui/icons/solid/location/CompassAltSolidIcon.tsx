import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path fillRule="evenodd" d="M3.55 21.53c1.8 1.22 4.94-.04 11.24-2.55 1.34-.54 2.01-.81 2.54-1.27.13-.12.26-.24.38-.38.46-.53.73-1.2 1.27-2.54 2.52-6.29 3.77-9.44 2.55-11.24-.29-.43-.66-.79-1.08-1.08-1.8-1.22-4.94.04-11.24 2.55-1.34.54-2.01.8-2.54 1.27-.13.12-.26.24-.38.38-.46.53-.73 1.2-1.27 2.54-2.52 6.29-3.77 9.44-2.55 11.24.29.43.66.79 1.08 1.08M8.25 12c0-2.07 1.68-3.75 3.75-3.75s3.75 1.68 3.75 3.75-1.68 3.75-3.75 3.75S8.25 14.07 8.25 12m1.5 0c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25-1.01 2.25-2.25 2.25S9.75 13.24 9.75 12" /></svg>;


      export const CompassAltSolidIcon = createIcon("CompassAltSolidIcon", SVGComponent, {
  "fileName": "abs-compass-alt-solid.svg",
  "presentationName": "compass-alt",
  "style": "solid",
  "category": "location"
});