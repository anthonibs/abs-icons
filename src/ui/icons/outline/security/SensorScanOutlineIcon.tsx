import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M20.71 15.17c-.44 0-.79.35-.79.79v1.58a2.38 2.38 0 0 1-2.38 2.38h-1.58c-.44 0-.79.35-.79.79s.35.79.79.79h1.58c2.18 0 3.96-1.77 3.96-3.96v-1.58c0-.44-.35-.79-.79-.79M3.29 8.83c.44 0 .79-.35.79-.79V6.46a2.38 2.38 0 0 1 2.38-2.38h1.58c.44 0 .79-.35.79-.79s-.35-.79-.79-.79H6.46C4.28 2.5 2.5 4.27 2.5 6.46v1.58c0 .44.35.79.79.79m4.75 11.09H6.46a2.38 2.38 0 0 1-2.38-2.38v-1.58c0-.44-.35-.79-.79-.79s-.79.35-.79.79v1.58c0 2.19 1.77 3.96 3.96 3.96h1.58c.44 0 .79-.35.79-.79s-.35-.79-.79-.79m9.5-17.42h-1.58c-.44 0-.79.35-.79.79s.35.79.79.79h1.58a2.38 2.38 0 0 1 2.38 2.38v1.58c0 .44.35.79.79.79s.79-.35.79-.79V6.46c0-2.19-1.77-3.96-3.96-3.96m.2 10.3H6.24c-.53 0-.75-.39-.75-.83s.22-.77.75-.77h11.5c.53 0 .78.36.78.8s-.25.8-.78.8" /></svg>;


      export const SensorScanOutlineIcon = createIcon("SensorScanOutlineIcon", SVGComponent, {
  "fileName": "abs-sensor-scan.svg",
  "presentationName": "sensor-scan",
  "style": "outline",
  "category": "security"
});