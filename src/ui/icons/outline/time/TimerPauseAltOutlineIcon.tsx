import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 17.8 19.95" color="currentColor" width="1em" height="1em" {...props}><g><path d="M7.04 1.4h3.72c.39 0 .7-.31.7-.7s-.31-.7-.7-.7H7.04c-.39 0-.7.31-.7.7s.31.7.7.7" /><rect width={1.5} height={7.5} x={6.3} y={7.3} rx={0.75} ry={0.75} /><rect width={1.5} height={7.5} x={10} y={7.3} rx={0.75} ry={0.75} /><path d="M8.9 19.95c-5.66 0-8.9-3.25-8.9-8.9s3.24-8.9 8.9-8.9 8.9 3.24 8.9 8.9-3.24 8.9-8.9 8.9m0-16.3c-4.77 0-7.4 2.63-7.4 7.4s2.63 7.4 7.4 7.4 7.4-2.63 7.4-7.4-2.63-7.4-7.4-7.4" /></g></svg>;


      export const TimerPauseAltOutlineIcon = createIcon("TimerPauseAltOutlineIcon", SVGComponent, {
  "fileName": "abs-timer-pause-alt.svg",
  "presentationName": "timer-pause-alt",
  "style": "outline",
  "category": "time"
});