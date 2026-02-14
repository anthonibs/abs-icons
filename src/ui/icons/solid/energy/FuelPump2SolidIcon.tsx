import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M21.5 16.75c0 1.31-1.06 2.38-2.38 2.38s-2.38-1.06-2.38-2.38v-.79c0-.44-.35-.79-.79-.79h-.79v2.38c0 2.19-1.77 3.96-3.96 3.96H6.45c-2.19 0-3.96-1.77-3.96-3.96v-6.33h12.67v2.37h.79a2.38 2.38 0 0 1 2.38 2.38v.79c0 .44.35.79.79.79s.79-.35.79-.79V8.84c-.87 0-1.58-.71-1.58-1.58V5.21l-1.35-1.35A.79.79 0 0 1 17 2.74c.31-.3.79-.3 1.1 0l2.01 2.01c.88.87 1.37 2.05 1.39 3.28v8.73ZM15.17 6.46c0-2.19-1.77-3.96-3.96-3.96H6.46C4.27 2.5 2.5 4.27 2.5 6.46v3.17h12.67z" /></svg>;


      export const FuelPump2SolidIcon = createIcon("FuelPump2SolidIcon", SVGComponent, {
  "fileName": "abs-fuel-pump-2-solid.svg",
  "presentationName": "fuel-pump-2",
  "style": "solid",
  "category": "energy"
});