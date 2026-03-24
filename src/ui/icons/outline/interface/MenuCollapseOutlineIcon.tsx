import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 16.69 11" color="currentColor" width="1em" height="1em" {...props}><path d="M0 10.25c0-.41.34-.75.75-.75h10.71c.41 0 .75.34.75.75s-.34.75-.75.75H.75c-.41 0-.75-.34-.75-.75m15.42-.73-3.26-3.25c-.43-.43-.43-1.12 0-1.55l3.26-3.24c.29-.29.76-.29 1.05 0s.29.76 0 1.06l-2.59 2.57a.55.55 0 0 0 0 .77l2.6 2.58a.742.742 0 1 1-1.05 1.05ZM0 5.5c0-.41.34-.75.75-.75h7.79c.41 0 .75.34.75.75s-.34.75-.75.75H.75C.34 6.25 0 5.91 0 5.5M0 .75C0 .34.34 0 .75 0h10.71c.41 0 .75.34.75.75s-.34.75-.75.75H.75C.34 1.5 0 1.16 0 .75" /></svg>;


      export const MenuCollapseOutlineIcon = createIcon("MenuCollapseOutlineIcon", SVGComponent, {
  "fileName": "abs-menu-collapse.svg",
  "presentationName": "menu-collapse",
  "style": "outline",
  "category": "interface"
});