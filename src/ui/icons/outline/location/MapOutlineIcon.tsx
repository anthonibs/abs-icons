import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M20.8 4.4c-.76-.44-1.76-.38-2.73.18l-2.2 1.25c-.27.15-.8.17-1.07.03L9.87 3.41c-.72-.35-1.78-.32-2.47.07L3.61 5.64c-.88.5-1.6 1.74-1.6 2.75v8.75c0 1.12.44 2.01 1.2 2.45s1.76.38 2.73-.18l2.2-1.25c.27-.15.8-.17 1.07-.03l4.93 2.46c.34.16.75.25 1.16.25.47 0 .95-.11 1.31-.31l4.07-2.32c.75-.44 1.32-1.41 1.32-2.27V6.85c0-1.12-.44-2.01-1.2-2.45M5.18 18.11c-.5.28-.95.35-1.24.18s-.45-.59-.45-1.16V8.38c0-.53.38-1.18.84-1.45l2.7-1.54c.38-.22.85.06.85.49v10.77c-.17.05-.35.11-.5.19l-2.21 1.25Zm4.69-1.31a2 2 0 0 0-.49-.17V5.76c0-.42.44-.7.82-.51l3.92 1.94c.15.08.32.12.49.17v10.88c0 .42-.44.7-.82.51zm10.62-1.19c0 .54-.38 1.2-.85 1.46l-2.69 1.53a.567.567 0 0 1-.85-.49V7.32c.17-.05.34-.11.49-.19l2.21-1.25c.5-.28.95-.35 1.24-.18s.45.59.45 1.16z" /></svg>;


      export const MapOutlineIcon = createIcon("MapOutlineIcon", SVGComponent, {
  "fileName": "abs-map.svg",
  "presentationName": "map",
  "style": "outline",
  "category": "location"
});