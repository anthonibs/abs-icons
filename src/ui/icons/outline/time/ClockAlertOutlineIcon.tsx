import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 19.19 20.01" color="currentColor" width="1em" height="1em" {...props}><g><path d="M13.62 12.61c-.11 0-.23-.03-.34-.08l-2.83-1.43A2.27 2.27 0 0 1 9.2 9.07V4.46c0-.41.34-.75.75-.75s.75.34.75.75v4.61c0 .3.16.56.43.69l2.83 1.43a.75.75 0 0 1-.34 1.42m3.67 2.77c-.41 0-.75-.34-.75-.75v-4.62c0-.41.34-.75.75-.75s.75.34.75.75v4.62c0 .41-.34.75-.75.75m.01 3.7a.749.749 0 1 1 0-1.5c.41 0 .75.34.75.75s-.34.75-.75.75" /><path d="M9.94 20.01c-1.29 0-2.59-.26-3.82-.77A9.9 9.9 0 0 1 .74 13.8C-1.34 8.7 1.1 2.85 6.17.75a9.8 9.8 0 0 1 7.59.02 9.9 9.9 0 0 1 5.38 5.44c.16.38-.03.82-.41.98s-.82-.03-.98-.41a8.4 8.4 0 0 0-4.57-4.62 8.32 8.32 0 0 0-6.44-.01C2.43 3.92.36 8.89 2.13 13.23a8.4 8.4 0 0 0 4.57 4.62c2.08.87 4.36.87 6.44.01l.18-.08c.38-.16.82.01.99.39a.76.76 0 0 1-.39.99l-.2.08c-1.22.5-2.5.75-3.78.75Z" /></g></svg>;


      export const ClockAlertOutlineIcon = createIcon("ClockAlertOutlineIcon", SVGComponent, {
  "fileName": "abs-clock-alert.svg",
  "presentationName": "clock-alert",
  "style": "outline",
  "category": "time"
});