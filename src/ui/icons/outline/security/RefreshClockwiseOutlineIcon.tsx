import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M12 4.45c-.6 0-1.19.07-1.78.18l1.21-1.39c.27-.31.24-.79-.08-1.06a.75.75 0 0 0-1.06.08L7.63 5.33s0 .02-.01.03c0 0-.02.01-.02.02-.03.03-.03.07-.05.11s-.05.09-.06.13c-.01.05-.01.1-.02.15 0 .05-.01.09 0 .14 0 .05.02.1.04.14.01.04.02.09.05.13.02.05.06.08.1.12.02.03.04.06.07.09 0 0 .02 0 .03.02 0 0 .01.02.02.02l3.1 2.28c.13.1.29.15.44.15.23 0 .46-.11.61-.31.25-.33.17-.8-.16-1.05l-1.74-1.28c.66-.16 1.32-.26 1.99-.26 3.98 0 7.22 3.26 7.22 7.27S16 20.5 12.02 20.5 4.8 17.24 4.8 13.23c0-1.44.42-2.84 1.22-4.05.23-.35.13-.81-.21-1.04a.755.755 0 0 0-1.04.21 8.8 8.8 0 0 0-1.47 4.87c0 4.84 3.91 8.77 8.72 8.77s8.72-3.94 8.72-8.77-3.91-8.77-8.72-8.77Z" /></svg>;


      export const RefreshClockwiseOutlineIcon = createIcon("RefreshClockwiseOutlineIcon", SVGComponent, {
  "fileName": "abs-refresh-clockwise.svg",
  "presentationName": "refresh-clockwise",
  "style": "outline",
  "category": "security"
});