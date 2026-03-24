import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 20 18.26" color="currentColor" width="1em" height="1em" {...props}><g><path d="M10 4.64c-.41 0-.75-.37-.75-.83v-2.3c0-.46.34-.83.75-.83s.75.37.75.83v2.31c0 .46-.34.83-.75.83Zm0 12.93c-.41 0-.75-.37-.75-.83v-2.31c0-.46.34-.83.75-.83s.75.37.75.83v2.31c0 .46-.34.83-.75.83m0-6.64c-.41 0-.75-.34-.75-.75V8.09c0-.41.34-.75.75-.75s.75.34.75.75v2.09c0 .41-.34.75-.75.75" /><path d="M19.25 10.4c-.9 0-1.21-.69-1.21-1.27s.32-1.27 1.21-1.27c.41 0 .75-.34.75-.75C20 1.83 19.52 0 10 0S0 1.82 0 7.11c0 .41.34.75.75.75.9 0 1.21.69 1.21 1.27S1.64 10.4.75 10.4c-.41 0-.75.34-.75.75 0 5.28.48 7.11 10 7.11s10-1.83 10-7.11c0-.41-.34-.75-.75-.75M10 16.76c-8.07 0-8.48-.97-8.5-4.95 1.29-.33 1.96-1.51 1.96-2.68S2.79 6.78 1.5 6.45c.02-3.98.43-4.95 8.5-4.95s8.48.97 8.5 4.95c-1.29.33-1.96 1.51-1.96 2.68s.67 2.35 1.96 2.68c-.02 3.98-.43 4.95-8.5 4.95" /></g></svg>;


      export const TicketOutlineIcon = createIcon("TicketOutlineIcon", SVGComponent, {
  "fileName": "abs-ticket.svg",
  "presentationName": "ticket",
  "style": "outline",
  "category": "documents"
});