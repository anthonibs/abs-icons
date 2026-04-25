import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="m15.33 16.29-2.32 2.32c-.09.09-.23.02-.23-.1V3.28a.781.781 0 0 0-1.56 0v15.24c0 .12-.15.18-.23.1L8.67 16.3c-.3-.3-.79-.3-1.1 0-.3.3-.3.79 0 1.1l3.88 3.88h.02a.77.77 0 0 0 .83.15c.09-.04.17-.09.23-.15h.02l3.88-3.88c.3-.3.3-.79 0-1.1-.3-.3-.79-.3-1.1 0Z" /></svg>;


      export const ArrowDownwardOutlineIcon = createIcon("ArrowDownwardOutlineIcon", SVGComponent, {
  "fileName": "abs-arrow-downward.svg",
  "presentationName": "arrow-downward",
  "style": "outline",
  "category": "arrows"
});