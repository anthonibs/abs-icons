import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 19.5 19.47" color="currentColor" width="1em" height="1em" {...props}><g><path d="M19.36 8.06C18.7 4.16 15.63.98 11.75.2 8.41-.46 5.11.58 2.84 2.9c0 0-1.6 1.83-1.6 2.25 0 .29.24.52.52.52H5.7c.46-.01.8-.37.8-.81s-.37-.79-.81-.79H3.91A8.13 8.13 0 0 1 9.75 1.6c5.03 0 9 4.58 7.99 9.78-.62 3.17-3.18 5.72-6.35 6.35a8.16 8.16 0 0 1-9.78-7.99c0-.46-.37-.8-.81-.8s-.79.38-.79.8h.02c.01 5.36 4.37 9.73 9.74 9.73 5.92 0 10.62-5.31 9.6-11.41" /><path d="M9.73 4.09c-.41 0-.73.32-.73.73v4.53c0 .27.16.53.41.64l3.62 1.82c.36.18.8.03.98-.33s.03-.8-.33-.98l-3.23-1.61V4.81c0-.41-.32-.73-.73-.73Z" /></g></svg>;


      export const ClockHistoryAltOutlineIcon = createIcon("ClockHistoryAltOutlineIcon", SVGComponent, {
  "fileName": "abs-clock-history-alt.svg",
  "presentationName": "clock-history-alt",
  "style": "outline",
  "category": "time"
});