import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M19.81 5.4c-.47-.66-1.16-1.13-1.93-1.38L13.99 2.8a6.56 6.56 0 0 0-3.97 0L6.13 4.02c-.77.25-1.45.72-1.93 1.38s-.74 1.44-.74 2.25v5.52c0 1.03.25 2.04.7 2.97a6.84 6.84 0 0 0 1.96 2.35l2.54 1.9c.97.72 2.15 1.11 3.35 1.11s2.38-.39 3.35-1.11l2.55-1.9a6.66 6.66 0 0 0 1.96-2.35c.46-.93.69-1.95.69-2.97V7.65c0-.81-.26-1.6-.74-2.25Zm-4.28 4.44-3.8 3.8c-.09.09-.19.15-.31.2-.11.05-.24.08-.36.08s-.25-.03-.36-.08a.8.8 0 0 1-.31-.2l-1.9-1.9c-.18-.18-.28-.43-.28-.67s.09-.5.28-.67c.18-.18.42-.28.67-.28s.49.1.67.28l1.23 1.23 3.13-3.14c.18-.17.42-.28.67-.28s.49.1.67.28.28.43.28.68-.09.49-.28.67" /></svg>;


      export const ShieldCheckSolidIcon = createIcon("ShieldCheckSolidIcon", SVGComponent, {
  "fileName": "abs-shield-check-solid.svg",
  "presentationName": "shield-check",
  "style": "solid",
  "category": "security"
});