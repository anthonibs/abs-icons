import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path fillRule="evenodd" d="M12.09 2c2.14 0 3.35 0 4.37.37 1.58.56 2.88 1.67 3.63 3.26.47 1.02.56 2.23.84 4.28l.19 2.05c.19 1.4.28 2.51.28 3.35 0 .93 0 1.58-.28 2.33-.56 1.67-1.77 3.07-3.44 3.81-.65.28-1.4.37-2.23.47s-1.95.09-3.44.09-2.51 0-3.44-.09-1.58-.19-2.23-.47c-1.67-.74-2.88-2.14-3.44-3.81-.19-.65-.28-1.4-.28-2.33 0-.84.19-1.95.28-3.35l.19-2.05c.19-2.14.37-3.35.84-4.28.74-1.49 2.05-2.7 3.63-3.26C8.77 2 9.98 2 12.12 2Zm2.79 4.65c-.37 0-.74.28-.74.74v1.86c0 1.12-.93 2.05-2.05 2.05s-2.05-.93-2.05-2.05V7.39c0-.37-.28-.74-.74-.74-.37 0-.74.28-.74.74v1.86c0 1.95 1.58 3.44 3.53 3.53a3.53 3.53 0 0 0 3.53-3.53V7.39c0-.37-.37-.74-.74-.74" /></svg>;


      export const ShoppingToteSolidIcon = createIcon("ShoppingToteSolidIcon", SVGComponent, {
  "fileName": "abs-shopping-tote-solid.svg",
  "presentationName": "shopping-tote",
  "style": "solid",
  "category": "location"
});