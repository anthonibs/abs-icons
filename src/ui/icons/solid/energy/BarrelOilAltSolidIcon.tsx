import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M20.44 13.06a1.06 1.06 0 0 0 0-2.12h-1.06V4.61h1.06a1.06 1.06 0 0 0 0-2.12H3.56c-.58 0-1.06.48-1.06 1.06s.48 1.06 1.06 1.06h1.06v6.33H3.56a1.06 1.06 0 0 0 0 2.12h1.06v6.33H3.56c-.58 0-1.06.48-1.06 1.06s.48 1.06 1.06 1.06h16.89c.58 0 1.06-.48 1.06-1.06s-.48-1.06-1.06-1.06h-1.06v-6.33h1.06ZM12 16.45c-1.84 0-3.33-1.47-3.33-3.28 0-1.39.53-1.82 3.03-4.7.16-.18.45-.18.61 0 2.48 2.86 3.03 3.3 3.03 4.7 0 1.81-1.49 3.28-3.33 3.28Z" /></svg>;


      export const BarrelOilAltSolidIcon = createIcon("BarrelOilAltSolidIcon", SVGComponent, {
  "fileName": "abs-barrel-oil-alt-solid.svg",
  "presentationName": "barrel-oil-alt",
  "style": "solid",
  "category": "energy"
});