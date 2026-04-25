import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><g><path d="M16.09 6.81c-1.75 0-2.5.84-3.72.84s-2.21-.83-3.73-.83-3.08.91-4.08 2.46c-1.42 2.18-1.18 6.29 1.12 9.8.82 1.25 1.92 2.66 3.35 2.68h.03c1.25 0 1.62-.82 3.34-.83h.03c1.69 0 2.03.82 3.27.82h.03c1.44-.02 2.59-1.57 3.41-2.82.55-.84.78-1.29 1.18-2.18.04-.1 0-.22-.1-.26-3.08-1.33-3.58-5.72-.59-7.57.1-.06.13-.21.05-.3-.99-1.14-2.32-1.8-3.58-1.8Z" /><path d="M15.7 2.25c-1.04.07-2.26.74-2.98 1.6-.65.79-1.18 1.95-.97 3.09h.08c1.11 0 2.25-.67 2.92-1.53.64-.82 1.13-1.97.95-3.16" /></g></svg>;


      export const AppleOutlineIcon = createIcon("AppleOutlineIcon", SVGComponent, {
  "fileName": "abs-apple.svg",
  "presentationName": "apple",
  "style": "outline",
  "category": "brands"
});