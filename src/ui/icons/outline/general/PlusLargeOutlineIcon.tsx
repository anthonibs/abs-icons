import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M18.42 10.4h-3.14c-.92 0-1.67-.75-1.67-1.67V5.59c0-.88-.72-1.6-1.6-1.6s-1.6.72-1.6 1.6v3.14c0 .92-.75 1.67-1.67 1.67H5.6c-.88 0-1.6.72-1.6 1.6s.72 1.6 1.6 1.6h3.14c.92 0 1.67.75 1.67 1.67v3.14c0 .88.72 1.6 1.6 1.6s1.6-.72 1.6-1.6v-3.14c0-.92.75-1.67 1.67-1.67h3.14c.88 0 1.6-.72 1.6-1.6s-.72-1.6-1.6-1.6" /></svg>;


      export const PlusLargeOutlineIcon = createIcon("PlusLargeOutlineIcon", SVGComponent, {
  "fileName": "abs-plus-large.svg",
  "presentationName": "plus-large",
  "style": "outline",
  "category": "general"
});