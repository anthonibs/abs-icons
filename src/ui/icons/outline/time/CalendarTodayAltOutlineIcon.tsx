import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><g><path d="M16.64 4.02V2.79a.781.781 0 0 0-1.56 0v.98c-.91-.1-1.92-.16-3.07-.16s-2.16.05-3.07.16v-.98a.781.781 0 0 0-1.56 0v1.23c-3.89.9-5.15 3.39-5.15 8.78 0 7.14 2.19 9.2 9.78 9.2s9.78-2.06 9.78-9.2c0-5.39-1.26-7.89-5.15-8.78M7.36 5.61v.38a.781.781 0 0 0 1.56 0v-.67c.88-.1 1.89-.15 3.07-.15s2.19.05 3.07.15v.67a.781.781 0 0 0 1.56 0v-.38c1.69.46 2.64 1.36 3.13 2.95H4.24c.48-1.59 1.43-2.49 3.13-2.95ZM12 20.43c-6.76 0-8.22-1.35-8.22-7.63 0-1.02.04-1.9.14-2.67h16.16c.09.77.14 1.65.14 2.67 0 6.28-1.46 7.63-8.22 7.63" /><path d="M7.36 11.25c-.57 0-1.06.2-1.46.6s-.6.89-.6 1.46.2 1.06.6 1.46.89.6 1.46.6 1.06-.2 1.46-.6.6-.89.6-1.46-.2-1.06-.6-1.46-.89-.6-1.46-.6" /></g></svg>;


      export const CalendarTodayAltOutlineIcon = createIcon("CalendarTodayAltOutlineIcon", SVGComponent, {
  "fileName": "abs-calendar-today-alt.svg",
  "presentationName": "calendar-today-alt",
  "style": "outline",
  "category": "time"
});