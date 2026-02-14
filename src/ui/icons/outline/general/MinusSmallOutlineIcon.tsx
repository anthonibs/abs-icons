import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><rect width={15.55} height={2.71} x={4.22} y={10.65} rx={1.35} ry={1.35} /></svg>;


      export const MinusSmallOutlineIcon = createIcon("MinusSmallOutlineIcon", SVGComponent, {
  "fileName": "abs-minus-small.svg",
  "presentationName": "minus-small",
  "style": "outline",
  "category": "general"
});