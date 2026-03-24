import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 19 17" color="currentColor" width="1em" height="1em" {...props}><path d="M13.31 17c-.41 0-.76-.15-1.06-.44-.3-.3-.44-.65-.44-1.06v-4.19c0-.41.15-.76.44-1.06.3-.3.65-.44 1.06-.44h4.19c.41 0 .76.15 1.06.44.3.3.44.65.44 1.06v4.19c0 .41-.15.76-.44 1.06-.3.3-.65.44-1.06.44zm.22-1.5h3.75c.12 0 .22-.1.22-.22v-3.75c0-.12-.1-.22-.22-.22h-3.75c-.12 0-.22.1-.22.22v3.75c0 .12.1.22.22.22M0 13.4c0-.41.34-.75.75-.75h7.12c.41 0 .75.34.75.75s-.34.75-.75.75H.75c-.41 0-.75-.34-.75-.75m13.31-6.21c-.41 0-.76-.15-1.06-.44s-.44-.65-.44-1.06V1.5c0-.41.15-.76.44-1.06.3-.3.65-.44 1.06-.44h4.19c.41 0 .76.15 1.06.44s.44.65.44 1.06v4.19c0 .41-.15.76-.44 1.06-.3.3-.65.44-1.06.44zm.22-1.5h3.75c.12 0 .22-.1.22-.22V1.72c0-.12-.1-.22-.22-.22h-3.75c-.12 0-.22.1-.22.22v3.75c0 .12.1.22.22.22M0 3.6c0-.41.34-.75.75-.75h7.12c.41 0 .75.34.75.75s-.34.75-.75.75H.75C.34 4.35 0 4.01 0 3.6" /></svg>;


      export const EventListOutlineIcon = createIcon("EventListOutlineIcon", SVGComponent, {
  "fileName": "abs-event-list.svg",
  "presentationName": "event-list",
  "style": "outline",
  "category": "general"
});