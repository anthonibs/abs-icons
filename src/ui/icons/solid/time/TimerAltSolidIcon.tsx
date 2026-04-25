import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M12 4.17c-5.66 0-8.9 3.25-8.9 8.9s3.24 8.9 8.9 8.9 8.9-3.24 8.9-8.9-3.24-8.9-8.9-8.9m.7 8.77c0 .39-.31.7-.7.7s-.7-.31-.7-.7V9.2c0-.39.31-.7.7-.7s.7.31.7.7zm-2.56-9.51h3.72c.39 0 .7-.31.7-.7s-.31-.7-.7-.7h-3.72c-.39 0-.7.31-.7.7s.31.7.7.7" /></svg>;


      export const TimerAltSolidIcon = createIcon("TimerAltSolidIcon", SVGComponent, {
  "fileName": "abs-timer-alt-solid.svg",
  "presentationName": "timer-alt",
  "style": "solid",
  "category": "time"
});