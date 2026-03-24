import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 18 13.9" color="currentColor" width="1em" height="1em" {...props}><path d="M3.87.23c-.3-.3-.79-.3-1.09 0L.21 2.8c-.29.31-.27.8.04 1.09.3.28.76.28 1.05 0l1.26-1.26v10.49c0 .43.35.77.77.77s.77-.35.77-.77V2.64L5.36 3.9c.31.29.8.27 1.09-.04.28-.3.28-.76 0-1.05zm6.15.8c-.43 0-.77.35-.77.77s.35.77.77.77h7.21c.43 0 .77-.35.77-.77s-.35-.77-.77-.77zm-1.03 3.6c-.43 0-.77.35-.77.77s.35.77.77.77h5.15c.43 0 .77-.35.77-.77s-.35-.77-.77-.77zm0 3.6c-.43 0-.77.35-.77.77s.35.77.77.77h3.09c.43 0 .77-.35.77-.77s-.35-.77-.77-.77zm0 3.09c-.43 0-.77.35-.77.77s.35.77.77.77h1.03c.43 0 .77-.35.77-.77s-.35-.77-.77-.77z" /></svg>;


      export const TrendArrowUpOutlineIcon = createIcon("TrendArrowUpOutlineIcon", SVGComponent, {
  "fileName": "abs-trend-arrow-up.svg",
  "presentationName": "trend-arrow-up",
  "style": "outline",
  "category": "analytics"
});