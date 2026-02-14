import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M17 2.2H7C3.8 2.2 1.2 4.8 1.2 8v8c0 3.2 2.6 5.8 5.8 5.8h10c3.2 0 5.8-2.6 5.8-5.8V8c0-3.2-2.6-5.8-5.8-5.8m0 18H7A4.2 4.2 0 0 1 2.8 16V8A4.2 4.2 0 0 1 7 3.8h10A4.2 4.2 0 0 1 21.2 8v.2H17c-1.01 0-1.97.4-2.69 1.11-.72.72-1.11 1.67-1.11 2.69s.4 1.97 1.11 2.69c.72.72 1.67 1.11 2.69 1.11h4.2v.2a4.2 4.2 0 0 1-4.2 4.2m4.2-6H17c-.59 0-1.14-.23-1.56-.64-.42-.42-.64-.97-.64-1.56s.23-1.14.64-1.56.97-.65 1.56-.65h4.2v4.4Z" /><path d="M16.21 12c0 .44.36.8.8.8s.8-.36.8-.8-.36-.8-.8-.8-.79.36-.79.8Z" /></svg>;


      export const WalletOutlineIcon = createIcon("WalletOutlineIcon", SVGComponent, {
  "fileName": "abs-wallet.svg",
  "presentationName": "wallet",
  "style": "outline",
  "category": "general"
});