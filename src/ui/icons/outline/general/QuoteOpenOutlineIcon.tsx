import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path fillRule="evenodd" d="M8 12c1.64 0 3 1.33 3 3.02S9.6 18 8 18s-3-1-3-3.97c0-3.9 1-6.43 3.01-7.59C8.55 6.13 9.18 6 9.8 6H11c-3.98 1.99-3.25 6-3 6m8 0c1.64 0 3 1.33 3 3.02S17.6 18 16 18s-3-1-3-3.97c0-3.59.85-6.02 2.56-7.29.68-.51 1.53-.74 2.38-.74H19c-3.98 1.99-3.25 6-3 6" /></svg>;


      export const QuoteOpenOutlineIcon = createIcon("QuoteOpenOutlineIcon", SVGComponent, {
  "fileName": "abs-quote-open.svg",
  "presentationName": "quote-open",
  "style": "outline",
  "category": "general"
});