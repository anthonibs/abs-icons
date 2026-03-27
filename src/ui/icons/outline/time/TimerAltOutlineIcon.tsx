import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><g><path d="M10.14 3.43h3.72c.39 0 .7-.31.7-.7s-.31-.7-.7-.7h-3.72c-.39 0-.7.31-.7.7s.31.7.7.7M12 7.5c-.39 0-.7.31-.7.7v3.74c0 .39.31.7.7.7s.7-.31.7-.7V8.2c0-.39-.31-.7-.7-.7" /><path d="M12 21.97c-5.66 0-8.9-3.24-8.9-8.9s3.24-8.9 8.9-8.9 8.9 3.24 8.9 8.9-3.24 8.9-8.9 8.9m0-16.3c-4.77 0-7.4 2.63-7.4 7.4s2.63 7.4 7.4 7.4 7.4-2.63 7.4-7.4-2.63-7.4-7.4-7.4" /></g></svg>;


      export const TimerAltOutlineIcon = createIcon("TimerAltOutlineIcon", SVGComponent, {
  "fileName": "abs-timer-alt.svg",
  "presentationName": "timer-alt",
  "style": "outline",
  "category": "time"
});