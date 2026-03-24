import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 20.55 14.69" color="currentColor" width="1em" height="1em" {...props}><path d="M2.02 12.07C.67 10.72 0 9.08 0 7.15s.67-3.58 2.02-4.93C3.38.87 5.01.19 6.94.19s3.57.68 4.92 2.03 2.03 2.99 2.03 4.92-.68 3.57-2.03 4.92-2.99 2.03-4.92 2.03-3.57-.68-4.92-2.03Zm15.74 2.62c-.41 0-.75-.33-.75-.75V2.55l-.77.77a.742.742 0 1 1-1.05-1.05L17.24.22c.29-.29.76-.29 1.05 0l2.04 2.04c.29.29.29.77 0 1.06-.29.3-.76.29-1.05 0l-.75-.75v11.38c0 .41-.33.75-.75.75Zm-6.96-3.68q1.59-1.59 1.59-3.87c0-2.28-.53-2.81-1.59-3.87Q9.21 1.68 6.93 1.68c-2.28 0-2.81.53-3.86 1.59S1.49 5.62 1.49 7.14s.53 2.81 1.58 3.87 2.34 1.59 3.86 1.59 2.81-.53 3.87-1.59m-1.18-1.1c.29-.3.29-.77 0-1.06L7.9 7.11a.74.74 0 0 1-.22-.52V4.03a.749.749 0 1 0-1.5 0v3.2c0 .2.08.39.22.53l2.15 2.15c.29.29.76.29 1.05 0Z" /></svg>;


      export const ClockArrowUpOutlineIcon = createIcon("ClockArrowUpOutlineIcon", SVGComponent, {
  "fileName": "abs-clock-arrow-up.svg",
  "presentationName": "clock-arrow-up",
  "style": "outline",
  "category": "time"
});