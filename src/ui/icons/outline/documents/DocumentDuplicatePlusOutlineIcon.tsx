import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M17 7.2h-.2V7a4.8 4.8 0 0 0-1.41-3.39A4.84 4.84 0 0 0 12 2.2H7c-1.28 0-2.49.5-3.39 1.41C2.7 4.52 2.2 5.72 2.2 7v5c0 1.28.5 2.49 1.41 3.39.91.91 2.11 1.41 3.39 1.41h.2v.2c0 2.65 2.15 4.8 4.8 4.8h5c2.65 0 4.8-2.15 4.8-4.8v-5c0-2.65-2.15-4.8-4.8-4.8m-10 8c-.85 0-1.66-.33-2.26-.94S3.8 12.85 3.8 12V7c0-.84.34-1.67.94-2.26S6.15 3.8 7 3.8h5A3.21 3.21 0 0 1 15.2 7v.2H12c-2.65 0-4.8 2.15-4.8 4.8v3.2zM20.2 17c0 1.76-1.44 3.2-3.2 3.2h-5A3.21 3.21 0 0 1 8.8 17v-5c0-1.76 1.44-3.2 3.2-3.2h5c1.76 0 3.2 1.44 3.2 3.2z" /><path d="M17 13.7h-1.7V12c0-.44-.36-.8-.8-.8s-.8.36-.8.8v1.7H12c-.44 0-.8.36-.8.8s.36.8.8.8h1.7V17c0 .44.36.8.8.8s.8-.36.8-.8v-1.7H17c.44 0 .8-.36.8-.8s-.36-.8-.8-.8" /></svg>;


      export const DocumentDuplicatePlusOutlineIcon = createIcon("DocumentDuplicatePlusOutlineIcon", SVGComponent, {
  "fileName": "abs-document-duplicate-plus.svg",
  "presentationName": "document-duplicate-plus",
  "style": "outline",
  "category": "documents"
});