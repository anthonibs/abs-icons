import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><g><path d="m14.23 16.78-1.69 1.69c-2 2-5.39 2.11-7.32.04a5 5 0 0 1-1.33-3.37c0-1.27.49-2.54 1.46-3.51l1.87-1.87c.31-.31.31-.82 0-1.13s-.82-.31-1.13 0L4.22 10.5a6.54 6.54 0 0 0-1.92 4.64c0 1.62.6 3.25 1.81 4.52 2.55 2.68 6.98 2.53 9.6-.08l1.66-1.66c.31-.31.31-.82 0-1.13s-.82-.31-1.13 0ZM10.3 4.43 8.64 6.09c-.31.31-.31.82 0 1.13s.82.31 1.13 0l1.69-1.69c2-2 5.39-2.11 7.32-.04.88.95 1.32 2.16 1.33 3.37 0 1.27-.49 2.54-1.46 3.51l-1.87 1.87c-.31.31-.31.82 0 1.13s.82.31 1.13 0l1.87-1.87a6.54 6.54 0 0 0 1.92-4.64c0-1.62-.6-3.25-1.81-4.52-2.55-2.68-6.98-2.53-9.6.08Z" /><path d="M7.67 16.33c.31.31.82.31 1.13 0l7.52-7.52c.31-.31.31-.82 0-1.13s-.82-.31-1.13 0L7.67 15.2c-.31.31-.31.82 0 1.13" /></g></svg>;


      export const LinkOutlineIcon = createIcon("LinkOutlineIcon", SVGComponent, {
  "fileName": "abs-link.svg",
  "presentationName": "link",
  "style": "outline",
  "category": "general"
});