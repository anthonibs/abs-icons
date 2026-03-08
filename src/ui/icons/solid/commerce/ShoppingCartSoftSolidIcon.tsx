import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M7.96 18.37c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5m9 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M2.54 3.13c.14-.39.57-.6.96-.46l.3.11c.62.22 1.14.4 1.55.6.44.22.82.48 1.1.9.28.41.4.86.45 1.36.02.22.03.38.04.65v.08h1.59c.04 0 .07.03.08.07l1.63 9.21c0 .05-.03.1-.08.1-1.96-.02-3.05-.15-3.77-.91-.87-.91-.93-1.88-.93-4.83v-2.6c0-.74 0-1.24-.04-1.62-.04-.36-.11-.54-.2-.68-.09-.13-.22-.25-.52-.4-.32-.16-.76-.31-1.43-.55l-.26-.09a.754.754 0 0 1-.46-.96Zm9.32 12.62h2.71s.07-.03.08-.07l1.63-9.22s-.03-.1-.08-.1h-5.96c-.05 0-.09.05-.08.1l1.63 9.22s.04.07.08.07Zm5.94-9.31s.04-.07.08-.07c1.57 0 2.94.03 3.36.58.44.58.27 1.45-.08 3.19l-.5 2.42c-.32 1.53-.47 2.29-1.03 2.74-1.05.57-2.96.45-3.41.45-.04 0-.06-.04-.06-.08l1.63-9.24Z" /></svg>;


      export const ShoppingCartSoftSolidIcon = createIcon("ShoppingCartSoftSolidIcon", SVGComponent, {
  "fileName": "abs-shopping-cart-soft-solid.svg",
  "presentationName": "shopping-cart-soft",
  "style": "solid",
  "category": "commerce"
});