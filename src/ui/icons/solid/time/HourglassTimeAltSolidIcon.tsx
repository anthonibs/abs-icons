import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path fillRule="evenodd" d="M5.2 3.3C5.8 2 7.87 2 12 2s6.2 0 6.8 1.3c.05.11.1.23.13.35.41 1.39-1.05 2.99-3.97 6.21l-1.65 1.81a.49.49 0 0 0 0 .66l1.65 1.81c2.92 3.22 4.38 4.82 3.97 6.21-.04.12-.08.23-.13.35C18.2 22 16.13 22 12 22s-6.2 0-6.8-1.3c-.05-.11-.1-.23-.13-.35-.41-1.39 1.05-2.99 3.97-6.21l1.65-1.81a.49.49 0 0 0 0-.66L9.04 9.86C6.12 6.64 4.66 5.04 5.07 3.65c.04-.12.08-.23.13-.35M10 17.75c-.41 0-.75.34-.75.75s.34.75.75.75h4c.41 0 .75-.34.75-.75s-.34-.75-.75-.75zM9.25 5.5c0-.41.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75h-4c-.41 0-.75-.34-.75-.75" /></svg>;


      export const HourglassTimeAltSolidIcon = createIcon("HourglassTimeAltSolidIcon", SVGComponent, {
  "fileName": "abs-hourglass-time-alt-solid.svg",
  "presentationName": "hourglass-time-alt",
  "style": "solid",
  "category": "time"
});