import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M12 21.8c-4.58 0-8.3-3.72-8.3-8.3S7.42 5.2 12 5.2s8.3 3.72 8.3 8.3-3.72 8.3-8.3 8.3m0-15c-3.69 0-6.7 3.01-6.7 6.7s3.01 6.7 6.7 6.7 6.7-3.01 6.7-6.7-3.01-6.7-6.7-6.7" /><path d="M12 13.8c-.44 0-.8-.36-.8-.8v-3c0-.44.36-.8.8-.8s.8.36.8.8v3c0 .44-.36.8-.8.8m3-10H9c-.44 0-.8-.36-.8-.8s.36-.8.8-.8h6c.44 0 .8.36.8.8s-.36.8-.8.8" /></svg>;


      export const TimerOutlineIcon = createIcon("TimerOutlineIcon", SVGComponent, {
  "fileName": "abs-timer.svg",
  "presentationName": "timer",
  "style": "outline",
  "category": "time"
});