import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><g><path d="M9.5 2.92h5c4.61 0 6.58 1.97 6.58 6.58v5c0 4.61-1.97 6.58-6.58 6.58h-5c-4.62 0-6.58-1.97-6.58-6.58v-5c0-4.61 1.97-6.58 6.58-6.58M4.42 9.5v5c0 3.75 1.33 5.08 5.08 5.08h5.08V4.42H9.5c-3.75 0-5.08 1.33-5.08 5.08m11.67-4.98v14.96c2.52-.36 3.5-1.77 3.5-4.98v-5c0-3.21-.98-4.62-3.5-4.98" /><path d="M10.26 12.3c.17-.17.17-.44 0-.61l-1.29-1.3a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2.13 2.13a.75.75 0 0 1 0 1.06l-2.13 2.13c-.14.14-.33.22-.53.22s-.39-.08-.54-.22a.75.75 0 0 1 0-1.06l1.3-1.3Z" /></g></svg>;


      export const SidebarRightOutlineIcon = createIcon("SidebarRightOutlineIcon", SVGComponent, {
  "fileName": "abs-sidebar-right.svg",
  "presentationName": "sidebar-right",
  "style": "outline",
  "category": "interface"
});