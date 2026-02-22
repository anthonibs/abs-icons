import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path fillRule="evenodd" d="M12.09 2c2.22 0 4.07 1.67 4.35 3.89.09 0 .19 0 .19.09 2.04.56 3.7 2.04 4.35 4.07.28.74.28 1.67.46 3.24.09 1.76.19 2.78 0 3.7-.46 2.31-2.22 4.17-4.44 4.72-.83.28-1.85.28-3.7.28h-2.59c-1.76 0-2.78 0-3.7-.28-2.22-.65-3.98-2.5-4.44-4.72-.19-.83-.09-1.94 0-3.7.09-1.57.19-2.5.46-3.24.65-2.04 2.31-3.52 4.35-4.07.09 0 .19 0 .19-.09C8.03 3.76 9.89 2 12.11 2Zm-1.3 5.19H9.12V8.3c0 .37-.28.74-.74.74s-.74-.28-.74-.74v-.93c-1.57.46-2.78 1.57-3.24 3.15-.19.56-.19 1.3-.37 2.87-.09 1.85-.19 2.69-.09 3.33.37 1.76 1.67 3.24 3.43 3.7.65.19 1.39.19 3.33.19h2.59c1.85 0 2.69 0 3.33-.19 1.76-.46 3.06-1.94 3.43-3.7.19-.65.09-1.39 0-3.33-.09-1.67-.19-2.31-.37-2.87-.46-1.48-1.76-2.69-3.24-3.15v.93c0 .37-.28.74-.74.74s-.74-.28-.74-.74V7.19zm1.3-3.7c-1.39 0-2.59 1.02-2.96 2.31h5.83c-.28-1.39-1.48-2.31-2.87-2.31" /></svg>;


      export const HandbagOutlineIcon = createIcon("HandbagOutlineIcon", SVGComponent, {
  "fileName": "abs-handbag.svg",
  "presentationName": "handbag",
  "style": "outline",
  "category": "general"
});