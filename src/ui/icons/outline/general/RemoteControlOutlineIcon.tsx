import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M16 12.12H8c-1.03 0-1.88.85-1.88 1.88v7c0 .48.4.88.88.88s.88-.4.88-.88v-6c0-.62.5-1.12 1.12-1.12h6c.62 0 1.12.5 1.12 1.12v6c0 .48.4.88.88.88s.88-.4.88-.88v-7c0-1.03-.85-1.88-1.88-1.88m-5 4c-.48 0-.88.4-.88.88s.4.88.88.88.88-.4.88-.88-.4-.88-.88-.88m5.61-7.77a5.878 5.878 0 0 0-9.22 0c-.17.22-.23.49-.17.76.05.26.22.47.46.59.37.18.82.07 1.1-.28.37-.46.84-.84 1.38-1.11.58-.29 1.21-.43 1.83-.43 1.23 0 2.44.54 3.24 1.55.27.34.72.45 1.09.27.24-.12.41-.33.46-.59.06-.27 0-.54-.17-.76m3.67-1.73c-1.82-2.81-4.92-4.5-8.28-4.5s-6.46 1.69-8.28 4.5c-.14.21-.18.47-.12.71.07.25.24.45.46.56.4.2.88.07 1.11-.3A8.1 8.1 0 0 1 12 3.88c1.38 0 2.72.34 3.89.98s2.18 1.56 2.93 2.73c.24.37.72.5 1.12.3.22-.11.39-.31.46-.56.06-.24.02-.5-.12-.71" /></svg>;


      export const RemoteControlOutlineIcon = createIcon("RemoteControlOutlineIcon", SVGComponent, {
  "fileName": "abs-remote-control.svg",
  "presentationName": "remote-control",
  "style": "outline",
  "category": "general"
});