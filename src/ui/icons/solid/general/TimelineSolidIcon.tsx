import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M20 6c-1.1 0-2 .9-2 2 0 .24.05.47.13.68l-2.79 3.35A2 2 0 0 0 15 12c-.18 0-.35.03-.51.07l-2.56-2.56c.04-.16.07-.33.07-.51 0-1.1-.9-2-2-2s-2 .9-2 2c0 .23.05.45.12.66l-3.75 4.38C4.25 14.02 4.13 14 4 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2c0-.23-.05-.45-.12-.66l3.75-4.38c.12.02.24.04.37.04.18 0 .35-.03.51-.07l2.56 2.56c-.04.16-.07.33-.07.51 0 1.1.9 2 2 2s2-.9 2-2c0-.24-.05-.47-.13-.68l2.79-3.35c.11.02.22.03.34.03 1.1 0 2-.9 2-2s-.9-2-2-2" /></svg>;


      export const TimelineSolidIcon = createIcon("TimelineSolidIcon", SVGComponent, {
  "fileName": "abs-timeline-solid.svg",
  "presentationName": "timeline",
  "style": "solid",
  "category": "general",
  "isNew": true
});