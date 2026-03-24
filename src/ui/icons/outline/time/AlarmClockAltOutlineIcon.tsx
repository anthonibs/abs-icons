import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 18.11 20.25" color="currentColor" width="1em" height="1em" {...props}><g><path d="m1.51 3.62 3.72-2.33c.33-.2.43-.63.22-.96a.686.686 0 0 0-.96-.22L.77 2.44c-.33.2-.43.64-.22.96.2.33.63.43.96.22M12.87 1.3l3.72 2.33c.33.2.76.11.96-.22s.11-.76-.22-.96L13.61.12c-.33-.2-.76-.1-.96.22-.2.33-.11.76.22.96m-3.2 10.39a.3.3 0 0 1-.08-.2V8.18c0-.39-.31-.7-.7-.7s-.7.31-.7.7v3.6c0 .26.1.51.29.7l2.24 2.24c.27.27.71.27.99 0 .27-.27.27-.71 0-.99z" /><path d="M9.05 20.25C3.3 20.25 0 16.95 0 11.2s3.3-9.05 9.05-9.05 9.05 3.3 9.05 9.05-3.3 9.05-9.05 9.05m0-16.61c-4.87 0-7.55 2.68-7.55 7.55s2.68 7.55 7.55 7.55 7.55-2.68 7.55-7.55-2.68-7.55-7.55-7.55" /></g></svg>;


      export const AlarmClockAltOutlineIcon = createIcon("AlarmClockAltOutlineIcon", SVGComponent, {
  "fileName": "abs-alarm-clock-alt.svg",
  "presentationName": "alarm-clock-alt",
  "style": "outline",
  "category": "time"
});