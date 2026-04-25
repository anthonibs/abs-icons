import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><g><path d="M12 22c-5.68 0-8.94-3.26-8.94-8.94S6.32 4.12 12 4.12s8.94 3.26 8.94 8.94S17.68 22 12 22m0-16.4c-4.81 0-7.46 2.65-7.46 7.46s2.65 7.46 7.46 7.46 7.46-2.65 7.46-7.46S16.81 5.6 12 5.6" /><rect width={1.48} height={7.41} x={9.44} y={9.36} rx={0.74} ry={0.74} /><rect width={1.48} height={7.41} x={13.08} y={9.36} rx={0.74} ry={0.74} /><path d="m4.55 5.57 3.67-2.3c.33-.2.42-.62.22-.95a.683.683 0 0 0-.95-.22L3.82 4.4c-.33.2-.42.63-.22.95.2.33.62.42.95.22m11.22-2.29 3.67 2.3c.33.2.75.11.95-.22s.11-.75-.22-.95l-3.67-2.3c-.33-.2-.75-.1-.95.22-.2.33-.11.75.22.95" /></g></svg>;


      export const AlarmClockPauseAltOutlineIcon = createIcon("AlarmClockPauseAltOutlineIcon", SVGComponent, {
  "fileName": "abs-alarm-clock-pause-alt.svg",
  "presentationName": "alarm-clock-pause-alt",
  "style": "outline",
  "category": "time"
});