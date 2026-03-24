import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M18.84 15.5a1 1 0 0 0-1.38-.29c-.32.21-.66.39-1.01.56L13.88 8.8c-.03-.07 0-.15.05-.2a2.786 2.786 0 0 0-.92-4.6V3c0-.55-.45-1-1-1s-1 .45-1 1v1a2.81 2.81 0 0 0-1.77 2.6c0 .79.33 1.49.85 2 .05.05.07.13.05.2l-2.57 6.97c-.34-.17-.68-.35-1.01-.56a.99.99 0 0 0-1.38.29c-.3.46-.18 1.08.29 1.39q.645.42 1.32.75c.05.02.07.08.05.13l-1.07 2.89A.993.993 0 0 0 6.71 22c.41 0 .79-.25.94-.65l1.06-2.87a.1.1 0 0 1 .13-.06 11.75 11.75 0 0 0 6.38 0c.05-.01.11.01.13.06l1.06 2.87c.15.4.53.65.94.65a.996.996 0 0 0 .94-1.34l-1.07-2.89c-.02-.05 0-.11.05-.13q.675-.33 1.32-.75c.46-.3.59-.92.29-1.39ZM12 5.8c.42 0 .77.36.77.8s-.35.8-.77.8-.77-.36-.77-.8.35-.8.77-.8M9.47 16.34c.32-.85 2.07-5.6 2.45-6.65.03-.07.13-.07.15 0l2.45 6.64c.03.07-.02.15-.09.17-1.6.39-3.28.39-4.88 0-.07-.02-.11-.1-.09-.17Z" /></svg>;


      export const DrawingCompassOutlineIcon = createIcon("DrawingCompassOutlineIcon", SVGComponent, {
  "fileName": "abs-drawing-compass.svg",
  "presentationName": "drawing-compass",
  "style": "outline",
  "category": "location"
});