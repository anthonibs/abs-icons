import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M21 8.2h-4.07l4.63-4.63c.31-.31.31-.82 0-1.13a.803.803 0 0 0-1.13 0L15.8 7.07V3c0-.44-.36-.8-.8-.8s-.8.36-.8.8v6a.78.78 0 0 0 .22.55s0 .01.01.02c0 0 .02.01.03.02.07.06.14.12.23.15.1.04.2.06.31.06h6c.44 0 .8-.36.8-.8s-.36-.8-.8-.8M9.8 3c0-.44-.36-.8-.8-.8s-.8.36-.8.8v4.07L3.57 2.43a.803.803 0 0 0-1.13 0c-.31.31-.31.82 0 1.13l4.63 4.63H3c-.44 0-.8.36-.8.8s.36.8.8.8h6c.1 0 .21-.02.31-.06.08-.03.15-.09.22-.14.01-.01.03-.02.04-.03s.02-.03.03-.05c.06-.06.11-.13.14-.21.04-.1.06-.2.06-.31zm-.06 11.69a1 1 0 0 0-.15-.23s-.01-.02-.02-.03c0 0-.01 0-.02-.01A.78.78 0 0 0 9 14.2H3c-.44 0-.8.36-.8.8s.36.8.8.8h4.07l-4.63 4.63c-.31.31-.31.82 0 1.13.16.16.36.23.57.23s.41-.08.57-.23l4.63-4.63V21c0 .44.36.8.8.8s.8-.36.8-.8v-6c0-.1-.02-.21-.06-.31ZM21.8 15c0-.44-.36-.8-.8-.8h-6a.79.79 0 0 0-.8.8v6c0 .44.36.8.8.8s.8-.36.8-.8v-4.07l4.63 4.63c.16.16.36.23.57.23s.41-.08.57-.23c.31-.31.31-.82 0-1.13l-4.63-4.63h4.07c.44 0 .8-.36.8-.8Z" /></svg>;


      export const PointingInOutlineIcon = createIcon("PointingInOutlineIcon", SVGComponent, {
  "fileName": "abs-pointing-in.svg",
  "presentationName": "pointing-in",
  "style": "outline",
  "category": "general"
});