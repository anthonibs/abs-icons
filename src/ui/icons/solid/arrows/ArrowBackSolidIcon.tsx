import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M6 8.38a.8.8 0 0 0-.27.18l-2.85 2.85c-.08.07-.14.16-.18.26-.09.21-.09.44 0 .64q.06.15.18.27l2.85 2.85c.11.11.26.19.42.23.16.03.33.01.48-.05s.28-.17.37-.31c.09-.13.14-.29.14-.45v-1.89c0-.08.06-.14.14-.14h13.28c.22 0 .43-.09.58-.25.31-.3.31-.85 0-1.16a.83.83 0 0 0-.58-.24H7.28c-.08 0-.14-.06-.14-.14V9.14c0-.16-.05-.32-.14-.46a.86.86 0 0 0-.37-.31c-.1-.03-.21-.05-.31-.05a.8.8 0 0 0-.32.06" /></svg>;


      export const ArrowBackSolidIcon = createIcon("ArrowBackSolidIcon", SVGComponent, {
  "fileName": "abs-arrow-back-solid.svg",
  "presentationName": "arrow-back",
  "style": "solid",
  "category": "arrows"
});