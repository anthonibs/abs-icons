import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M18.42 10.65h-3.14a1.92 1.92 0 0 1-1.92-1.92V5.59c0-.75-.61-1.35-1.35-1.35s-1.35.61-1.35 1.35v3.14c0 1.06-.86 1.92-1.92 1.92H5.6c-.75 0-1.35.61-1.35 1.35s.61 1.35 1.35 1.35h3.14c1.06 0 1.92.86 1.92 1.92v3.14c0 .75.61 1.35 1.35 1.35s1.35-.61 1.35-1.35v-3.14c0-1.06.86-1.92 1.92-1.92h3.14c.75 0 1.35-.61 1.35-1.35s-.61-1.35-1.35-1.35" /></svg>;


      export const PlusSmallOutlineIcon = createIcon("PlusSmallOutlineIcon", SVGComponent, {
  "fileName": "abs-plus-small.svg",
  "presentationName": "plus-small",
  "style": "outline",
  "category": "general"
});