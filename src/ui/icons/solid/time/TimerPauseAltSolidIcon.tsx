import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M12 4.17c-5.66 0-8.9 3.25-8.9 8.9s3.24 8.9 8.9 8.9 8.9-3.24 8.9-8.9-3.24-8.9-8.9-8.9m2.6 11.9a.749.749 0 1 1-1.5 0v-6a.749.749 0 1 1 1.5 0zm-3.7-6v6c0 .42-.33.75-.75.75s-.75-.33-.75-.75v-6c0-.41.34-.75.75-.75s.75.34.75.75m-.76-6.64h3.72c.39 0 .7-.31.7-.7s-.31-.7-.7-.7h-3.72c-.39 0-.7.31-.7.7s.31.7.7.7" /></svg>;


      export const TimerPauseAltSolidIcon = createIcon("TimerPauseAltSolidIcon", SVGComponent, {
  "fileName": "abs-timer-pause-alt-solid.svg",
  "presentationName": "timer-pause-alt",
  "style": "solid",
  "category": "time"
});