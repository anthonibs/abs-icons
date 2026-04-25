import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path fillRule="evenodd" d="M8.25 6.89V5.88c0-2.07 1.68-3.75 3.75-3.75s3.75 1.68 3.75 3.75v1c1.3.05 2.09.18 2.69.68.83.68 1.06 1.84 1.52 4.14l.6 3c.67 3.32 1 4.98.1 6.08s-2.59 1.1-5.98 1.1H9.32c-3.39 0-5.08 0-5.98-1.1s-.57-2.76.1-6.08l.6-3c.46-2.31.69-3.46 1.52-4.14.6-.5 1.39-.63 2.69-.67m1.5-1.01c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v1h-4.5zM12 17.13c-.98 0-1.81-.62-2.12-1.5a.754.754 0 0 0-.96-.46c-.39.14-.59.57-.46.96.52 1.46 1.91 2.5 3.54 2.5s3.02-1.04 3.54-2.5a.763.763 0 0 0-.46-.96.754.754 0 0 0-.96.46 2.24 2.24 0 0 1-2.12 1.5" /></svg>;


      export const ShoppingBagHappySolidIcon = createIcon("ShoppingBagHappySolidIcon", SVGComponent, {
  "fileName": "abs-shopping-bag-happy-solid.svg",
  "presentationName": "shopping-bag-happy",
  "style": "solid",
  "category": "commerce"
});