import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M9.2 5H7.8c-.77 0-1.4.63-1.4 1.4v11.2c0 .77.63 1.4 1.4 1.4h1.4c.77 0 1.4-.63 1.4-1.4V6.4c0-.77-.63-1.4-1.4-1.4m7 0h-1.4c-.77 0-1.4.63-1.4 1.4v11.2c0 .77.63 1.4 1.4 1.4h1.4c.77 0 1.4-.63 1.4-1.4V6.4c0-.77-.63-1.4-1.4-1.4" /></svg>;


      export const PauseSolidIcon = createIcon("PauseSolidIcon", SVGComponent, {
  "fileName": "abs-pause-solid.svg",
  "presentationName": "pause",
  "style": "solid",
  "category": "general"
});