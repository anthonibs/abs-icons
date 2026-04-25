import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M15.62 18a.8.8 0 0 1-.18.27l-2.85 2.85c-.07.08-.16.14-.26.18-.21.09-.44.09-.64 0a.8.8 0 0 1-.27-.18l-2.85-2.85a.9.9 0 0 1-.23-.42c-.03-.16-.01-.33.05-.48s.17-.28.31-.37c.13-.09.29-.14.45-.14h1.89c.08 0 .14-.06.14-.14V3.44c0-.22.09-.43.25-.58.3-.31.85-.31 1.16 0 .15.15.24.36.24.58v13.28c0 .08.06.14.14.14h1.89c.16 0 .32.05.46.14s.24.22.31.37c.03.1.05.21.05.31 0 .12-.02.22-.06.32" /></svg>;


      export const ArrowDownwardSolidIcon = createIcon("ArrowDownwardSolidIcon", SVGComponent, {
  "fileName": "abs-arrow-downward-solid.svg",
  "presentationName": "arrow-downward",
  "style": "solid",
  "category": "arrows"
});