import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M9.01 19.01c0-1.68 1.4-2.99 2.99-2.99s2.99 1.4 2.99 2.99S13.59 22 12 22s-2.99-1.31-2.99-2.99m0-7.01c0-1.68 1.4-2.99 2.99-2.99s2.99 1.4 2.99 2.99-1.4 2.99-2.99 2.99S9.01 13.68 9.01 12m0-7.01C9.01 3.31 10.41 2 12 2s2.99 1.4 2.99 2.99-1.4 2.99-2.99 2.99-2.99-1.31-2.99-2.99m1.31 14.02c0 .93.75 1.68 1.68 1.68s1.68-.75 1.68-1.68-.75-1.68-1.68-1.68-1.68.75-1.68 1.68m0-7.01c0 .93.75 1.68 1.68 1.68s1.68-.75 1.68-1.68-.75-1.68-1.68-1.68-1.68.75-1.68 1.68m0-7.01c0 .93.75 1.68 1.68 1.68s1.68-.75 1.68-1.68-.75-1.68-1.68-1.68-1.68.75-1.68 1.68" /></svg>;


      export const MoreCircleVOutlineIcon = createIcon("MoreCircleVOutlineIcon", SVGComponent, {
  "fileName": "abs-more-circle-v.svg",
  "presentationName": "more-circle-v",
  "style": "outline",
  "category": "general"
});