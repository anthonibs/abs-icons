import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M21.13 2.86a.83.83 0 0 0-.58-.24H15.8c-.17 0-.33.05-.46.14a.8.8 0 0 0-.35.85c.03.16.11.31.22.42l1.8 1.8-3.7 3.69c-.15.15-.24.36-.24.58s.09.42.24.58a.8.8 0 0 0 .27.18c.2.08.44.08.64 0a.8.8 0 0 0 .27-.18l3.68-3.69 1.79 1.79a.8.8 0 0 0 .59.24h.01c.11 0 .21-.02.31-.06.15-.06.27-.17.37-.3.09-.14.14-.3.14-.47V3.45c0-.22-.09-.43-.25-.59M10.42 13.14a.8.8 0 0 0-.64 0 .8.8 0 0 0-.27.18L5.82 17l-1.78-1.78a.8.8 0 0 0-.58-.24h-.02c-.1 0-.21.02-.31.06-.15.06-.28.16-.37.3s-.14.3-.14.46v4.75c0 .22.09.43.25.58.15.16.36.25.58.25h4.76c.16 0 .32-.05.45-.14a.86.86 0 0 0 .31-.37c.06-.15.08-.32.04-.48a.8.8 0 0 0-.22-.42l-1.8-1.8.09-.09 3.61-3.6c.15-.15.24-.37.24-.58s-.09-.43-.24-.58a.8.8 0 0 0-.27-.18" /></svg>;


      export const ExpandLeftVSolidIcon = createIcon("ExpandLeftVSolidIcon", SVGComponent, {
  "fileName": "abs-expand-left-v-solid.svg",
  "presentationName": "expand-left-v",
  "style": "solid",
  "category": "navigation"
});