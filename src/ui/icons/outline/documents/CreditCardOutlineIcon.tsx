import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M18 4.2H6C3.9 4.2 2.2 5.9 2.2 8v8c0 2.1 1.7 3.8 3.8 3.8h12c2.1 0 3.8-1.7 3.8-3.8V8c0-2.1-1.7-3.8-3.8-3.8M6 5.8h12c1.21 0 2.2.99 2.2 2.2v1.2H3.8V8c0-1.21.99-2.2 2.2-2.2m12 12.4H6c-1.21 0-2.2-.99-2.2-2.2v-5.2h16.4V16c0 1.21-.99 2.2-2.2 2.2" /><path d="M15 14.2h-3.5c-.44 0-.8.36-.8.8s.36.8.8.8H15c.44 0 .8-.36.8-.8s-.36-.8-.8-.8m-7 0H7c-.44 0-.8.36-.8.8s.36.8.8.8h1c.44 0 .8-.36.8-.8s-.36-.8-.8-.8" /></svg>;


      export const CreditCardOutlineIcon = createIcon("CreditCardOutlineIcon", SVGComponent, {
  "fileName": "abs-credit-card.svg",
  "presentationName": "credit-card",
  "style": "outline",
  "category": "documents"
});