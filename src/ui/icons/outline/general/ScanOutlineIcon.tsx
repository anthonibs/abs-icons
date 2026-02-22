import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M21.25 11.97H2.75c-.41 0-.75.34-.75.75s.34.75.75.75h.46c.03.52.08 1.03.15 1.47v.05c.56 3.29 2.31 5 5.66 5.56h.12a.75.75 0 0 0 .12-1.49c-2.74-.45-3.99-1.68-4.43-4.37v-.05c-.06-.36-.1-.76-.13-1.17h14.58c-.03.43-.07.85-.13 1.22v.05c-.45 2.66-1.7 3.88-4.43 4.33a.75.75 0 0 0 .12 1.49h.12c3.37-.56 5.12-2.29 5.67-5.61v-.04c.07-.44.12-.92.15-1.42h.46c.41 0 .75-.34.75-.75s-.34-.75-.75-.75ZM3.98 9.93s.08.01.12.01c.36 0 .68-.26.74-.63.45-2.7 1.69-3.93 4.43-4.37.41-.07.69-.45.62-.86a.747.747 0 0 0-.86-.62c-3.37.55-5.12 2.28-5.67 5.61-.07.41.21.79.62.86m10.75-4.99c2.74.44 3.98 1.67 4.43 4.37.06.37.38.63.74.63.04 0 .08 0 .12-.01.41-.07.68-.45.62-.86-.55-3.33-2.3-5.06-5.67-5.61a.747.747 0 0 0-.86.62c-.07.41.21.79.62.86" /></svg>;


      export const ScanOutlineIcon = createIcon("ScanOutlineIcon", SVGComponent, {
  "fileName": "abs-scan.svg",
  "presentationName": "scan",
  "style": "outline",
  "category": "general"
});