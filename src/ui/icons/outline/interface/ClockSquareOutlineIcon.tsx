import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M12.83 11.84a.44.44 0 0 1-.13-.31V8.28c0-.39-.32-.7-.7-.7s-.7.31-.7.7v3.24c0 .38 0 .57.07.74s.2.31.47.57l1.98 1.99c.27.27.72.27.99 0s.27-.71 0-.99l-1.99-1.99Z" /><path d="M12 2.02c-7.83 0-9.98 2.14-9.98 9.98s2.15 9.98 9.98 9.98 9.98-2.15 9.98-9.98S19.83 2.02 12 2.02m0 18.46c-6.97 0-8.48-1.51-8.48-8.48S5.03 3.52 12 3.52s8.48 1.51 8.48 8.48-1.51 8.48-8.48 8.48" /></svg>;


      export const ClockSquareOutlineIcon = createIcon("ClockSquareOutlineIcon", SVGComponent, {
  "fileName": "abs-clock-square.svg",
  "presentationName": "clock-square",
  "style": "outline",
  "category": "interface"
});