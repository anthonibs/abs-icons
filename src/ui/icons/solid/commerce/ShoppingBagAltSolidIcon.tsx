import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path fillRule="evenodd" d="M8.25 6.39V5.37c0-2.07 1.68-3.75 3.75-3.75s3.75 1.68 3.75 3.75v1.02c1.29.04 2.07.18 2.68.68.83.69 1.05 1.86 1.49 4.2l.75 4c.62 3.29.93 4.94.03 6.02s-2.57 1.08-5.92 1.08H9.24c-3.35 0-5.02 0-5.92-1.08s-.59-2.73.03-6.02l.75-4c.44-2.34.66-3.51 1.49-4.2.6-.5 1.39-.64 2.68-.68Zm1.5-1.02c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v1h-4.5zm5.99 5.88a.753.753 0 0 0-.86-.62c-.41.07-.68.45-.62.86l1 6c.07.41.46.68.86.62.41-.07.68-.45.62-.86zm-6.62-.62a.747.747 0 0 0-.86.62l-1 6c-.07.41.21.79.62.86s.79-.21.86-.62l1-6a.747.747 0 0 0-.62-.86" /></svg>;


      export const ShoppingBagAltSolidIcon = createIcon("ShoppingBagAltSolidIcon", SVGComponent, {
  "fileName": "abs-shopping-bag-alt-solid.svg",
  "presentationName": "shopping-bag-alt",
  "style": "solid",
  "category": "commerce"
});