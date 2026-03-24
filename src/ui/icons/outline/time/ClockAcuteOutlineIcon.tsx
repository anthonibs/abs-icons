import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 20.76 14.91" color="currentColor" width="1em" height="1em" {...props}><g><path d="M16.21 10.39c.29-.3.29-.77 0-1.07l-1.94-1.94a.75.75 0 0 1-.22-.53V4.36c0-.41-.34-.75-.75-.75s-.75.34-.75.75v3.11c0 .2.08.39.22.53l2.37 2.39c.29.29.77.3 1.06 0Z" /><rect width={3.81} height={1.5} x={1} y={2.71} rx={0.75} ry={0.75} /><rect width={4.81} height={1.5} y={6.71} rx={0.75} ry={0.75} /><rect width={3.81} height={1.5} x={1} y={10.71} rx={0.75} ry={0.75} /><path d="M13.31 0C9.2 0 5.85 3.34 5.85 7.46a7.46 7.46 0 0 0 14.92 0c0-4.12-3.35-7.46-7.46-7.46m6.15 7.46c0 3.39-2.76 6.15-6.15 6.15s-6.15-2.76-6.15-6.15 2.76-6.15 6.15-6.15 6.15 2.76 6.15 6.15" /></g></svg>;


      export const ClockAcuteOutlineIcon = createIcon("ClockAcuteOutlineIcon", SVGComponent, {
  "fileName": "abs-clock-acute.svg",
  "presentationName": "clock-acute",
  "style": "outline",
  "category": "time"
});