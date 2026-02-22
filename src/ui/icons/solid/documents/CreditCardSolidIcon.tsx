import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M21.97 10.68H2.03Q2 11.295 2 12c0 7.88 2.52 7.88 10 7.88s10 0 10-7.88q0-.705-.03-1.32M8.96 15.85H7.95c-.45 0-.81-.36-.81-.81s.36-.81.81-.81h1.01c.45 0 .81.36.81.81s-.36.81-.81.81m7.09 0h-3.54c-.45 0-.81-.36-.81-.81s.36-.81.81-.81h3.54c.45 0 .81.36.81.81s-.36.81-.81.81M12 4.12c-6.45 0-9.21 0-9.85 5.06h19.7c-.64-5.06-3.4-5.06-9.85-5.06" /></svg>;


      export const CreditCardSolidIcon = createIcon("CreditCardSolidIcon", SVGComponent, {
  "fileName": "abs-credit-card-solid.svg",
  "presentationName": "credit-card",
  "style": "solid",
  "category": "documents"
});