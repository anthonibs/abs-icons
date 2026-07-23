import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M12 2.25C7.45 2.25 3.75 6 3.75 10.6c0 5.53 4.8 11.15 8.25 11.15s8.25-5.62 8.25-11.15c0-4.6-3.7-8.35-8.25-8.35m2.17 9.19c.56.37.85.87.85 1.42s-.29 1.06-.85 1.44c-.59.38-1.36.59-2.17.59s-1.58-.21-2.17-.59c-.56-.37-.85-.88-.85-1.43s.29-1.05.85-1.43c1.21-.81 3.15-.81 4.34 0M9.92 8.42c0-1.15.94-2.09 2.08-2.09s2.08.94 2.08 2.09a2.084 2.084 0 0 1-2.01 2.08h-.11c-1.15-.04-2.04-.94-2.04-2.08" /></svg>;


      export const MarkerPinUserSolidIcon = createIcon("MarkerPinUserSolidIcon", SVGComponent, {
  "fileName": "abs-marker-pin-user-solid.svg",
  "presentationName": "marker-pin-user",
  "style": "solid",
  "category": "location",
  "isNew": true
});