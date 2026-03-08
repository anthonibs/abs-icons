import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M2.54 3.13c.14-.39.57-.6.96-.46l.3.11c.62.22 1.14.4 1.55.6.44.22.82.48 1.1.9.28.41.4.86.45 1.36.02.22.04.47.04.74h10.64c1.68 0 3.2 0 3.65.58.44.58.27 1.45-.08 3.19l-.5 2.42c-.32 1.53-.47 2.29-1.03 2.74-.55.45-1.33.45-2.89.45h-5.3c-2.79 0-4.18 0-5.05-.91s-.93-1.88-.93-4.83v-2.6c0-.74 0-1.24-.04-1.62-.04-.36-.11-.54-.2-.68-.09-.13-.22-.25-.53-.4-.32-.16-.76-.31-1.43-.55l-.26-.09a.754.754 0 0 1-.46-.96Zm5.42 15.24c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5m9 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5" /></svg>;


      export const ShoppingCartSolidIcon = createIcon("ShoppingCartSolidIcon", SVGComponent, {
  "fileName": "abs-shopping-cart-solid.svg",
  "presentationName": "shopping-cart",
  "style": "solid",
  "category": "commerce"
});