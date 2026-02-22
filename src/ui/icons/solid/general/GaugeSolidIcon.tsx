import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path fillRule="evenodd" d="M19.36 4.63C17.59 2.86 15.05 1.99 12 1.99s-5.59.86-7.36 2.64C2.87 6.4 2 8.94 2 11.99c0 1.34.17 2.58.5 3.7v.03c.61 2 1.76 3.59 3.41 4.67 1.64 1.07 3.7 1.59 6.08 1.59s4.44-.52 6.08-1.59a8 8 0 0 0 2.49-2.58 9 9 0 0 0 .92-2.09v-.03c.34-1.12.51-2.37.51-3.71 0-3.05-.86-5.59-2.64-7.36ZM4.35 14.24c-.13-.68-.2-1.43-.2-2.24 0-2.66.74-4.59 2.01-5.85 1.26-1.26 3.19-2.01 5.85-2.01s4.59.74 5.85 2.01c1.26 1.26 2.01 3.19 2.01 5.85 0 .82-.07 1.56-.2 2.24-1.94-.23-3.86-.38-5.77-.43l2.72-4.53a1.072 1.072 0 0 0-1.84-1.1l-3.37 5.61c-2.34.02-4.68.18-7.05.46Z" /></svg>;


      export const GaugeSolidIcon = createIcon("GaugeSolidIcon", SVGComponent, {
  "fileName": "abs-gauge-solid.svg",
  "presentationName": "gauge",
  "style": "solid",
  "category": "general"
});