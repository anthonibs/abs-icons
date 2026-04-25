import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M21.25 21.24c-.18 0-.36-.07-.51-.2L9.14 10.4c-.33.48-.51 1.03-.51 1.6 0 .79.34 1.55.96 2.11.31.28.33.75.05 1.06s-.76.32-1.06.05c-.93-.86-1.45-2-1.45-3.22 0-.95.31-1.86.9-2.62L6.2 7.7C5.11 8.91 4.51 10.41 4.51 12c0 1.8.77 3.5 2.17 4.78.31.28.33.75.05 1.06s-.76.33-1.06.05C3.96 16.32 3.02 14.23 3.02 12c0-1.96.73-3.82 2.08-5.31L2.24 4.07a.746.746 0 0 1-.05-1.06c.28-.31.76-.32 1.06-.05l18.5 16.97a.746.746 0 0 1-.5 1.3Zm-1.76-5.38a.7.7 0 0 1-.33-.08.75.75 0 0 1-.34-1c1.25-2.54.64-5.58-1.51-7.56a.746.746 0 0 1-.05-1.06c.28-.3.76-.33 1.06-.05 2.65 2.43 3.4 6.18 1.85 9.33-.13.27-.4.42-.67.42Zm-3.38-3.11c-.41 0-.75-.34-.75-.75 0-.79-.34-1.55-.96-2.11a.746.746 0 0 1-.05-1.06c.28-.3.75-.33 1.06-.05.92.84 1.45 2.02 1.45 3.22 0 .41-.34.75-.75.75" /></svg>;


      export const AccessPointOffOutlineIcon = createIcon("AccessPointOffOutlineIcon", SVGComponent, {
  "fileName": "abs-access-point-off.svg",
  "presentationName": "access-point-off",
  "style": "outline",
  "category": "general"
});