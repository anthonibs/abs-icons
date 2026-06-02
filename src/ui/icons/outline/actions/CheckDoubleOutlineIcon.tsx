import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="m11.68 13.62.65.65c.36.36.93.36 1.29 0l6.45-6.45c.36-.36.93-.36 1.29 0s.36.94 0 1.29l-7.74 7.74c-.36.36-.93.36-1.29 0L7.8 12.32a.905.905 0 0 1 0-1.29c.36-.36.93-.36 1.29 0l1.3 1.3zm.65-3.23 3.24-3.24c.36-.36.93-.36 1.29 0s.36.93 0 1.29l-3.24 3.24c-.36.36-.93.36-1.29 0a.905.905 0 0 1 0-1.29m-3.87 6.45c-.36.36-.93.36-1.29 0l-4.53-4.53a.905.905 0 0 1 0-1.29c.36-.36.93-.36 1.29 0l.65.65 3.88 3.88c.36.36.36.93 0 1.29" /></svg>;


      export const CheckDoubleOutlineIcon = createIcon("CheckDoubleOutlineIcon", SVGComponent, {
  "fileName": "abs-check-double.svg",
  "presentationName": "check-double",
  "style": "outline",
  "category": "actions"
});