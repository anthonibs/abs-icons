import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path fillRule="evenodd" d="M12.05 2h-.1c-.87 0-1.59 0-2.16.08-.61.08-1.15.26-1.59.7s-.62.99-.7 1.59c-.08.57-.08 1.3-.08 2.16v.08c-1.95.06-3.12.29-3.93 1.1-.66.66-.93 1.55-1.05 2.9 0 .03.02.06.06.06h19s.06-.03.06-.06c-.11-1.35-.39-2.25-1.05-2.9-.81-.81-1.98-1.04-3.93-1.1v-.08c0-.87 0-1.59-.08-2.16-.08-.61-.26-1.15-.7-1.59s-.99-.62-1.59-.7C13.64 2 12.91 2 12.05 2m3.08 4.58c0-.93 0-1.55-.06-2.02-.06-.45-.16-.64-.29-.76-.13-.13-.32-.23-.76-.29-.47-.06-1.09-.06-2.02-.06s-1.55 0-2.02.06c-.44.06-.64.16-.76.29-.13.13-.23.32-.29.76-.06.47-.06 1.09-.06 2.02z" /><path d="M2.36 14.29c0-.79 0-1.49.01-2.12 0-.03.03-.05.05-.05h19.14s.05.02.05.05c.01.63.01 1.33.01 2.12s0 1.49-.01 2.12c0 .03-.03.05-.05.05H2.43s-.05-.02-.05-.05c-.01-.63-.01-1.33-.01-2.12Zm.14 3.61s-.06.03-.06.06c.11 1.35.39 2.25 1.05 2.9 1.13 1.13 2.95 1.13 6.58 1.13h3.86c3.63 0 5.45 0 6.58-1.13.66-.66.93-1.55 1.05-2.9 0-.03-.02-.06-.06-.06z" /></svg>;


      export const TravelBagAltSolidIcon = createIcon("TravelBagAltSolidIcon", SVGComponent, {
  "fileName": "abs-travel-bag-alt-solid.svg",
  "presentationName": "travel-bag-alt",
  "style": "solid",
  "category": "commerce"
});