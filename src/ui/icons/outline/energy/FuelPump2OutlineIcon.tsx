import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M21.5 8a4.7 4.7 0 0 0-1.39-3.26L18.1 2.73a.79.79 0 0 0-1.12.02c-.3.31-.3.79 0 1.1l1.35 1.35v2.05c0 .87.71 1.58 1.58 1.58v7.92c0 .44-.35.79-.79.79s-.79-.35-.79-.79v-.79a2.38 2.38 0 0 0-2.38-2.38h-.79V6.45c0-2.19-1.77-3.96-3.96-3.96H6.45c-2.19 0-3.96 1.77-3.96 3.96v11.08c0 2.19 1.77 3.96 3.96 3.96h4.75c2.19 0 3.96-1.77 3.96-3.96v-2.38h.79c.44 0 .79.35.79.79v.79c0 1.31 1.06 2.38 2.38 2.38s2.38-1.06 2.38-2.38zM6.46 4.09h4.75a2.37 2.37 0 0 1 2.37 2.38v3.17h-9.5V6.47a2.38 2.38 0 0 1 2.38-2.38m7.12 13.46c0 1.31-1.06 2.38-2.37 2.38H6.46a2.38 2.38 0 0 1-2.38-2.38v-6.33h9.5z" /></svg>;


      export const FuelPump2OutlineIcon = createIcon("FuelPump2OutlineIcon", SVGComponent, {
  "fileName": "abs-fuel-pump-2.svg",
  "presentationName": "fuel-pump-2",
  "style": "outline",
  "category": "energy"
});