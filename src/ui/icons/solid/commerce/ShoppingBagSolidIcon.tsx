import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path fillRule="evenodd" d="M8.39 6.59v-.98C8.39 3.61 10.01 2 12 2s3.61 1.62 3.61 3.61v.96c1.24.05 2 .19 2.58.67.8.67 1.01 1.79 1.44 4.05l.72 3.86c.59 3.17.89 4.76.03 5.8-.87 1.04-2.48 1.04-5.71 1.04H9.33c-3.23 0-4.84 0-5.71-1.04s-.57-2.63.03-5.8l.72-3.86c.42-2.26.64-3.38 1.44-4.05.58-.48 1.34-.61 2.58-.65m1.45-.98c0-1.2.97-2.17 2.17-2.17s2.17.97 2.17 2.17v.96H9.84z" /></svg>;


      export const ShoppingBagSolidIcon = createIcon("ShoppingBagSolidIcon", SVGComponent, {
  "fileName": "abs-shopping-bag-solid.svg",
  "presentationName": "shopping-bag",
  "style": "solid",
  "category": "commerce"
});