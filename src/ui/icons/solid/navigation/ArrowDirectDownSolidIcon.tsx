import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="m15.38 4.18-2.22 1.11c-.84.42-1.5.42-2.06.14L8.63 4.2c-1.37-.69-3.09-.53-4.16.57-1.05 1.08-1.27 2.64-.58 3.97l5.08 9.66c.59 1.13 1.75 1.83 3.02 1.83s2.43-.7 3.02-1.83l5.08-9.66c.27-.51.41-1.05.41-1.61 0-.91-.38-1.79-1.07-2.44-1.08-1.03-2.73-1.17-4.06-.51Z" /></svg>;


      export const ArrowDirectDownSolidIcon = createIcon("ArrowDirectDownSolidIcon", SVGComponent, {
  "fileName": "abs-arrow-direct-down-solid.svg",
  "presentationName": "arrow-direct-down",
  "style": "solid",
  "category": "navigation"
});