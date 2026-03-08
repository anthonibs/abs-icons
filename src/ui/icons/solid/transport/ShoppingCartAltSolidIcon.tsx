import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path fillRule="evenodd" d="M3.5 2.67a.754.754 0 0 0-.96.46c-.14.39.07.82.46.96l.26.09c.67.23 1.11.39 1.43.55.3.15.44.27.53.4s.16.31.2.68c.04.38.04.88.04 1.62v2.6c0 2.94.06 3.91.93 4.83.87.91 2.26.91 5.05.91h5.3c1.56 0 2.34 0 2.89-.45s.71-1.22 1.03-2.74l.5-2.42c.35-1.74.52-2.61.08-3.19s-1.96-.58-3.65-.58H6.95c0-.27-.02-.52-.04-.74-.05-.5-.17-.95-.45-1.36-.28-.42-.66-.68-1.1-.9-.41-.2-.94-.39-1.55-.6l-.3-.11Zm7.2 6.58a.745.745 0 1 0-1.47.25l.53 3.12a.745.745 0 1 0 1.47-.25zm5.41-.61c-.41-.07-.8.21-.86.61l-.53 3.12c-.07.41.21.8.61.86.41.07.79-.21.86-.61l.53-3.12a.75.75 0 0 0-.61-.86m-8.15 9.74c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5m9 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5" /></svg>;


      export const ShoppingCartAltSolidIcon = createIcon("ShoppingCartAltSolidIcon", SVGComponent, {
  "fileName": "abs-shopping-cart-alt-solid.svg",
  "presentationName": "shopping-cart-alt",
  "style": "solid",
  "category": "transport"
});