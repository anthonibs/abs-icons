import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><g><path d="M19.29 4.85c.4 0 .73.32.73.73v11.09l.74-.74c.28-.28.74-.28 1.03 0 .28.28.28.74 0 1.03l-1.99 1.99c-.28.28-.74.28-1.03 0l-1.98-1.98a.736.736 0 0 1 0-1.03c.28-.29.74-.29 1.02 0l.73.73V5.58c0-.4.32-.73.73-.73ZM3.97 16.6C2.66 15.28 2 13.69 2 11.81s.66-3.48 1.97-4.79C5.28 5.7 6.88 5.05 8.76 5.05s3.47.66 4.79 1.97 1.97 2.91 1.97 4.79-.66 3.48-1.97 4.79c-1.32 1.32-2.91 1.97-4.79 1.97s-3.47-.66-4.79-1.97m8.55-1.03c1.03-1.03 1.54-2.28 1.54-3.76s-.51-2.73-1.54-3.76-2.28-1.54-3.76-1.54S6.03 7.02 5 8.05s-1.54 2.28-1.54 3.76.51 2.73 1.54 3.76 2.28 1.54 3.76 1.54 2.73-.51 3.76-1.54" /><path d="M11.36 14.49c.28-.29.29-.75 0-1.03l-1.67-1.69a.75.75 0 0 1-.21-.51V8.77c0-.4-.32-.73-.73-.73-.4 0-.73.32-.73.73v3.11c0 .19.08.38.21.51l2.09 2.09c.28.28.74.28 1.02 0Z" /></g></svg>;


      export const ClockArrowDownOutlineIcon = createIcon("ClockArrowDownOutlineIcon", SVGComponent, {
  "fileName": "abs-clock-arrow-down.svg",
  "presentationName": "clock-arrow-down",
  "style": "outline",
  "category": "time"
});