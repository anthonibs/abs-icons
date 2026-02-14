import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M21 2.2h-6c-.44 0-.8.36-.8.8s.36.8.8.8h4.07l-5.63 5.63c-.31.31-.31.82 0 1.13.16.16.36.23.57.23s.41-.08.57-.23l5.63-5.63V9c0 .44.36.8.8.8s.8-.36.8-.8V3c0-.44-.36-.8-.8-.8ZM9.43 13.43 3.8 19.06v-4.07c0-.44-.36-.8-.8-.8s-.8.36-.8.8v6c0 .44.36.8.8.8h6c.44 0 .8-.36.8-.8s-.36-.8-.8-.8H4.93l5.63-5.63c.31-.31.31-.82 0-1.13a.803.803 0 0 0-1.13 0" /></svg>;


      export const ExpandLeftOutlineIcon = createIcon("ExpandLeftOutlineIcon", SVGComponent, {
  "fileName": "abs-expand-left.svg",
  "presentationName": "expand-left",
  "style": "outline",
  "category": "navigation"
});