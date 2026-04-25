import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M15.62 6a.8.8 0 0 0-.18-.27l-2.85-2.85a.7.7 0 0 0-.26-.18.8.8 0 0 0-.64 0 .8.8 0 0 0-.27.18L8.57 5.73a.9.9 0 0 0-.23.42c-.03.16-.01.33.05.48s.17.28.31.37c.13.09.29.14.45.14h1.89c.08 0 .14.06.14.14v13.28c0 .22.09.43.25.58.3.31.85.31 1.16 0 .15-.15.24-.36.24-.58V7.28c0-.08.06-.14.14-.14h1.89c.16 0 .32-.05.46-.14a.86.86 0 0 0 .31-.37c.03-.1.05-.21.05-.31a.8.8 0 0 0-.06-.32" /></svg>;


      export const ArrowUpwardSolidIcon = createIcon("ArrowUpwardSolidIcon", SVGComponent, {
  "fileName": "abs-arrow-upward-solid.svg",
  "presentationName": "arrow-upward",
  "style": "solid",
  "category": "arrows"
});