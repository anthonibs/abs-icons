import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><g><path d="m18.25 4-4.59-1.73c-.96-.35-2.38-.35-3.32 0L5.76 4.01c-1.35.51-2.41 2.04-2.41 3.49v6.87c0 1.32.83 2.99 1.89 3.78l3.95 2.97c.78.59 1.79.88 2.81.88s2.04-.29 2.81-.88l3.95-2.97c1.06-.8 1.89-2.46 1.89-3.78V7.5c0-1.45-1.06-2.99-2.4-3.5m.9 10.37c0 .86-.6 2.07-1.29 2.58l-3.95 2.97c-1.03.78-2.78.78-3.82 0l-3.95-2.97c-.69-.52-1.29-1.72-1.29-2.58V7.5c0-.82.67-1.79 1.44-2.08l4.58-1.74c.6-.23 1.66-.22 2.26 0l4.58 1.73c.76.29 1.43 1.27 1.43 2.09v6.87Z" /><path d="M11.99 8.02a2.6 2.6 0 0 0-2.59 2.6c0 1.17.78 2.15 1.84 2.48v2.15c0 .41.34.75.75.75s.75-.34.75-.75V13.1a2.605 2.605 0 0 0 1.84-2.48 2.6 2.6 0 0 0-2.59-2.6m0 3.7c-.6 0-1.09-.49-1.09-1.1s.49-1.1 1.09-1.1 1.09.49 1.09 1.1-.49 1.1-1.09 1.1" /></g></svg>;


      export const ShieldKeyholeOutlineIcon = createIcon("ShieldKeyholeOutlineIcon", SVGComponent, {
  "fileName": "abs-shield-keyhole.svg",
  "presentationName": "shield-keyhole",
  "style": "outline",
  "category": "security"
});