import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="m21.67 10.15-.03-.12c-.56-3.68-1.93-5.75-4.1-6.14-3.41-.61-6.62-.26-8.96 0-.41.04-.71.42-.66.83.04.41.42.71.83.66 2.25-.25 5.34-.58 8.54 0 1.52.27 2.3 2.06 2.7 3.89-1.14-.23-3.03-.52-5.29-.52-5.44 0-10.43 3.06-12.14 7.48-.33.84-.87 2.25-.25 3.22.22.34.67.75 1.57.8a140 140 0 0 0 14.56.04c1.88-.09 3.39-1.52 3.51-3.33.15-2.27.06-4.5-.26-6.81Zm-1.23 6.71c-.07 1.04-.96 1.87-2.09 1.93-4.77.23-9.62.22-14.41-.04-.2-.01-.35-.06-.39-.12-.21-.33.24-1.48.4-1.9 1.48-3.82 5.89-6.49 10.73-6.49 2.57 0 4.68.41 5.57.62.25 2.03.32 3.99.18 6Z" /></svg>;


      export const ClothesIronOutlineIcon = createIcon("ClothesIronOutlineIcon", SVGComponent, {
  "fileName": "abs-clothes-iron.svg",
  "presentationName": "clothes-iron",
  "style": "outline",
  "category": "general"
});