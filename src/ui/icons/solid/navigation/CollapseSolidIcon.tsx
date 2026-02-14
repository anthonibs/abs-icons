import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M21.38 3.45c0-.22-.09-.43-.25-.58a.7.7 0 0 0-.26-.18.8.8 0 0 0-.64 0 .8.8 0 0 0-.27.18l-3.69 3.68-1.78-1.78a.8.8 0 0 0-.59-.24h-.01c-.11 0-.21.02-.31.05a.86.86 0 0 0-.37.31c-.09.14-.14.3-.13.46v4.75c0 .21.08.43.24.58.15.16.36.24.58.24h4.75c.17 0 .32-.04.46-.14.14-.09.24-.21.31-.37.06-.15.08-.31.04-.47a.85.85 0 0 0-.22-.43l-1.8-1.79 3.7-3.69c.15-.16.24-.36.24-.58M10.1 13.07H5.35c-.17 0-.33.05-.46.14a.86.86 0 0 0-.31.37c-.06.15-.08.32-.04.48.03.16.11.31.22.42l1.8 1.8-.09.09-3.61 3.6c-.15.15-.24.36-.24.58s.09.43.25.58c.07.08.16.14.26.18.2.09.44.09.64 0a.8.8 0 0 0 .27-.18l3.69-3.69 1.78 1.79a.8.8 0 0 0 .59.24c.11 0 .22-.02.32-.06.15-.06.28-.16.37-.3s.14-.3.14-.46V13.9a.834.834 0 0 0-.83-.83" /></svg>;


      export const CollapseSolidIcon = createIcon("CollapseSolidIcon", SVGComponent, {
  "fileName": "abs-collapse-solid.svg",
  "presentationName": "collapse",
  "style": "solid",
  "category": "navigation"
});