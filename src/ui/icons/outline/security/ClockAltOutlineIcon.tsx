import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M12.7 11.71V8.28c0-.39-.32-.7-.7-.7s-.7.31-.7.7V12c0 .19.07.36.2.49l2.33 2.33c.27.27.72.27.99 0s.27-.71 0-.99z" /><path d="M12 2.01c-6.25 0-9.83 3.64-9.83 9.99s3.58 9.99 9.83 9.99 9.83-3.64 9.83-9.99S18.25 2.01 12 2.01m0 18.47c-5.37 0-8.33-3.01-8.33-8.49S6.63 3.51 12 3.51s8.33 3.01 8.33 8.49-2.96 8.49-8.33 8.49Z" /></svg>;


      export const ClockAltOutlineIcon = createIcon("ClockAltOutlineIcon", SVGComponent, {
  "fileName": "abs-clock-alt.svg",
  "presentationName": "clock-alt",
  "style": "outline",
  "category": "security"
});