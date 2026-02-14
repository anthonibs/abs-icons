import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M6.59 4.78h10.84c-.35-1-1.3-1.67-2.36-1.67H8.96c-1.06 0-2.01.67-2.36 1.67m-4.59 7.5a2.5 2.5 0 0 1 2.5-2.5h15a2.5 2.5 0 0 1 2.5 2.5v6.11a2.5 2.5 0 0 1-2.5 2.5H4.5a2.5 2.5 0 0 1-2.5-2.5v-6.11Zm2.5-4.17h-.14c.35-1 1.3-1.67 2.36-1.67h10.56c1.09 0 2.02.7 2.36 1.67z" /></svg>;


      export const RectangleStackSolidIcon = createIcon("RectangleStackSolidIcon", SVGComponent, {
  "fileName": "abs-rectangle-stack-solid.svg",
  "presentationName": "rectangle-stack",
  "style": "solid",
  "category": "interface"
});