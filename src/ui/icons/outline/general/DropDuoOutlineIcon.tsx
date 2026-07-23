import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M13.07 2.36a1.77 1.77 0 0 0-2.14 0C8.76 4.01 3.71 8.43 3.74 13.74 3.74 18.3 7.44 22 12 22s8.26-3.7 8.26-8.25c.03-5.24-5.02-9.71-7.19-11.39M5.4 13.74c-.03-4.69 5-8.89 6.54-10.06.03-.03.05-.03.06-.03v16.7c-3.64 0-6.6-2.96-6.6-6.61" /></svg>;


      export const DropDuoOutlineIcon = createIcon("DropDuoOutlineIcon", SVGComponent, {
  "fileName": "abs-drop-duo.svg",
  "presentationName": "drop-duo",
  "style": "outline",
  "category": "general",
  "isNew": false
});