import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 20 18.34" color="currentColor" width="1em" height="1em" {...props}><g><path d="M10 0C2.52 0 0 0 0 7.48c0 5.06.83 6.63 3.9 7.16s.03 0 .05 0c.38 0 .69-.31.69-.69 0-.32-.22-.57-.51-.66-2.36-.5-2.75-1.87-2.75-5.81 0-6.1 1.15-6.1 8.62-6.1s8.62 0 8.62 6.1c0 3.94-.36 5.31-2.73 5.79v.02s-.09.01-.12.03a.688.688 0 0 0 0 1.22c.09.06.2.08.32.08h.07l.12-.03h.04c2.66-.64 3.68-2.36 3.68-7.11C20 0 17.48 0 10 0" /><path d="M11.59 12.94c-.79-.95-2.39-.95-3.18 0l-1.67 2.01c-.52.62-.63 1.47-.28 2.2.34.74 1.06 1.19 1.87 1.19h3.34c.81 0 1.53-.46 1.87-1.19s.24-1.58-.28-2.2zm.7 3.62c-.04.09-.22.39-.62.39H8.33c-.4 0-.58-.3-.62-.39a.7.7 0 0 1 .09-.73l1.67-2.01c.18-.21.41-.25.53-.25s.35.03.53.25l1.67 2.01c.26.31.14.64.09.73" /></g></svg>;


      export const AirplayOutlineIcon = createIcon("AirplayOutlineIcon", SVGComponent, {
  "fileName": "abs-airplay.svg",
  "presentationName": "airplay",
  "style": "outline",
  "category": "media"
});