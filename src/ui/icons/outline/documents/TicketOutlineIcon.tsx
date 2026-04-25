import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><g><path d="M12 7.51c-.41 0-.75-.37-.75-.83V4.37c0-.46.34-.83.75-.83s.75.37.75.83v2.31c0 .46-.34.83-.75.83m0 12.93c-.41 0-.75-.37-.75-.83V17.3c0-.46.34-.83.75-.83s.75.37.75.83v2.31c0 .46-.34.83-.75.83m0-6.64c-.41 0-.75-.34-.75-.75v-2.09c0-.41.34-.75.75-.75s.75.34.75.75v2.09c0 .41-.34.75-.75.75" /><path d="M21.25 13.27c-.9 0-1.21-.69-1.21-1.27s.32-1.27 1.21-1.27c.41 0 .75-.34.75-.75 0-5.28-.48-7.11-10-7.11S2 4.69 2 9.98c0 .41.34.75.75.75.9 0 1.21.69 1.21 1.27s-.32 1.27-1.21 1.27c-.41 0-.75.34-.75.75 0 5.28.48 7.11 10 7.11s10-1.83 10-7.11c0-.41-.34-.75-.75-.75M12 19.63c-8.07 0-8.48-.97-8.5-4.95 1.29-.33 1.96-1.51 1.96-2.68S4.79 9.65 3.5 9.32c.02-3.98.43-4.95 8.5-4.95s8.48.97 8.5 4.95c-1.29.33-1.96 1.51-1.96 2.68s.67 2.35 1.96 2.68c-.02 3.98-.43 4.95-8.5 4.95" /></g></svg>;


      export const TicketOutlineIcon = createIcon("TicketOutlineIcon", SVGComponent, {
  "fileName": "abs-ticket.svg",
  "presentationName": "ticket",
  "style": "outline",
  "category": "documents"
});