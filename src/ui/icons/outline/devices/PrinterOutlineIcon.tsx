import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><g><path d="M17.51 6.62h-.4v-1.1C17.11 3.15 15.96 2 13.6 2h-3.21C8.03 2 6.88 3.15 6.88 5.52v1.1h-.4c-2.26 0-3.51 1.25-3.51 3.52v4.62c0 2.27 1.25 3.52 3.51 3.52h1.09v.18c0 2.27 1.25 3.52 3.51 3.52h1.84c2.26 0 3.51-1.25 3.51-3.52v-.18h1.09c2.26 0 3.51-1.25 3.51-3.52v-4.62c0-2.27-1.25-3.52-3.51-3.52Zm-9.13-1.1c0-1.55.47-2.02 2.01-2.02h3.21c1.54 0 2.01.47 2.01 2.02v1.1H8.38zm6.54 12.95c0 1.44-.58 2.02-2.01 2.02h-1.84c-1.42 0-2.01-.59-2.01-2.02v-2.95h5.85v2.95Zm4.59-3.7c0 1.44-.58 2.02-2.01 2.02h-1.09v-1.27h.17c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H7.41c-.41 0-.75.34-.75.75s.34.75.75.75h.17v1.27H6.49c-1.42 0-2.01-.59-2.01-2.02v-4.62c0-1.44.58-2.02 2.01-2.02h11.03c1.42 0 2.01.59 2.01 2.02v4.62Z" /><path d="M10.16 10.33H7.4c-.41 0-.75.34-.75.75s.34.75.75.75h2.76c.41 0 .75-.34.75-.75s-.34-.75-.75-.75" /></g></svg>;


      export const PrinterOutlineIcon = createIcon("PrinterOutlineIcon", SVGComponent, {
  "fileName": "abs-printer.svg",
  "presentationName": "printer",
  "style": "outline",
  "category": "devices"
});