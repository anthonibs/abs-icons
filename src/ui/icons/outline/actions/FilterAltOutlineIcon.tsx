import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 20 18.97" color="currentColor" width="1em" height="1em" {...props}><path d="M10.92 18.97c-.25 0-.5-.06-.74-.17l-1.85-.92c-.57-.28-.93-.86-.93-1.49v-5.18c0-.49-.18-.95-.51-1.31L.43 2.79A1.67 1.67 0 0 1 1.67 0h16.65c.42 0 .81.15 1.12.43.33.3.53.71.55 1.15.02.45-.13.87-.43 1.21l-6.46 7.1c-.33.36-.51.83-.51 1.31v6.1q0 .39-.18.75c-.29.59-.89.92-1.5.92ZM1.67 1.5c-.1 0-.17.08-.17.17 0 .04.02.08.04.11L8 8.88c.58.64.9 1.46.9 2.32v5.18c0 .06.04.12.09.15l1.85.92c.09.04.19 0 .24-.08l.02-6.17c0-.86.32-1.69.9-2.32l6.46-7.1s.04-.09.04-.12-.01-.08-.06-.12a.2.2 0 0 0-.12-.05H1.67Z" /></svg>;


      export const FilterAltOutlineIcon = createIcon("FilterAltOutlineIcon", SVGComponent, {
  "fileName": "abs-filter-alt.svg",
  "presentationName": "filter-alt",
  "style": "outline",
  "category": "actions"
});