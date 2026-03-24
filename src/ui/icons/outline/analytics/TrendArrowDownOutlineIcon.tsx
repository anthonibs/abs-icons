import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 18 13.9" color="currentColor" width="1em" height="1em" {...props}><path d="M2.78 13.67c.3.3.79.3 1.09 0l2.57-2.57c.31-.29.33-.78.04-1.09a.773.773 0 0 0-1.09-.04l-.04.04-1.26 1.26V.77c0-.43-.35-.77-.77-.77s-.77.35-.77.77v10.49L1.29 10a.773.773 0 0 0-1.09.04c-.28.3-.28.76 0 1.05l2.57 2.57Zm6.47-1.58c0 .43.35.77.77.77h7.21c.43 0 .77-.35.77-.77s-.35-.77-.77-.77h-7.21a.77.77 0 0 0-.77.77m-1.03-3.6c0 .43.35.77.77.77h5.15c.43 0 .77-.35.77-.77s-.35-.77-.77-.77H8.99a.77.77 0 0 0-.77.77m0-3.6c0 .43.35.77.77.77h3.09c.43 0 .77-.35.77-.77s-.35-.77-.77-.77H8.99a.77.77 0 0 0-.77.77m0-3.09c0 .43.35.77.77.77h1.03c.43 0 .77-.35.77-.77s-.35-.77-.77-.77H8.99a.77.77 0 0 0-.77.77" /></svg>;


      export const TrendArrowDownOutlineIcon = createIcon("TrendArrowDownOutlineIcon", SVGComponent, {
  "fileName": "abs-trend-arrow-down.svg",
  "presentationName": "trend-arrow-down",
  "style": "outline",
  "category": "analytics"
});