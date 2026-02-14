import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><g><path d="M21.25 10.38c-.64-3.76-3.59-6.82-7.33-7.57-3.22-.64-6.39.37-8.58 2.6 0 0-1.54 1.76-1.54 2.17 0 .28.23.5.5.5h3.79c.44-.01.77-.36.77-.78a.777.777 0 0 0-.78-.76H6.37a7.8 7.8 0 0 1 5.62-2.38c4.84 0 8.67 4.41 7.69 9.42-.6 3.05-3.06 5.51-6.11 6.11-5.01.98-9.42-2.85-9.42-7.69 0-.44-.36-.77-.78-.77s-.76.37-.76.77h.02c.01 5.16 4.21 9.37 9.38 9.37 5.7 0 10.23-5.11 9.24-10.99" /><path d="M11.98 6.56c-.39 0-.7.31-.7.7v4.36c0 .26.15.51.39.62l3.49 1.75a.704.704 0 0 0 .63-1.26l-3.11-1.55V7.25c0-.39-.31-.7-.7-.7Z" /></g></svg>;


      export const ClockTimeOutlineIcon = createIcon("ClockTimeOutlineIcon", SVGComponent, {
  "fileName": "abs-clock-time.svg",
  "presentationName": "clock-time",
  "style": "outline",
  "category": "security"
});