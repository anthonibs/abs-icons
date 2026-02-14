import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M12 21.8c-5.4 0-9.8-4.4-9.8-9.8S6.6 2.2 12 2.2s9.8 4.4 9.8 9.8-4.4 9.8-9.8 9.8m0-18c-4.52 0-8.2 3.68-8.2 8.2s3.68 8.2 8.2 8.2 8.2-3.68 8.2-8.2-3.68-8.2-8.2-8.2" /><path d="M12 12.8H9c-.44 0-.8-.36-.8-.8s.36-.8.8-.8h2.67l2.77-2.77c.31-.31.82-.31 1.13 0s.31.82 0 1.13l-3 3c-.15.15-.35.23-.57.23Z" /></svg>;


      export const ClockOutlineIcon = createIcon("ClockOutlineIcon", SVGComponent, {
  "fileName": "abs-clock.svg",
  "presentationName": "clock",
  "style": "outline",
  "category": "security"
});