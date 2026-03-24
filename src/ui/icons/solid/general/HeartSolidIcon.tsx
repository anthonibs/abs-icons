import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M17.65 3.05c-1.73-.56-4.1-.35-5.67 1.24-1.45-1.39-3.61-1.9-5.64-1.24-4.06 1.31-5.33 5.99-4.18 9.59 1.79 5.58 7.79 8.6 9.84 8.6s8.09-3.02 9.84-8.6c1.15-3.59-.12-8.28-4.19-9.59m.76 6.92c-.02.41-.35.73-.75.73h-.03a.744.744 0 0 1-.72-.78c.03-.95-.44-1.56-1.25-1.65a.75.75 0 0 1-.67-.82c.05-.41.42-.7.83-.67 1.6.17 2.64 1.45 2.59 3.19" /></svg>;


      export const HeartSolidIcon = createIcon("HeartSolidIcon", SVGComponent, {
  "fileName": "abs-heart-solid.svg",
  "presentationName": "heart",
  "style": "solid",
  "category": "general"
});