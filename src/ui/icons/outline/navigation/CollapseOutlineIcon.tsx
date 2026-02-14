import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M21.57 2.43a.803.803 0 0 0-1.13 0l-5.63 5.63V3.99c0-.44-.36-.8-.8-.8s-.8.36-.8.8v6c0 .44.36.8.8.8h6c.44 0 .8-.36.8-.8s-.36-.8-.8-.8h-4.07l5.63-5.63c.31-.31.31-.82 0-1.13M10 13.2H4c-.44 0-.8.36-.8.8s.36.8.8.8h4.07l-5.63 5.63c-.31.31-.31.82 0 1.13.16.16.36.23.57.23s.41-.08.57-.23l5.63-5.63V20c0 .44.36.8.8.8s.8-.36.8-.8v-6c0-.44-.36-.8-.8-.8Z" /></svg>;


      export const CollapseOutlineIcon = createIcon("CollapseOutlineIcon", SVGComponent, {
  "fileName": "abs-collapse.svg",
  "presentationName": "collapse",
  "style": "outline",
  "category": "navigation"
});