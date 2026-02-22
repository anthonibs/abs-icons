import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path fillRule="evenodd" d="M18.16 11.8c0 .41-.34.75-.75.75s-.75-.34-.75-.75.34-.75.75-.75.75.34.75.75m-2.7.06c0 1 .81 1.81 1.81 1.81h4.46c.04-.53.07-1.08.07-1.67 0-.7-.03-1.34-.09-1.95h-4.44c-1 0-1.81.81-1.81 1.81" /><path fillRule="evenodd" d="M11.65 8.64H7.59c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.06c.41 0 .75.34.75.75s-.34.75-.75.75m5.62 6.53c-1.83 0-3.31-1.49-3.31-3.31s1.49-3.31 3.31-3.31h4.21C20.6 4.5 17.81 2.96 12 2.96c-7.24 0-9.8 2.37-9.8 9.04s2.57 9.04 9.8 9.04c5.94 0 8.73-1.6 9.54-5.87z" /></svg>;


      export const WalletSolidIcon = createIcon("WalletSolidIcon", SVGComponent, {
  "fileName": "abs-wallet-solid.svg",
  "presentationName": "wallet",
  "style": "solid",
  "category": "general"
});