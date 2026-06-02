import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M18.25 4h-.01l-4.59-1.73c-.96-.35-2.38-.35-3.32 0L5.75 4.01c-1.35.51-2.4 2.04-2.4 3.49v6.87c0 1.32.83 2.99 1.89 3.78l3.95 2.97c.78.59 1.79.88 2.81.88s2.04-.29 2.81-.88l3.95-2.97c1.06-.8 1.89-2.46 1.89-3.78V7.5c0-1.45-1.06-2.99-2.4-3.5m-.4 12.95-3.95 2.97c-.51.39-1.21.58-1.9.58V3.51c.41 0 .81.06 1.11.16l4.58 1.73c.76.29 1.43 1.27 1.43 2.09v6.87h.02c0 .86-.6 2.07-1.29 2.58Z" /></svg>;


      export const ShieldDuoOutlineIcon = createIcon("ShieldDuoOutlineIcon", SVGComponent, {
  "fileName": "abs-shield-duo.svg",
  "presentationName": "shield-duo",
  "style": "outline",
  "category": "security"
});