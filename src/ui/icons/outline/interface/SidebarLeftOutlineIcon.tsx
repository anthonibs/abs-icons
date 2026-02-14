import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><g><path d="M14.5 2.92h-5c-4.61 0-6.58 1.97-6.58 6.58v5c0 4.61 1.97 6.58 6.58 6.58h5c4.62 0 6.58-1.97 6.58-6.58v-5c0-4.61-1.97-6.58-6.58-6.58m5.08 6.58v5c0 3.75-1.33 5.08-5.08 5.08H9.42V4.42h5.08c3.75 0 5.08 1.33 5.08 5.08M7.92 4.52v14.96c-2.52-.36-3.5-1.77-3.5-4.98v-5c0-3.21.98-4.62 3.5-4.98" /><path d="M13.74 12.3a.43.43 0 0 1 0-.61l1.29-1.3c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0l-2.13 2.13a.75.75 0 0 0 0 1.06l2.13 2.13c.14.14.33.22.53.22s.39-.08.54-.22a.75.75 0 0 0 0-1.06l-1.3-1.3Z" /></g></svg>;


      export const SidebarLeftOutlineIcon = createIcon("SidebarLeftOutlineIcon", SVGComponent, {
  "fileName": "abs-sidebar-left.svg",
  "presentationName": "sidebar-left",
  "style": "outline",
  "category": "interface"
});