import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M9.43 12c0 .22.08.42.23.57l6.62 6.61c.3.31.83.31 1.13 0 .32-.32.32-.83 0-1.14l-4.69-4.69c-.75-.75-.75-1.97 0-2.72l4.69-4.69c.15-.15.24-.35.24-.56s-.09-.42-.24-.57c-.15-.16-.36-.24-.57-.24s-.41.08-.56.24l-6.62 6.61a.8.8 0 0 0-.23.57Zm-2.28 7.4c.44 0 .8-.36.8-.8V5.4c0-.44-.36-.8-.8-.8s-.8.36-.8.8v13.2c0 .44.36.8.8.8" /></svg>;


      export const SkipBackOutlineIcon = createIcon("SkipBackOutlineIcon", SVGComponent, {
  "fileName": "abs-skip-back.svg",
  "presentationName": "skip-back",
  "style": "outline",
  "category": "general"
});