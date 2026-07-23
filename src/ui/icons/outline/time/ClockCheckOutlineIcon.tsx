import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><g><path d="M15.69 14.63c-.11 0-.23-.03-.34-.08l-2.94-1.48a2.09 2.09 0 0 1-1.16-1.89V6.46c0-.41.34-.75.75-.75s.75.34.75.75v4.72c0 .23.13.44.34.55l2.94 1.48a.75.75 0 0 1-.34 1.42" /><path d="M11.08 22H11c-5.12-.52-8.97-4.8-8.97-9.97C2.03 6.5 6.5 2 12 2s9.97 4.5 9.97 10.02c0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-4.7-3.8-8.52-8.47-8.52s-8.47 3.82-8.47 8.52c0 4.4 3.28 8.04 7.62 8.48.41.04.71.41.67.82-.04.39-.37.67-.75.67Z" /><path d="M16.15 21.47c-.27 0-.53-.11-.73-.3l-2.11-2.12a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l1.77 1.78 4.54-4.57c.29-.29.77-.29 1.06 0s.3.77 0 1.06l-4.88 4.9c-.19.19-.45.3-.73.3Z" /></g></svg>;


      export const ClockCheckOutlineIcon = createIcon("ClockCheckOutlineIcon", SVGComponent, {
  "fileName": "abs-clock-check.svg",
  "presentationName": "clock-check",
  "style": "outline",
  "category": "time",
  "isNew": true
});