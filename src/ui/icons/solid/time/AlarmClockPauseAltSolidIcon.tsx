import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="m4.56 5.57 3.67-2.3c.33-.2.42-.62.22-.95a.683.683 0 0 0-.95-.22L3.83 4.4c-.33.2-.42.63-.22.95.2.33.62.42.95.22m11.21-2.29 3.67 2.3c.33.2.75.11.95-.22s.11-.75-.22-.95l-3.67-2.3c-.33-.2-.75-.1-.95.22-.2.33-.11.75.22.95M12 4.12c-5.68 0-8.94 3.26-8.94 8.94S6.32 22 12 22s8.94-3.26 8.94-8.94S17.68 4.12 12 4.12m2.57 11.9c0 .41-.34.74-.74.74s-.74-.33-.74-.74V10.1c0-.4.33-.74.74-.74s.74.34.74.74zm-3.65-5.92v5.92c0 .41-.33.74-.74.74s-.74-.33-.74-.74V10.1c0-.4.34-.74.74-.74s.74.34.74.74" /></svg>;


      export const AlarmClockPauseAltSolidIcon = createIcon("AlarmClockPauseAltSolidIcon", SVGComponent, {
  "fileName": "abs-alarm-clock-pause-alt-solid.svg",
  "presentationName": "alarm-clock-pause-alt",
  "style": "solid",
  "category": "time"
});