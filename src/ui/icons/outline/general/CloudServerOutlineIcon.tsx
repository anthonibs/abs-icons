import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M15.5 15.83h.04c1.19 0 2.34-.45 3.22-1.26 1.38-1.22 1.89-3.13 1.32-4.98-.51-1.65-1.75-2.85-3.3-3.25-.49-2.05-1.77-3.53-3.58-4.1-1.99-.62-4.3-.02-5.75 1.49-1.26 1.31-1.7 3.11-1.27 5.04-1.71.5-2.49 2.05-2.49 3.45 0 1.62 1.05 3.44 3.41 3.61h4.15v1.27c-.77.25-1.37.86-1.62 1.63H6.77c-.41 0-.75.34-.75.75s.34.75.75.75h2.86c.32 1.02 1.25 1.76 2.37 1.76s2.05-.74 2.37-1.76h2.86c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-2.86c-.24-.78-.85-1.39-1.62-1.63v-1.27zM12 20.5c-.55 0-.99-.45-.99-1.01s.44-1.01.99-1.01.99.45.99 1.01-.44 1.01-.99 1.01m-6.81-8.28c0-.97.6-2 1.94-2.11.09 0 .17-.01.26-.04.39-.14.59-.57.46-.96-.61-1.71-.36-3.25.69-4.34 1.07-1.11 2.76-1.55 4.22-1.1 1.42.44 2.36 1.66 2.65 3.43.05.33.32.58.64.62 1.45.19 2.29 1.31 2.6 2.31s.24 2.43-.89 3.43c-.62.57-1.43.88-2.25.88H7.15c-1.36-.1-1.96-1.13-1.96-2.11Z" /></svg>;


      export const CloudServerOutlineIcon = createIcon("CloudServerOutlineIcon", SVGComponent, {
  "fileName": "abs-cloud-server.svg",
  "presentationName": "cloud-server",
  "style": "outline",
  "category": "general"
});