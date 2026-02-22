import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M11.62 12c0-.2.08-.39.22-.53l2.13-2.13c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-1.29 1.3c-.17.17-.17.44 0 .61l1.3 1.3a.75.75 0 0 1-.54 1.28c-.21 0-.39-.08-.53-.22l-2.13-2.13a.75.75 0 0 1-.22-.53Z" /><path d="M3.73 5.17c.34-.46.75-.85 1.21-1.18 1.49-1.05 3.61-1.25 7.01-1.25s5.51.2 7 1.25c.46.33.87.72 1.21 1.18.99 1.32 1.34 3.11 1.34 6.83s-.35 5.51-1.34 6.83c-.34.46-.75.85-1.21 1.18-1.49 1.05-3.61 1.25-7 1.25s-5.52-.2-7.01-1.25c-.46-.33-.87-.72-1.21-1.18C2.69 17.43 2.5 15.51 2.5 12s.19-5.43 1.23-6.83m15.28 12.81c.79-1.05 1.06-2.61 1.06-5.98s-.27-4.93-1.06-5.98c-.24-.33-.54-.62-.89-.87-1.04-.74-2.6-.98-6.17-.98-.99 0-1.82.02-2.53.06v15.53c.71.04 1.54.06 2.53.06 3.57 0 5.13-.24 6.17-.98.35-.25.65-.54.89-.87Zm-13.24.87c.52.37 1.17.62 2.15.77V4.38c-.97.15-1.62.4-2.15.77-.35.25-.64.54-.89.87-.81 1.08-.95 2.79-.95 5.98s.14 4.9.95 5.98c.25.33.54.62.89.87" /></svg>;


      export const SidebarLeftOutlineIcon = createIcon("SidebarLeftOutlineIcon", SVGComponent, {
  "fileName": "abs-sidebar-left.svg",
  "presentationName": "sidebar-left",
  "style": "outline",
  "category": "interface"
});