import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M10.16 22c-.19 0-.34-.04-.46-.08-.39-.15-1.03-.61-1.03-2.07V14.3c0-.2-.16-.36-.36-.36H6.59c-1.25 0-1.71-.6-1.88-.95-.16-.36-.32-1.1.51-2.06l6.95-7.96c.96-1.1 1.75-1.02 2.13-.88.39.14 1.03.61 1.03 2.07V9.7c0 .2.16.36.36.36h1.72c1.26 0 1.72.6 1.89.96.16.36.31 1.11-.52 2.06l-6.94 7.95c-.67.76-1.25.96-1.68.96Zm-4.07-9.62s.2.06.49.06h2.83c.41 0 .75.34.75.75v6.66c0 .33.04.52.08.62.09-.05.25-.16.46-.41l6.94-7.95c.23-.27.28-.44.28-.48 0 .02-.16-.05-.51-.05h-2.83c-.41 0-.75-.34-.75-.75V4.17c0-.33-.04-.52-.08-.62-.09.05-.25.16-.46.41l-6.94 7.95c-.23.27-.28.44-.27.48h.01Z" /></svg>;


      export const BoltOutlineIcon = createIcon("BoltOutlineIcon", SVGComponent, {
  "fileName": "abs-bolt.svg",
  "presentationName": "bolt",
  "style": "outline",
  "category": "general"
});