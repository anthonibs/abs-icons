import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 19.5 19.5" color="currentColor" width="1em" height="1em" {...props}><path d="M.75 5.5c.41 0 .75-.34.75-.75v-.8C1.5 2.6 2.6 1.5 3.95 1.5h.8c.41 0 .75-.34.75-.75S5.16 0 4.75 0h-.8C1.77 0 0 1.77 0 3.95v.8c0 .41.34.75.75.75M15.55 0h-.8c-.41 0-.75.34-.75.75s.34.75.75.75h.8C16.9 1.5 18 2.6 18 3.95v.8c0 .41.34.75.75.75s.75-.34.75-.75v-.8C19.5 1.77 17.73 0 15.55 0m3.2 14c-.41 0-.75.34-.75.75v.8C18 16.9 16.9 18 15.55 18h-.8c-.41 0-.75.34-.75.75s.34.75.75.75h.8c2.18 0 3.95-1.77 3.95-3.95v-.8c0-.41-.34-.75-.75-.75m-14 4h-.8C2.6 18 1.5 16.9 1.5 15.55v-.8c0-.41-.34-.75-.75-.75s-.75.34-.75.75v.8c0 2.18 1.77 3.95 3.95 3.95h.8c.41 0 .75-.34.75-.75S5.16 18 4.75 18m9.6-5.8a.75.75 0 0 0-.15-1.05.76.76 0 0 0-1.05.14c-.01.02-1.32 1.7-3.4 1.7s-3.38-1.67-3.4-1.7a.75.75 0 0 0-1.2.9c.07.09 1.76 2.3 4.6 2.3s4.53-2.21 4.6-2.3ZM6.76 7.5c.41 0 .75-.34.75-.75S7.17 6 6.76 6s-.75.34-.75.75.34.75.75.75m6 0c.41 0 .75-.34.75-.75S13.17 6 12.76 6s-.75.34-.75.75.34.75.75.75" /></svg>;


      export const ScanFaceOutlineIcon = createIcon("ScanFaceOutlineIcon", SVGComponent, {
  "fileName": "abs-scan-face.svg",
  "presentationName": "scan-face",
  "style": "outline",
  "category": "actions"
});