import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M20.43 8.6C19.41 4.04 15.46 2 12 2S4.6 4.04 3.57 8.59c-1.13 5.02 1.87 9.22 4.59 11.85C9.24 21.48 10.62 22 12 22s2.76-.52 3.83-1.56c2.72-2.63 5.73-6.82 4.6-11.84m-5.65 10.77a3.984 3.984 0 0 1-5.58 0C6.76 17 4.05 13.26 5.03 8.92c.9-4 4.32-5.42 6.97-5.42s6.07 1.42 6.97 5.43c.98 4.34-1.74 8.07-4.18 10.44Z" /><path d="m13.08 11.06 1.26-1.27c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0l-1.25 1.26-1.29-1.3a.754.754 0 0 0-1.06 0c-.29.29-.3.77 0 1.06l1.29 1.3-1.33 1.34c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.39-.07.53-.22l1.32-1.33 1.29 1.3c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.3-.77 0-1.06z" /></svg>;


      export const MarkerPinRemoveOutlineIcon = createIcon("MarkerPinRemoveOutlineIcon", SVGComponent, {
  "fileName": "abs-marker-pin-remove.svg",
  "presentationName": "marker-pin-remove",
  "style": "outline",
  "category": "location"
});