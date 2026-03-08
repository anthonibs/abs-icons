import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M5.2 3.3C5.8 2 7.87 2 12 2s6.2 0 6.8 1.3c.05.11.1.23.13.35.41 1.39-1.05 2.99-3.97 6.21l-1.72 1.88c-.14.15-.14.38 0 .53l1.72 1.88c2.92 3.22 4.38 4.82 3.97 6.21-.04.12-.08.23-.13.35-.6 1.3-2.67 1.3-6.8 1.3s-6.2 0-6.8-1.3c-.05-.11-.1-.23-.13-.35-.41-1.39 1.05-2.99 3.97-6.21l1.72-1.88c.14-.15.14-.38 0-.53L9.04 9.86C6.12 6.64 4.66 5.04 5.07 3.65c.04-.12.08-.23.13-.35" /></svg>;


      export const HourglassTimeSolidIcon = createIcon("HourglassTimeSolidIcon", SVGComponent, {
  "fileName": "abs-hourglass-time-solid.svg",
  "presentationName": "hourglass-time",
  "style": "solid",
  "category": "time"
});