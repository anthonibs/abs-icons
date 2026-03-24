import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 18.74 7.35" color="currentColor" width="1em" height="1em" {...props}><path d="M3.37.06a.8.8 0 0 0-.27.18L.25 3.09c-.08.07-.14.16-.18.26-.09.21-.09.44 0 .64q.06.15.18.27L3.1 7.11c.11.11.26.19.42.23.16.03.33.01.48-.05s.28-.17.37-.31c.09-.13.14-.29.14-.45V4.64c0-.08.06-.14.14-.14h13.28c.22 0 .43-.09.58-.25.31-.3.31-.85 0-1.16a.83.83 0 0 0-.58-.24H4.65c-.08 0-.14-.06-.14-.14V.82c0-.16-.05-.32-.14-.46A.86.86 0 0 0 4 .05C3.9.02 3.79 0 3.69 0a.8.8 0 0 0-.32.06" /></svg>;


      export const ArrowBackSolidIcon = createIcon("ArrowBackSolidIcon", SVGComponent, {
  "fileName": "abs-arrow-back-solid.svg",
  "presentationName": "arrow-back",
  "style": "solid",
  "category": "arrows"
});