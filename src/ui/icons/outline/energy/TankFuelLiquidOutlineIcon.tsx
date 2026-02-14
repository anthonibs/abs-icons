import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><g><path d="M21.25 13.37c-.05.09-.1.2-.14.31-.04.1-.09.2-.13.31l-.54 1.79-.59 1.09-1.02.83-1.17.62H5.85l-1.29-.12-1.22-1.11s-.04-.18-.05-.2c.01-.24.16-.13-.01-.55-.03-.02-.06-.92.4-1.16 1.51-.84 3.28-1.01 5.27-.54 2.1.52 2.66.71 3.59 1.03.56.2 1.27.44 2.54.83.61.19 2.35.07 3.59-.43l.73-.4c.19-.14.36-.29.5-.43.57-.57.84-1.18 1.04-1.65.05-.11.1-.22.14-.32l.18.12Z" /><path d="M20.6 8.17c-.95-1.19-2.37-1.93-4.29-1.93h-4.79V5.13c0-.27-.05-.49-.33-.49H7.24c-.28 0-.37.21-.37.49v1.15c-3.36.34-4.88 3.14-4.88 6.52 0 1.35.24 2.61.75 3.66.17.35.37.68.6.98 0 .02.03.03.05.05.9 1.17 2.29 1.88 4.19 1.88h8.73c3.84 0 5.69-2.96 5.69-6.57 0-1.8-.47-3.44-1.4-4.63M7.89 5.59h2.64v.65H7.89zM3.51 12.8c0-1.55.39-5.15 4.08-5.15h8.73c3.89 0 4.19 3.95 4.19 5.15 0 .59-.07 1.8-.58 2.91-.54 1.19-1.6 2.25-3.61 2.25H7.58c-2.01 0-3.03-1.06-3.55-2.29-.44-1.02-.52-2.15-.52-2.86Z" /></g></svg>;


      export const TankFuelLiquidOutlineIcon = createIcon("TankFuelLiquidOutlineIcon", SVGComponent, {
  "fileName": "abs-tank-fuel-liquid.svg",
  "presentationName": "tank-fuel-liquid",
  "style": "outline",
  "category": "energy"
});