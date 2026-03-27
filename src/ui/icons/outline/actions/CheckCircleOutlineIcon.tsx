import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="m11 15.83 5.77-5.77a.742.742 0 1 0-1.05-1.05l-5 5c-.08.08-.21.08-.29 0l-2.18-2.18a.742.742 0 1 0-1.05 1.05l2.95 2.95c.23.23.61.23.85 0m1 5.67c-1.31 0-2.55-.25-3.71-.75a9.7 9.7 0 0 1-3.02-2.03c-.86-.85-1.53-1.86-2.03-3.02s-.75-2.39-.75-3.7.25-2.55.75-3.71 1.18-2.16 2.03-3.02 1.86-1.53 3.02-2.03 2.39-.75 3.7-.75 2.55.25 3.71.75 2.16 1.18 3.02 2.03 1.53 1.86 2.03 3.02.75 2.39.75 3.7-.25 2.55-.75 3.71a9.7 9.7 0 0 1-2.03 3.02c-.85.86-1.86 1.53-3.02 2.03s-2.39.75-3.7.75m0-1.5c2.23 0 4.13-.78 5.68-2.33s2.33-3.44 2.33-5.68-.78-4.13-2.33-5.68S14.24 3.98 12 3.98s-4.13.78-5.68 2.33-2.33 3.44-2.33 5.68.78 4.13 2.33 5.68S9.76 20 12 20" /></svg>;


      export const CheckCircleOutlineIcon = createIcon("CheckCircleOutlineIcon", SVGComponent, {
  "fileName": "abs-check-circle.svg",
  "presentationName": "check-circle",
  "style": "outline",
  "category": "actions"
});