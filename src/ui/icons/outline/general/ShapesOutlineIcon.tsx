import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M8.26 10.93c-.76 0-1.4-.6-1.45-1.37-.02-.31.06-.61.23-.87l3.72-5.91c.17-.3.48-.55.85-.65.37-.11.76-.06 1.1.13.21.11.38.28.51.48l3.71 5.95c.43.62.27 1.53-.38 1.99-.25.17-.53.26-.83.26H8.25Zm.09-1.51h7.38l-3.77-5.9zM9 21.93H4c-.96 0-1.75-.79-1.75-1.75v-5c0-.96.79-1.75 1.75-1.75h5c.96 0 1.75.79 1.75 1.75v5c0 .96-.79 1.75-1.75 1.75m-5-7c-.14 0-.25.11-.25.25v5c0 .14.11.25.25.25h5c.14 0 .25-.11.25-.25v-5c0-.14-.11-.25-.25-.25zm13.5 7c-2.34 0-4.25-1.91-4.25-4.25s1.91-4.25 4.25-4.25 4.25 1.91 4.25 4.25-1.91 4.25-4.25 4.25m0-7c-1.52 0-2.75 1.23-2.75 2.75s1.23 2.75 2.75 2.75 2.75-1.23 2.75-2.75-1.23-2.75-2.75-2.75" /></svg>;


      export const ShapesOutlineIcon = createIcon("ShapesOutlineIcon", SVGComponent, {
  "fileName": "abs-shapes.svg",
  "presentationName": "shapes",
  "style": "outline",
  "category": "general",
  "isNew": true
});