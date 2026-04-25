import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M16.64 4.02V2.79a.781.781 0 0 0-1.56 0v.98c-.91-.1-1.92-.16-3.07-.16s-2.16.05-3.07.16v-.98a.781.781 0 0 0-1.56 0v1.23c-3.89.9-5.15 3.39-5.15 8.78 0 7.14 2.19 9.2 9.78 9.2s9.78-2.06 9.78-9.2c0-5.39-1.26-7.89-5.15-8.78M7.37 5.61v.38a.781.781 0 0 0 1.56 0v-.67c.88-.1 1.89-.15 3.07-.15s2.19.05 3.07.15v.67a.781.781 0 0 0 1.56 0v-.38c1.62.44 2.56 1.28 3.06 2.75.03.09-.04.2-.14.2H4.44c-.1 0-.17-.1-.14-.2.5-1.47 1.44-2.31 3.06-2.75Zm4.64 14.82c-6.76 0-8.22-1.35-8.22-7.63 0-.96.04-1.8.12-2.54 0-.07.07-.13.15-.13h15.89c.07 0 .14.05.15.13.08.74.12 1.58.12 2.54 0 6.28-1.46 7.63-8.22 7.63Z" /></svg>;


      export const CalendarAltOutlineIcon = createIcon("CalendarAltOutlineIcon", SVGComponent, {
  "fileName": "abs-calendar-alt.svg",
  "presentationName": "calendar-alt",
  "style": "outline",
  "category": "time"
});