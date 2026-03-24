import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 18 18" color="currentColor" width="1em" height="1em" {...props}><g><path d="m12.73 5.61-5 5c-.08.08-.21.08-.29 0L5.26 8.43a.742.742 0 1 0-1.05 1.05l2.95 2.95c.23.23.61.23.85 0l5.77-5.77a.742.742 0 1 0-1.05-1.05" /><path d="M9 0C3.28 0 0 3.28 0 9s3.28 9 9 9 9-3.28 9-9-3.28-9-9-9m0 16.5c-4.84 0-7.5-2.66-7.5-7.5S4.16 1.5 9 1.5s7.5 2.66 7.5 7.5-2.66 7.5-7.5 7.5" /></g></svg>;


      export const CheckCircleAltOutlineIcon = createIcon("CheckCircleAltOutlineIcon", SVGComponent, {
  "fileName": "abs-check-circle-alt.svg",
  "presentationName": "check-circle-alt",
  "style": "outline",
  "category": "actions"
});