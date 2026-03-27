import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><g><path d="M10.14 3.43h3.72c.39 0 .7-.31.7-.7s-.31-.7-.7-.7h-3.72c-.39 0-.7.31-.7.7s.31.7.7.7" /><rect width={1.5} height={7.5} x={9.4} y={9.32} rx={0.75} ry={0.75} /><rect width={1.5} height={7.5} x={13.1} y={9.32} rx={0.75} ry={0.75} /><path d="M12 21.97c-5.66 0-8.9-3.24-8.9-8.9s3.24-8.9 8.9-8.9 8.9 3.24 8.9 8.9-3.24 8.9-8.9 8.9m0-16.3c-4.77 0-7.4 2.63-7.4 7.4s2.63 7.4 7.4 7.4 7.4-2.63 7.4-7.4-2.63-7.4-7.4-7.4" /></g></svg>;


      export const TimerPauseAltOutlineIcon = createIcon("TimerPauseAltOutlineIcon", SVGComponent, {
  "fileName": "abs-timer-pause-alt.svg",
  "presentationName": "timer-pause-alt",
  "style": "outline",
  "category": "time"
});