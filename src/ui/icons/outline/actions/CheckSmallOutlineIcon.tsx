import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 10.68 8.14" color="currentColor" width="1em" height="1em" {...props}><path d="m2.92 7.96-2.7-2.7a.73.73 0 0 1 0-1.04.73.73 0 0 1 1.04 0L3.2 6.16c.08.08.21.08.28 0L9.42.22a.73.73 0 0 1 1.04 0c.29.29.29.76 0 1.04l-6.7 6.7c-.23.23-.61.23-.84 0" /></svg>;


      export const CheckSmallOutlineIcon = createIcon("CheckSmallOutlineIcon", SVGComponent, {
  "fileName": "abs-check-small.svg",
  "presentationName": "check-small",
  "style": "outline",
  "category": "actions"
});