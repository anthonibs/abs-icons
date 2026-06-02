import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M19.14 4.52c-.27-.22-.57-.4-.89-.52h-.01l-1.3-.49-3.29-1.24c-.96-.35-2.38-.35-3.32 0L7.07 3.51l-1.32.5c-.32.12-.62.3-.89.52-.9.71-1.51 1.86-1.51 2.97v6.87c0 1.16.64 2.59 1.51 3.46.13.12.25.23.38.32l3.13 2.35.82.62c.78.59 1.79.88 2.81.88s2.04-.29 2.81-.88l.82-.62 3.13-2.35c.13-.1.25-.21.38-.33.87-.87 1.51-2.29 1.51-3.45V7.5c0-1.11-.62-2.27-1.51-2.98m-1.29 12.43-3.95 2.97c-.51.39-1.21.58-1.9.58v-8.49H4.88V7.5c0-.82.67-1.8 1.43-2.09l4.58-1.73c.3-.11.7-.17 1.11-.17v8.5h7.12v2.36h.02c0 .86-.6 2.07-1.29 2.58" /></svg>;


      export const ShieldFlannelOutlineIcon = createIcon("ShieldFlannelOutlineIcon", SVGComponent, {
  "fileName": "abs-shield-flannel.svg",
  "presentationName": "shield-flannel",
  "style": "outline",
  "category": "security"
});