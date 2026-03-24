import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 18.1 20.26" color="currentColor" width="1em" height="1em" {...props}><path d="m1.51 3.62 3.72-2.33c.33-.2.43-.63.22-.96a.686.686 0 0 0-.96-.22L.77 2.44c-.33.2-.43.64-.22.96.2.33.63.43.96.22M12.87 1.3l3.72 2.33c.33.2.76.11.96-.22s.11-.76-.22-.96L13.61.12c-.33-.2-.76-.1-.96.22-.2.33-.11.76.22.96m-3.82.85C3.3 2.15 0 5.45 0 11.2s3.3 9.06 9.05 9.06 9.05-3.3 9.05-9.06-3.3-9.05-9.05-9.05m2.6 12.05a.749.749 0 1 1-1.5 0v-6a.749.749 0 1 1 1.5 0zm-3.7-6v6c0 .42-.33.75-.75.75s-.75-.33-.75-.75v-6c0-.41.34-.75.75-.75s.75.34.75.75" /></svg>;


      export const AlarmClockPauseAltSolidIcon = createIcon("AlarmClockPauseAltSolidIcon", SVGComponent, {
  "fileName": "abs-alarm-clock-pause-alt-solid.svg",
  "presentationName": "alarm-clock-pause-alt",
  "style": "solid",
  "category": "time"
});