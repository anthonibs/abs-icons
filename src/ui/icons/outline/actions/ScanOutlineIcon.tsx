import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 19.5 19.5" color="currentColor" width="1em" height="1em" {...props}><path d="M.75 5.5C.34 5.5 0 5.16 0 4.75v-.8C0 1.77 1.77 0 3.95 0h.8c.41 0 .75.34.75.75s-.34.75-.75.75h-.8C2.6 1.5 1.5 2.6 1.5 3.95v.8c0 .41-.34.75-.75.75m18 0c-.41 0-.75-.34-.75-.75v-.8c0-1.35-1.1-2.45-2.45-2.45h-.8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.8c2.18 0 3.95 1.77 3.95 3.95v.8c0 .41-.34.75-.75.75m-3.2 14h-.8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.8C16.9 18 18 16.9 18 15.55v-.8c0-.41.34-.75.75-.75s.75.34.75.75v.8c0 2.18-1.77 3.95-3.95 3.95m-10.8 0h-.8C1.77 19.5 0 17.73 0 15.55v-.8c0-.41.34-.75.75-.75s.75.34.75.75v.8C1.5 16.9 2.6 18 3.95 18h.8c.41 0 .75.34.75.75s-.34.75-.75.75" /></svg>;


      export const ScanOutlineIcon = createIcon("ScanOutlineIcon", SVGComponent, {
  "fileName": "abs-scan.svg",
  "presentationName": "scan",
  "style": "outline",
  "category": "actions"
});