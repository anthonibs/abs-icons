import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path fillRule="evenodd" d="M6.66 13.62h.02c.13 0 .25-.05.34-.13l3.38-3.38c.12-.13.17-.31.12-.47-.2-.68.03-1.16.3-1.7.68-1.4.95-2.67-2.13-5.21-.74-.61-1.54-.83-2.38-.66-1.78.34-3.01 2.29-3.01 2.29-.81 1.14-1.49 3.85 3.02 9.11.09.1.21.16.35.16Zm14.62 1.69c-2.54-3.07-3.81-2.8-5.21-2.12-.88.42-1.65.8-3.44-.8l8.43-8.43c.28-.29.28-.74 0-1.03a.724.724 0 0 0-1.02 0L2.21 20.76c-.28.29-.28.74 0 1.03.14.13.33.2.51.2s.37-.07.51-.2l5.64-5.65c4.26 4.12 7.08 5.14 8.81 5.14.94 0 1.57-.3 1.92-.56.02 0 2.01-1.24 2.35-3.05.16-.83-.07-1.63-.68-2.37Z" /></svg>;


      export const PhoneOffSolidIcon = createIcon("PhoneOffSolidIcon", SVGComponent, {
  "fileName": "abs-phone-off-solid.svg",
  "presentationName": "phone-off",
  "style": "solid",
  "category": "general"
});