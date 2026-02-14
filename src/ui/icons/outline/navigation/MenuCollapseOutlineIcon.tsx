import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M17 18.5H3c-.41 0-.75-.34-.75-.75S2.59 17 3 17h14c.41 0 .75.34.75.75s-.34.75-.75.75m4-1.92c-.15 0-.31-.05-.44-.14l-1.15-.84c-1.88-1.37-2.49-2.25-2.49-3.6s.6-2.23 2.49-3.6l1.15-.84c.33-.25.8-.17 1.05.17s.17.8-.17 1.05l-1.15.84c-1.87 1.36-1.87 1.86-1.87 2.39s0 1.03 1.87 2.39l1.15.84c.33.24.41.71.17 1.05-.15.2-.38.31-.61.31Zm-8-3.83H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75M17 7H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h14c.41 0 .75.34.75.75S17.41 7 17 7" /></svg>;


      export const MenuCollapseOutlineIcon = createIcon("MenuCollapseOutlineIcon", SVGComponent, {
  "fileName": "abs-menu-collapse.svg",
  "presentationName": "menu-collapse",
  "style": "outline",
  "category": "navigation"
});