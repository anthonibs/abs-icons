import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M12.93 2c1.4 0 2.71.75 3.55 1.87.37.65 1.12 1.03 1.78 1.21h.09c2.15.47 3.64 2.34 3.64 4.49v3.55c0 1.68 0 2.9-.09 3.93s-.28 1.87-.84 2.62c-.37.56-.84 1.03-1.4 1.4-.75.47-1.59.75-2.62.84s-2.34.09-3.93.09h-2.24c-1.68 0-2.9 0-3.93-.09s-1.87-.37-2.62-.84c-.56-.37-1.03-.84-1.4-1.4-.47-.75-.75-1.59-.84-2.62s-.09-2.34-.09-3.93V9.57c0-2.15 1.5-4.02 3.64-4.49h.09c.75-.19 1.4-.56 1.78-1.21C8.25 2.66 9.65 2 11.05 2h1.87ZM12 9.29c-2.06 0-3.74 1.68-3.74 3.74s1.68 3.74 3.74 3.74 3.74-1.68 3.74-3.74S14.06 9.29 12 9.29" /></svg>;


      export const CameraSolidIcon = createIcon("CameraSolidIcon", SVGComponent, {
  "fileName": "abs-camera-solid.svg",
  "presentationName": "camera",
  "style": "solid",
  "category": "devices"
});