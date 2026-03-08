import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M15.24 2h-3.89c-1.77 0-3.17 0-4.26.15-1.12.15-2.04.47-2.75 1.19-.72.72-1.04 1.64-1.19 2.77C3 7.21 3 8.61 3 10.38v5.84c0 1.45.85 2.7 2.08 3.27.07.03.15-.02.14-.09-.06-.89-.06-2.09-.06-3.09V11.3c0-1.28 0-2.39.12-3.27.13-.95.41-1.86 1.15-2.59.73-.74 1.63-1.02 2.58-1.15.88-.12 1.98-.12 3.26-.12h3.06c1.22 0 2.27 0 3.12.1.06 0 .11-.06.08-.11A3.61 3.61 0 0 0 15.23 2Z" /><path d="M6.6 11.4c0-2.73 0-4.09.84-4.94.85-.85 2.2-.85 4.92-.85h2.88c2.72 0 4.07 0 4.92.85.84.85.84 2.21.84 4.94v4.82c0 2.73 0 4.09-.84 4.94-.85.85-2.2.85-4.92.85h-2.88c-2.72 0-4.07 0-4.92-.85-.84-.85-.84-2.21-.84-4.94z" /></svg>;


      export const DocumentCopySolidIcon = createIcon("DocumentCopySolidIcon", SVGComponent, {
  "fileName": "abs-document-copy-solid.svg",
  "presentationName": "document-copy",
  "style": "solid",
  "category": "documents"
});