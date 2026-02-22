import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path fillRule="evenodd" d="M16 12c-1.64 0-3-1.33-3-3.02S14.4 6 16 6s3 1 3 3.97c0 3.9-1 6.43-3.01 7.59-.54.31-1.17.44-1.79.44H13c3.98-1.99 3.25-6 3-6m-8 0c-1.64 0-3-1.33-3-3.02S6.4 6 8 6s3 1 3 3.97c0 3.59-.85 6.02-2.56 7.29-.68.51-1.53.74-2.38.74H5c3.98-1.99 3.25-6 3-6" /></svg>;


      export const QuoteCloseOutlineIcon = createIcon("QuoteCloseOutlineIcon", SVGComponent, {
  "fileName": "abs-quote-close.svg",
  "presentationName": "quote-close",
  "style": "outline",
  "category": "general"
});