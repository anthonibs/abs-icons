import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M19.87 4.31C19.65 4.22 14.59 2 12 2S4.35 4.22 4.06 4.35c-.33.19-1.94 1.43-1.94 7.23 0 7.21 6.84 9.67 9.78 10.4.06.01.12.02.18.02s.12-.01.18-.02c2.26-.56 9.62-2.95 9.62-10.4 0-5.8-1.61-7.04-2.01-7.27m-7.86 12.04h-.02c-.43 0-.78-.37-.78-.79s.35-.8.78-.8.79.36.79.79-.34.79-.77.8m.78-3.96c0 .43-.35.79-.78.79s-.79-.36-.79-.79V8.44c0-.43.35-.79.79-.79s.78.36.78.79z" /></svg>;


      export const ShieldAlertSoftSolidIcon = createIcon("ShieldAlertSoftSolidIcon", SVGComponent, {
  "fileName": "abs-shield-alert-soft-solid.svg",
  "presentationName": "shield-alert-soft",
  "style": "solid",
  "category": "security"
});