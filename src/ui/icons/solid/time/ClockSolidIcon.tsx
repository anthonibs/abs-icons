import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M12 2.5c-5.23 0-9.5 4.27-9.5 9.5s4.27 9.5 9.5 9.5 9.5-4.27 9.5-9.5-4.27-9.5-9.5-9.5m3.46 7.13-2.91 2.91c-.14.15-.34.23-.55.23l-2.91.01c-.43 0-.77-.35-.77-.78s.34-.78.77-.78h2.59l2.68-2.68c.3-.3.8-.3 1.1 0s.3.79 0 1.09" /></svg>;


      export const ClockSolidIcon = createIcon("ClockSolidIcon", SVGComponent, {
  "fileName": "abs-clock-solid.svg",
  "presentationName": "clock",
  "style": "solid",
  "category": "time"
});