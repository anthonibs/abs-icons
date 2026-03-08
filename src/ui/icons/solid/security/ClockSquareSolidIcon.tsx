import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M12 2.02c-7.83 0-9.98 2.14-9.98 9.98s2.15 9.98 9.98 9.98 9.98-2.14 9.98-9.98S19.83 2.02 12 2.02m2.82 12.8c-.27.27-.72.27-.99 0l-1.98-1.99c-.27-.26-.41-.4-.47-.57-.08-.17-.08-.36-.08-.74V8.28c0-.39.32-.7.7-.7s.7.31.7.7v3.25c0 .12.04.23.13.31l1.99 1.99c.27.28.27.72 0 .99" /></svg>;


      export const ClockSquareSolidIcon = createIcon("ClockSquareSolidIcon", SVGComponent, {
  "fileName": "abs-clock-square-solid.svg",
  "presentationName": "clock-square",
  "style": "solid",
  "category": "security"
});