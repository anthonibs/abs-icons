import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M7.02 19.88c-1.34 0-2.6-.52-3.55-1.47a5.04 5.04 0 0 1-1.48-3.55c0-1.96 1.12-3.71 2.86-4.54-.11-1.3.22-2.58.96-3.67a5.75 5.75 0 0 1 3.66-2.43c2.73-.53 5.41.98 6.42 3.49a3.63 3.63 0 0 1 3.8 2.47c.17.53.22 1.09.14 1.64a4.316 4.316 0 0 1 1.88 5.28 4.35 4.35 0 0 1-4.02 2.78zm3.55-14.25c-.27 0-.54.03-.81.08-1.11.22-2.06.85-2.69 1.78s-.86 2.06-.64 3.16a.76.76 0 0 1-.51.87 3.51 3.51 0 0 0-2.41 3.34c0 .94.37 1.82 1.03 2.48s1.54 1.02 2.48 1.02h10.66c1.15 0 2.2-.73 2.61-1.8.55-1.44-.17-3.06-1.62-3.61a.77.77 0 0 1-.45-.96c.15-.43.16-.91.02-1.34a2.09 2.09 0 0 0-2.63-1.34c-.2.06-.41.04-.6-.06a.76.76 0 0 1-.37-.47 4.23 4.23 0 0 0-4.08-3.15ZM12 17.03a.76.76 0 0 1-.76-.76V11.7l-1.55 1.55c-.3.3-.78.3-1.07 0-.3-.3-.3-.78 0-1.07l2.84-2.84c.07-.07.15-.12.24-.16.08-.03.17-.05.26-.06h.05a.7.7 0 0 1 .51.22l2.84 2.84c.3.3.3.78 0 1.07s-.78.3-1.07 0l-1.55-1.55v4.57c0 .42-.34.76-.76.76Z" /></svg>;


      export const CloudUploadOutlineIcon = createIcon("CloudUploadOutlineIcon", SVGComponent, {
  "fileName": "abs-cloud-upload.svg",
  "presentationName": "cloud-upload",
  "style": "outline",
  "category": "general"
});