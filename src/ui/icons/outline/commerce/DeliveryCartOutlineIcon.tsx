import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M21.12 14.81c-.1-.4-.51-.64-.92-.54l-8.32 2.16a.14.14 0 0 1-.17-.08c-.5-.9-1.37-1.52-2.36-1.76a.14.14 0 0 1-.11-.11L7.19 7.06c-.25-.91-.98-1.62-1.9-1.87l-1.7-.48a.75.75 0 0 0-.92.53c-.11.4.12.81.52.92l1.7.47c.43.12.74.44.85.83l1.96 7.08c-.08.01-.15.02-.23.04-1.98.51-3.19 2.5-2.64 4.47.54 1.95 2.59 3.08 4.56 2.57 1.68-.44 2.8-1.94 2.77-3.59 0-.07.04-.14.12-.16l8.3-2.16c.4-.11.64-.52.54-.92Zm-12.1 5.36c-1.21.32-2.43-.38-2.74-1.51-.31-1.12.37-2.31 1.57-2.62 1.21-.31 2.43.39 2.74 1.52.31 1.12-.37 2.3-1.57 2.61" /><path d="M11.88 13.84c.52.3 1.12.45 1.86.45s1.62-.15 2.73-.44c4.17-1.12 5.1-2.73 3.98-6.9s-2.73-5.09-6.9-3.98c-2.22.6-3.37 1.26-3.97 2.3s-.6 2.37 0 4.59c.59 2.22 1.26 3.37 2.3 3.97Zm-1-7.82c.37-.65 1.29-1.13 3.06-1.6 3.35-.9 4.16-.44 5.06 2.92s.43 4.16-2.92 5.06c-1.77.48-2.81.52-3.45.14-.65-.37-1.13-1.29-1.6-3.06-.48-1.77-.52-2.8-.14-3.45Z" /></svg>;


      export const DeliveryCartOutlineIcon = createIcon("DeliveryCartOutlineIcon", SVGComponent, {
  "fileName": "abs-delivery-cart.svg",
  "presentationName": "delivery-cart",
  "style": "outline",
  "category": "commerce"
});