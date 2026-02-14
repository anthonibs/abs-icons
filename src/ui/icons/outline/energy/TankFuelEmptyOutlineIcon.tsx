import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M16.31 5.85h-4.78V4.66c0-.28-.23-.51-.51-.51H7.4c-.28 0-.51.23-.51.51v1.23c-3.36.36-4.88 3.35-4.88 6.96 0 3.85 1.73 7 5.58 7h8.72c3.85 0 5.69-3.15 5.69-7s-1.84-7-5.69-7m-5.78-.7v.7H7.89v-.7zm5.78 13.2H7.58c-3.69 0-4.08-3.85-4.08-5.5s.4-5.5 4.08-5.5h8.72c3.89 0 4.19 4.21 4.19 5.5s-.3 5.5-4.19 5.5Z" /><path d="M7.49 9.25c-.07-.12-.2-.2-.35-.2a.35.35 0 0 0-.35.19l-.32.47c-.46.76-.66 1.23-.66 1.61 0 .73.59 1.32 1.3 1.32s1.32-.59 1.32-1.32c0-.46-.32-1.03-.66-1.59l-.27-.47Zm-.37 2.53c-.29 0-.51-.24-.51-.52 0-.17.12-.37.22-.56l.1-.17c.03-.1.1-.25.22-.27.1.02.12.2.17.29l.07.15c.14.22.24.41.24.56 0 .29-.24.52-.51.52" /></svg>;


      export const TankFuelEmptyOutlineIcon = createIcon("TankFuelEmptyOutlineIcon", SVGComponent, {
  "fileName": "abs-tank-fuel-empty.svg",
  "presentationName": "tank-fuel-empty",
  "style": "outline",
  "category": "energy"
});