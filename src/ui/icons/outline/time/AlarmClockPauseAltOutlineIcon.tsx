import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 18.11 20.25" color="currentColor" width="1em" height="1em" {...props}><g><path d="M9.05 20.25C3.3 20.25 0 16.95 0 11.2s3.3-9.05 9.05-9.05 9.05 3.3 9.05 9.05-3.3 9.05-9.05 9.05m0-16.61c-4.87 0-7.55 2.68-7.55 7.55s2.68 7.55 7.55 7.55 7.55-2.68 7.55-7.55-2.68-7.55-7.55-7.55" /><rect width={1.5} height={7.5} x={6.46} y={7.45} rx={0.75} ry={0.75} /><rect width={1.5} height={7.5} x={10.15} y={7.45} rx={0.75} ry={0.75} /><path d="m1.51 3.62 3.72-2.33c.33-.2.43-.63.22-.96a.686.686 0 0 0-.96-.22L.77 2.44c-.33.2-.43.64-.22.96.2.33.63.43.96.22M12.87 1.3l3.72 2.33c.33.2.76.11.96-.22s.11-.76-.22-.96L13.61.12c-.33-.2-.76-.1-.96.22-.2.33-.11.76.22.96" /></g></svg>;


      export const AlarmClockPauseAltOutlineIcon = createIcon("AlarmClockPauseAltOutlineIcon", SVGComponent, {
  "fileName": "abs-alarm-clock-pause-alt.svg",
  "presentationName": "alarm-clock-pause-alt",
  "style": "outline",
  "category": "time"
});