import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M12 21.5c-1.19 0-2.36-.39-3.31-1.11L6.1 18.45a6.7 6.7 0 0 1-1.94-2.32c-.46-.91-.7-1.93-.7-2.94V7.56c0-.79.25-1.55.72-2.18a3.63 3.63 0 0 1 1.87-1.33l3.97-1.25c1.29-.4 2.65-.4 3.93 0l3.98 1.25c.75.23 1.4.69 1.87 1.33s.72 1.39.72 2.18v5.63c0 1.02-.24 2.04-.7 2.94-.45.91-1.13 1.71-1.94 2.32l-2.59 1.94c-.94.71-2.12 1.11-3.31 1.11Zm0-17.45c-.51 0-1.01.08-1.51.23L6.52 5.53a2.14 2.14 0 0 0-1.5 2.03v5.62c0 .78.19 1.55.53 2.25s.86 1.31 1.48 1.78l2.59 1.94c1.36 1.03 3.39 1.03 4.75 0l2.59-1.94a5.16 5.16 0 0 0 1.48-1.77c.35-.69.53-1.47.54-2.25V7.57c0-.46-.14-.89-.42-1.26-.27-.37-.65-.64-1.08-.77L13.5 4.29c-.49-.15-1-.23-1.5-.23Zm-5.71.74" /><path d="M12 13.12c-.41 0-.75-.34-.75-.75V8.62c0-.41.34-.75.75-.75s.75.34.75.75v3.75c0 .41-.34.75-.75.75m0 3.01c-.41 0-.76-.34-.76-.75s.34-.76.75-.76.75.34.75.75-.34.76-.75.76Z" /></svg>;


      export const ShieldExclamationOutlineIcon = createIcon("ShieldExclamationOutlineIcon", SVGComponent, {
  "fileName": "abs-shield-exclamation.svg",
  "presentationName": "shield-exclamation",
  "style": "outline",
  "category": "security"
});