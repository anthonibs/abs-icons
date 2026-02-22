import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M18.43 10.42c-.1-.02-.18-.1-.19-.2-.43-3.04-3.06-5.39-6.24-5.39-2.53 0-4.81 1.51-5.79 3.79C3.78 9.16 2 11.32 2 13.83c0 2.94 2.41 5.33 5.38 5.33h10.17c2.45 0 4.45-1.98 4.45-4.42 0-2.14-1.54-3.92-3.57-4.33Z" /></svg>;


      export const CloudAltSolidIcon = createIcon("CloudAltSolidIcon", SVGComponent, {
  "fileName": "abs-cloud-alt-solid.svg",
  "presentationName": "cloud-alt",
  "style": "solid",
  "category": "general"
});