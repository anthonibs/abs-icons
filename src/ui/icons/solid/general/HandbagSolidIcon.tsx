import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path fillRule="evenodd" d="M12.09 2c2.22 0 4.07 1.67 4.35 3.89.09 0 .19 0 .19.09 2.04.56 3.7 2.04 4.35 4.07.28.74.28 1.67.46 3.24.09 1.76.19 2.78 0 3.7-.46 2.31-2.22 4.17-4.44 4.72-.83.28-1.85.28-3.7.28h-2.59c-1.76 0-2.78 0-3.7-.28-2.22-.65-3.98-2.5-4.44-4.72-.19-.83-.09-1.94 0-3.7.09-1.57.19-2.5.46-3.24.65-2.04 2.31-3.52 4.35-4.07.09 0 .19 0 .19-.09C8.03 3.76 9.88 2 12.11 2Zm0 1.48c-1.39 0-2.59 1.02-2.96 2.31h5.74c-.19-1.39-1.39-2.31-2.78-2.31" /></svg>;


      export const HandbagSolidIcon = createIcon("HandbagSolidIcon", SVGComponent, {
  "fileName": "abs-handbag-solid.svg",
  "presentationName": "handbag",
  "style": "solid",
  "category": "general"
});