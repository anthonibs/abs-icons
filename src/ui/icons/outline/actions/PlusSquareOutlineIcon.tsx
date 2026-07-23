import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><g><path d="M12 2C4.15 2 2 4.15 2 12s2.15 10 10 10 10-2.15 10-10S19.85 2 12 2m0 18.5c-6.99 0-8.5-1.51-8.5-8.5S5.01 3.5 12 3.5s8.5 1.51 8.5 8.5-1.51 8.5-8.5 8.5" /><path d="M15.08 11.25h-2.33V8.92c0-.41-.34-.75-.75-.75s-.75.34-.75.75v2.33H8.92c-.41 0-.75.34-.75.75s.34.75.75.75h2.33v2.33c0 .41.34.75.75.75s.75-.34.75-.75v-2.33h2.33c.41 0 .75-.34.75-.75s-.34-.75-.75-.75" /></g></svg>;


      export const PlusSquareOutlineIcon = createIcon("PlusSquareOutlineIcon", SVGComponent, {
  "fileName": "abs-plus-square.svg",
  "presentationName": "plus-square",
  "style": "outline",
  "category": "actions",
  "isNew": true
});