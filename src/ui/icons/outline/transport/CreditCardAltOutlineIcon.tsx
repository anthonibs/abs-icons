import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M10.15 14.92h-3.7c-.41 0-.75.34-.75.75s.34.75.75.75h3.7c.41 0 .75-.34.75-.75s-.34-.75-.75-.75m7.4-2.75h-3.7c-.41 0-.75.34-.75.75s.34.75.75.75h3.7c.41 0 .75-.34.75-.75s-.34-.75-.75-.75m-3.7 2.75h-1.39c-.41 0-.75.34-.75.75s.34.75.75.75h1.39c.41 0 .75-.34.75-.75s-.34-.75-.75-.75m-1.56-2c0-.41-.34-.75-.75-.75H9.69c-.41 0-.75.34-.75.75s.34.75.75.75h1.85c.41 0 .75-.34.75-.75m5.26 2h-1.39c-.41 0-.75.34-.75.75s.34.75.75.75h1.39c.41 0 .75-.34.75-.75s-.34-.75-.75-.75m-11.1-1.25h.92c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-.92c-.41 0-.75.34-.75.75s.34.75.75.75" /><path d="M12 3.99c-7.26 0-9.98 0-9.98 8.01s2.72 8.01 9.98 8.01 9.98 0 9.98-8.01S19.26 3.99 12 3.99m0 14.53c-7.35 0-8.48 0-8.48-6.51S4.65 5.5 12 5.5s8.48 0 8.48 6.51-1.13 6.51-8.48 6.51" /></svg>;


      export const CreditCardAltOutlineIcon = createIcon("CreditCardAltOutlineIcon", SVGComponent, {
  "fileName": "abs-credit-card-alt.svg",
  "presentationName": "credit-card-alt",
  "style": "outline",
  "category": "transport"
});