import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M3.97 16.6C2.66 15.28 2 13.69 2 11.81s.66-3.48 1.97-4.79C5.28 5.7 6.88 5.05 8.76 5.05s3.47.66 4.79 1.97 1.97 2.91 1.97 4.79-.66 3.48-1.97 4.79c-1.32 1.32-2.91 1.97-4.79 1.97s-3.47-.66-4.79-1.97m15.32 2.55c-.4 0-.73-.32-.73-.73V7.33l-.74.74c-.28.28-.74.28-1.03 0a.736.736 0 0 1 0-1.03l1.99-1.99c.28-.28.74-.28 1.03 0l1.98 1.98c.28.28.28.75 0 1.03-.28.29-.74.29-1.02 0l-.73-.73v11.08c0 .4-.32.73-.73.73Zm-6.77-3.58c1.03-1.03 1.54-2.28 1.54-3.76s-.51-2.73-1.54-3.76-2.28-1.54-3.76-1.54S6.03 7.02 5 8.05s-1.54 2.28-1.54 3.76.51 2.73 1.54 3.76 2.28 1.54 3.76 1.54 2.73-.51 3.76-1.54m-1.15-1.07c.28-.29.29-.75 0-1.03L9.7 11.78a.75.75 0 0 1-.21-.51V8.78c0-.4-.32-.73-.73-.73-.4 0-.73.32-.73.73v3.11c0 .19.08.38.21.51l2.09 2.09c.28.28.74.28 1.02 0Z" /></svg>;


      export const ClockArrowUpOutlineIcon = createIcon("ClockArrowUpOutlineIcon", SVGComponent, {
  "fileName": "abs-clock-arrow-up.svg",
  "presentationName": "clock-arrow-up",
  "style": "outline",
  "category": "time"
});