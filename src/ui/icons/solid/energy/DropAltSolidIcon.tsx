import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M13.07 2.36a1.77 1.77 0 0 0-2.14 0C8.76 4.01 3.71 8.43 3.74 13.74 3.74 18.3 7.44 22 12 22s8.26-3.7 8.26-8.25c.03-5.24-5.02-9.71-7.19-11.39m-1.1 15.89c-.13 0-.81-.04-.81-.81h.01c0-.77.68-.82.81-.82 1.35 0 2.44-1.1 2.44-2.44 0-.13.04-.81.81-.81s.81.68.81.81c0 2.25-1.82 4.07-4.07 4.07" /></svg>;


      export const DropAltSolidIcon = createIcon("DropAltSolidIcon", SVGComponent, {
  "fileName": "abs-drop-alt-solid.svg",
  "presentationName": "drop-alt",
  "style": "solid",
  "category": "energy"
});