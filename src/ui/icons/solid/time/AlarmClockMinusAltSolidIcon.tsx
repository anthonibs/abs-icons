import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="m4.56 5.57 3.67-2.3c.33-.2.42-.62.22-.95a.683.683 0 0 0-.95-.22L3.83 4.4c-.33.2-.42.63-.22.95.2.33.62.42.95.22m11.21-2.29 3.67 2.3c.33.2.75.11.95-.22s.11-.75-.22-.95l-3.67-2.3c-.33-.2-.75-.1-.95.22-.2.33-.11.75.22.95M12 4.12c-5.68 0-8.94 3.26-8.94 8.94S6.32 22 12 22s8.94-3.26 8.94-8.94S17.68 4.12 12 4.12m2.75 9.59H9.24c-.39 0-.69-.31-.69-.69s.31-.69.69-.69h5.51c.39 0 .69.31.69.69s-.31.69-.69.69" /></svg>;


      export const AlarmClockMinusAltSolidIcon = createIcon("AlarmClockMinusAltSolidIcon", SVGComponent, {
  "fileName": "abs-alarm-clock-minus-alt-solid.svg",
  "presentationName": "alarm-clock-minus-alt",
  "style": "solid",
  "category": "time"
});