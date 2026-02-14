import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M16.08 3.01v17.98c3.49-.44 5-2.45 5-6.49v-5c0-4.04-1.51-6.05-5-6.49M2.92 9.5v5c0 4.61 1.97 6.58 6.58 6.58h5.08V2.92H9.5c-4.61 0-6.58 1.97-6.58 6.58m5.82 4.63c0-.2.08-.39.22-.53l1.3-1.3c.17-.16.17-.44 0-.6l-1.29-1.3a.754.754 0 0 1 0-1.06c.29-.3.77-.29 1.06 0l2.13 2.13a.75.75 0 0 1 0 1.06l-2.13 2.13a.7.7 0 0 1-.53.22c-.21 0-.39-.07-.54-.22a.73.73 0 0 1-.22-.53" /></svg>;


      export const SidebarRightSolidIcon = createIcon("SidebarRightSolidIcon", SVGComponent, {
  "fileName": "abs-sidebar-right-solid.svg",
  "presentationName": "sidebar-right",
  "style": "solid",
  "category": "interface"
});