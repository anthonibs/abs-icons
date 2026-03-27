import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M17.81 20.21V9.03c0-1.02-.34-2.03-1-2.81-.91-1.07-2.04-1.62-3.38-1.63-1.19-.01-2.36.46-3.2 1.3s-1.3 1.91-1.3 3.13v4.86l1.39-1.39a.79.79 0 0 1 1.12 0c.31.31.31.81 0 1.12l-2.67 2.67a.9.9 0 0 1-1.27 0l-2.67-2.67a.79.79 0 0 1 0-1.12.79.79 0 0 1 1.12 0l1.39 1.39V9.02c0-1.68.59-3.1 1.76-4.27s2.59-1.76 4.27-1.76 3.1.59 4.27 1.76 1.76 2.59 1.76 4.27V20.2c0 .44-.36.79-.79.79-.44 0-.79-.36-.79-.79Z" /></svg>;


      export const UTurnLeftOutlineIcon = createIcon("UTurnLeftOutlineIcon", SVGComponent, {
  "fileName": "abs-u-turn-left.svg",
  "presentationName": "u-turn-left",
  "style": "outline",
  "category": "location"
});