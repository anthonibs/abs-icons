import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M10.82 20.82v-.96c0-.12-.1-.22-.22-.22h-.96c-.65 0-1.18-.53-1.18-1.18s.53-1.18 1.18-1.18h.9c.16 0 .28-.13.28-.28v-1.89c0-.17-.12-.32-.29-.36a6.08 6.08 0 0 1-3.51-2.16c-1-1.22-1.49-2.63-1.49-4.23 0-1.7.69-3.32 1.9-4.51s2.65-1.81 4.33-1.86c1.79-.06 3.55.61 4.82 1.87s1.9 2.76 1.9 4.54c0 1.59-.5 2.99-1.49 4.19q-1.395 1.695-3.51 2.16c-.17.04-.29.18-.29.36V17c0 .16.13.28.28.28h.9c.65 0 1.18.53 1.18 1.18s-.53 1.18-1.18 1.18h-.96c-.12 0-.22.1-.22.22v.96c0 .65-.53 1.18-1.18 1.18s-1.18-.53-1.18-1.18Zm4.09-9.44q1.2-1.2 1.2-2.91c0-1.71-.44-2.15-1.21-2.92s-1.77-1.2-2.91-1.2-2.15.44-2.92 1.21-1.2 1.77-1.2 2.91.44 2.15 1.21 2.92 1.77 1.2 2.91 1.2 2.15-.44 2.92-1.21" /></svg>;


      export const FemaleOutlineIcon = createIcon("FemaleOutlineIcon", SVGComponent, {
  "fileName": "abs-female.svg",
  "presentationName": "female",
  "style": "outline",
  "category": "general"
});