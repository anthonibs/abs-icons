import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M17.92 8.18H6.08c-.96 0-1.44 1.16-.76 1.84l5.18 5.18c.83.83 2.18.83 3.01 0l1.97-1.97 3.21-3.21c.67-.68.19-1.84-.77-1.84" /></svg>;


      export const CaretDownSolidIcon = createIcon("CaretDownSolidIcon", SVGComponent, {
  "fileName": "abs-caret-down-solid.svg",
  "presentationName": "caret-down",
  "style": "solid",
  "category": "general"
});