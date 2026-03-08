import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M22.47 13.64a.75.75 0 0 0-.91-.54l-8.87 2.31-.31.09c-.35-.58-.89-1.03-1.52-1.26l-.16-.55L8.55 5.9c-.25-.91-.98-1.62-1.9-1.87l-1.7-.48a.75.75 0 0 0-.92.53c-.11.4.12.81.52.92l1.7.47c.43.12.74.44.85.83l2.15 7.79c-.08.02-.16.03-.24.05-1.59.42-2.53 2-2.11 3.55.43 1.54 2.06 2.45 3.65 2.04a2.91 2.91 0 0 0 2.21-2.78l.33-.1 8.84-2.29c.4-.11.64-.52.54-.92" /><path d="M17.53 11.86c3.72-.93 4.42-2.09 3.49-5.78s-2.09-4.39-5.81-3.45c-3.72.93-4.42 2.09-3.49 5.78s2.09 4.39 5.81 3.45" /></svg>;


      export const DeliveryCartSolidIcon = createIcon("DeliveryCartSolidIcon", SVGComponent, {
  "fileName": "abs-delivery-cart-solid.svg",
  "presentationName": "delivery-cart",
  "style": "solid",
  "category": "transport"
});