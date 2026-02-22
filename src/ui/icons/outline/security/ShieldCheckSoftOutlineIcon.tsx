import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><g><path d="M12.08 22c-.06 0-.12 0-.18-.02-2.94-.73-9.78-3.19-9.78-10.39 0-5.8 1.61-7.04 1.93-7.23.29-.13 5.35-2.35 7.94-2.35s7.65 2.22 7.87 2.31c.4.23 2.01 1.47 2.01 7.27 0 7.45-7.36 9.84-9.61 10.39-.06.01-.12.02-.18.02M4.83 5.65c-.19.19-1.2 1.42-1.2 5.94 0 6.01 5.77 8.2 8.46 8.89 2.63-.68 8.29-2.85 8.29-8.89 0-4.52-1.02-5.75-1.2-5.94-1.45-.63-5.32-2.15-7.17-2.15S6.29 5.01 4.84 5.65Z" /><path d="m14.16 8.74-3.42 3.44-.95-.95a.754.754 0 0 0-1.06 0c-.29.29-.3.77 0 1.06l1.48 1.49a.75.75 0 0 0 1.06 0l3.95-3.98c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0" /></g></svg>;


      export const ShieldCheckSoftOutlineIcon = createIcon("ShieldCheckSoftOutlineIcon", SVGComponent, {
  "fileName": "abs-shield-check-soft.svg",
  "presentationName": "shield-check-soft",
  "style": "outline",
  "category": "security"
});