import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><g><path d="M9.22 16.91c-.41 0-.75-.34-.75-.75 0-.07-.01-.14-.04-.21a.636.636 0 0 0-.81-.39.754.754 0 0 1-.96-.46c-.14-.39.07-.82.46-.96a2.145 2.145 0 0 1 2.85 2.02c0 .41-.34.75-.75.75m8.79-4.16c-2.2 0-3.99-1.79-3.99-3.99s1.79-3.99 3.99-3.99S22 6.56 22 8.76s-1.79 3.99-3.99 3.99m0-6.48c-1.37 0-2.49 1.12-2.49 2.49s1.12 2.49 2.49 2.49 2.49-1.12 2.49-2.49-1.12-2.49-2.49-2.49" /><path d="M7.84 22C4.62 22 2 19.38 2 16.16s2.62-5.84 5.84-5.84 5.84 2.62 5.84 5.84S11.06 22 7.84 22m0-10.17c-2.39 0-4.34 1.95-4.34 4.34s1.95 4.34 4.34 4.34 4.34-1.95 4.34-4.34-1.95-4.34-4.34-4.34m0-3.71a3.06 3.06 0 1 1 0-6.12 3.06 3.06 0 0 1 0 6.12m0-4.62c-.86 0-1.56.7-1.56 1.56s.7 1.56 1.56 1.56 1.56-.7 1.56-1.56S8.7 3.5 7.84 3.5" /></g></svg>;


      export const BubblesOutlineIcon = createIcon("BubblesOutlineIcon", SVGComponent, {
  "fileName": "abs-bubbles.svg",
  "presentationName": "bubbles",
  "style": "outline",
  "category": "general",
  "isNew": true
});