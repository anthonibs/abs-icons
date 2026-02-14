import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M12.97 3.24a1.62 1.62 0 0 0-1.94 0C9.06 4.74 4.47 8.76 4.5 13.58c0 4.14 3.36 7.5 7.5 7.5s7.5-3.36 7.5-7.49c.03-4.76-4.56-8.82-6.53-10.35" /></svg>;


      export const DropSolidIcon = createIcon("DropSolidIcon", SVGComponent, {
  "fileName": "abs-drop-solid.svg",
  "presentationName": "drop",
  "style": "solid",
  "category": "energy"
});