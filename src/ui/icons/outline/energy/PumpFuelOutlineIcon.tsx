import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="m17.15 18.31-1.13-7.59c-.1-.66-.45-1.26-.99-1.66L8.85 4.49a1.25 1.25 0 0 0-1.76.26c-.17.23-.25.49-.25.75 0 .39.18.77.51 1.02l3.02 2.24c.18.13.29.32.32.54l.81 5.4c.2 1.38 1.49 2.34 2.87 2.13l.28 1.85c.1.69.74 1.17 1.43 1.07.64-.1 1.08-.64 1.08-1.25v-.19Zm-3.34-3.25c-.31 0-.58-.26-.63-.57l-.7-4.35.73.5c.15.11.26.26.32.44l.78 3.99h-.5Z" /></svg>;


      export const PumpFuelOutlineIcon = createIcon("PumpFuelOutlineIcon", SVGComponent, {
  "fileName": "abs-pump-fuel.svg",
  "presentationName": "pump-fuel",
  "style": "outline",
  "category": "energy"
});