import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M20.71 12.37c-.55-2.76-.83-4.15-1.86-5.15-.19-.19-.4-.36-.62-.51-.7-.48-1.48-.67-2.57-.75v-.28c0-2.02-1.64-3.67-3.66-3.67S8.34 3.66 8.34 5.68v.28c-1.09.08-1.88.28-2.57.75-.22.15-.43.32-.61.51-1.03 1-1.31 2.39-1.86 5.15-.79 3.95-1.18 5.93-.16 7.52.19.29.41.56.65.79C5.14 22 7.16 22 11.18 22h1.66c4.02 0 6.04 0 7.39-1.32.24-.24.46-.5.65-.79 1.03-1.59.63-3.57-.16-7.52ZM9.84 5.67c0-1.2.97-2.17 2.16-2.17s2.16.97 2.16 2.17v.23H9.82v-.23Zm9.77 13.4c-.13.2-.27.38-.44.54-.91.89-2.73.89-6.34.89h-1.66c-3.61 0-5.42 0-6.34-.89-.16-.16-.31-.34-.44-.54-.7-1.07-.34-2.85.37-6.4.49-2.46.74-3.7 1.43-4.38.13-.13.27-.24.42-.34.8-.55 2.06-.55 4.56-.55h1.66c2.5 0 3.76 0 4.56.55.15.1.29.22.42.34.7.68.94 1.91 1.43 4.38.71 3.55 1.06 5.33.37 6.4" /><path d="M14.91 8.59a.97.97 0 0 0 0 1.94.97.97 0 0 0 0-1.94m-5.82 0a.97.97 0 0 0 0 1.94.97.97 0 0 0 0-1.94" /></svg>;


      export const ShoppingBagSoftOutlineIcon = createIcon("ShoppingBagSoftOutlineIcon", SVGComponent, {
  "fileName": "abs-shopping-bag-soft.svg",
  "presentationName": "shopping-bag-soft",
  "style": "outline",
  "category": "commerce"
});