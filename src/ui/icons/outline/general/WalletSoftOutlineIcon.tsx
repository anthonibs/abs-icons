import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M19.67 11.88c-.36-2.2-1.89-4-3.98-4.73L15 5.91c-.64-1.2-1.74-2.1-3.06-2.46a5 5 0 0 0-3.91.52s-1.25.76-1.25.76h-.01a5.38 5.38 0 0 0-2.22 6.31c-.19.6-.3 1.22-.3 1.85v1.78c-.02 3.33 2.66 6.06 5.99 6.08h3.51a6.026 6.026 0 0 0 5.97-5.59c.01-.16.02-.32.02-.49v-1.78c0-.34-.03-.67-.08-1Zm-3.43 1.66c0-.44.36-.8.8-.8h1.2s.01.09.01.14v1.46h-1.21c-.44 0-.8-.36-.8-.8M7.57 6l1.24-.75c.82-.49 1.81-.62 2.73-.37.92.26 1.7.89 2.14 1.73v.01l.1.17h-3.54c-1.75 0-3.36.79-4.47 2.05.13-1.14.76-2.2 1.79-2.85Zm6.18 13.25h-3.49a4.55 4.55 0 0 1-4.51-4.58v-1.78c0-.55.1-1.09.28-1.61a4.51 4.51 0 0 1 4.22-2.98h3.5c.41 0 .82.06 1.21.17a4.56 4.56 0 0 1 2.99 2.78h-.91a2.3 2.3 0 0 0 0 4.6h1.06a4.52 4.52 0 0 1-4.35 3.4" /></svg>;


      export const WalletSoftOutlineIcon = createIcon("WalletSoftOutlineIcon", SVGComponent, {
  "fileName": "abs-wallet-soft.svg",
  "presentationName": "wallet-soft",
  "style": "outline",
  "category": "general"
});