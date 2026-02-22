import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path fillRule="evenodd" d="M6.43 10.75h11.32c-.35-3.08-1.97-4.22-5.66-4.22s-5.3 1.14-5.67 4.22Zm14.91 1.32H2.66c-.36 0-.66.3-.66.66s.3.66.66.66h.55c.04.57.08 1.11.17 1.59v.04c.56 3.32 2.3 5.05 5.64 5.6h.11c.32 0 .59-.23.65-.56.05-.35-.19-.7-.55-.76-2.82-.47-4.09-1.75-4.55-4.55v-.04c-.07-.4-.11-.85-.14-1.33H6.4c.27 3.38 1.86 4.61 5.7 4.61s5.43-1.24 5.7-4.61h1.66c-.03.49-.07.95-.14 1.37v.04c-.47 2.78-1.75 4.05-4.55 4.52-.36.06-.6.41-.54.76.05.33.33.56.65.56h.11c3.36-.56 5.1-2.3 5.65-5.65v-.04c.08-.47.12-1 .16-1.55h.55a.66.66 0 1 0 0-1.32ZM3.92 9.78h.11c.32 0 .6-.23.65-.56.46-2.78 1.77-4.1 4.55-4.55.36-.06.61-.4.55-.76a.665.665 0 0 0-.76-.55c-3.36.55-5.1 2.29-5.65 5.65-.06.36.19.7.55.76Zm10.85-5.1c2.78.46 4.1 1.78 4.55 4.55.05.33.33.56.65.56h.11c.36-.06.61-.4.55-.76-.55-3.36-2.29-5.1-5.65-5.65-.36-.06-.7.19-.76.55s.19.7.55.76Z" /></svg>;


      export const ScanSolidIcon = createIcon("ScanSolidIcon", SVGComponent, {
  "fileName": "abs-scan-solid.svg",
  "presentationName": "scan",
  "style": "solid",
  "category": "general"
});