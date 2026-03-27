import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M3 17.12c0-.45.36-.81.81-.81h11.55c.45 0 .81.36.81.81s-.36.81-.81.81H3.81c-.45 0-.81-.36-.81-.81m16.63-.78-3.52-3.5c-.46-.46-.46-1.21 0-1.67l3.52-3.5c.31-.31.82-.31 1.13 0s.31.83 0 1.14l-2.8 2.77c-.23.23-.23.6 0 .83l2.8 2.78c.32.31.32.82 0 1.14-.31.31-.82.31-1.13 0ZM3 12c0-.45.36-.81.81-.81h8.4c.45 0 .81.36.81.81s-.36.81-.81.81h-8.4c-.45 0-.81-.36-.81-.81m0-5.12c0-.45.36-.81.81-.81h11.55c.45 0 .81.36.81.81s-.36.81-.81.81H3.81c-.45 0-.81-.36-.81-.81" /></svg>;


      export const MenuCollapseOutlineIcon = createIcon("MenuCollapseOutlineIcon", SVGComponent, {
  "fileName": "abs-menu-collapse.svg",
  "presentationName": "menu-collapse",
  "style": "outline",
  "category": "interface"
});