import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M3 7.75c.41 0 .75-.34.75-.75v-.8c0-1.35 1.1-2.45 2.45-2.45H7c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-.8c-2.18 0-3.95 1.77-3.95 3.95V7c0 .41.34.75.75.75m14.8-5.5H17c-.41 0-.75.34-.75.75s.34.75.75.75h.8c1.35 0 2.45 1.1 2.45 2.45V7c0 .41.34.75.75.75s.75-.34.75-.75v-.8c0-2.18-1.77-3.95-3.95-3.95m3.2 14c-.41 0-.75.34-.75.75v.8c0 1.35-1.1 2.45-2.45 2.45H17c-.41 0-.75.34-.75.75s.34.75.75.75h.8c2.18 0 3.95-1.77 3.95-3.95V17c0-.41-.34-.75-.75-.75m-14 4h-.8c-1.35 0-2.45-1.1-2.45-2.45V17c0-.41-.34-.75-.75-.75s-.75.34-.75.75v.8c0 2.18 1.77 3.95 3.95 3.95H7c.41 0 .75-.34.75-.75s-.34-.75-.75-.75m9.6-5.8a.75.75 0 0 0-.15-1.05.76.76 0 0 0-1.05.14c-.01.02-1.32 1.7-3.4 1.7s-3.38-1.67-3.4-1.7a.75.75 0 0 0-1.2.9c.07.09 1.76 2.3 4.6 2.3s4.53-2.21 4.6-2.3Zm-7.59-4.7c.41 0 .75-.34.75-.75s-.34-.75-.75-.75-.75.34-.75.75.34.75.75.75m6 0c.41 0 .75-.34.75-.75s-.34-.75-.75-.75-.75.34-.75.75.34.75.75.75" /></svg>;


      export const ScanFaceOutlineIcon = createIcon("ScanFaceOutlineIcon", SVGComponent, {
  "fileName": "abs-scan-face.svg",
  "presentationName": "scan-face",
  "style": "outline",
  "category": "actions"
});