import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M20.29 12.35c-.57-3.06-.86-4.59-2.08-5.62-.71-.59-1.54-.84-2.7-.94v-.26c0-1.94-1.57-3.52-3.51-3.52S8.49 3.59 8.49 5.53v.26c-1.16.11-1.99.35-2.7.94-1.23 1.03-1.51 2.56-2.08 5.62-.8 4.28-1.2 6.43.13 8.04S7.34 22 11.67 22h.66c4.33 0 6.51 0 7.83-1.61 1.33-1.61.92-3.76.13-8.04M9.99 5.53c0-1.12.9-2.02 2.01-2.02s2.01.91 2.01 2.02v.19c-.51 0-1.05-.01-1.68-.01h-.66c-.62 0-1.17 0-1.67.01v-.19ZM19 19.44c-.88 1.06-2.82 1.06-6.68 1.06h-.66c-3.86 0-5.8 0-6.68-1.06-.88-1.07-.52-2.99.19-6.82.5-2.7.76-4.06 1.57-4.74s2.18-.68 4.92-.68h.66c2.73 0 4.1 0 4.92.68.81.68 1.07 2.04 1.57 4.75.71 3.83 1.07 5.75.19 6.81" /><path d="M14.63 10.34c-.41.07-.69.45-.62.86l.92 5.55c.06.37.38.63.74.63.04 0 .08 0 .12-.01.41-.07.69-.45.62-.86l-.92-5.55a.753.753 0 0 0-.86-.62m-5.26 0c-.4-.07-.79.21-.86.62l-.92 5.55c-.07.41.21.79.62.86.04 0 .08.01.12.01.36 0 .68-.26.74-.63l.92-5.55a.747.747 0 0 0-.62-.86" /></svg>;


      export const ShoppingBagAltOutlineIcon = createIcon("ShoppingBagAltOutlineIcon", SVGComponent, {
  "fileName": "abs-shopping-bag-alt.svg",
  "presentationName": "shopping-bag-alt",
  "style": "outline",
  "category": "commerce"
});