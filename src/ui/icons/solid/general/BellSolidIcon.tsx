import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path fillRule="evenodd" d="M11.91 2.05c3.5 0 6.64 2.49 7.28 5.99l1.2 5.81c.37 1.84-.65 3.69-2.3 4.52-.65.28-1.29.55-1.94.74l-.09.18c-.74 1.66-2.3 2.67-4.06 2.67s-3.41-1.01-4.06-2.67l-.09-.18c-.65-.18-1.29-.46-1.94-.74-1.75-.74-2.67-2.67-2.3-4.52l1.2-5.81c.46-3.41 3.59-5.9 7.1-5.99m2.4 17.42c-1.57.28-3.13.28-4.7 0a3.25 3.25 0 0 0 2.4 1.11c.83-.09 1.66-.46 2.3-1.11" /></svg>;


      export const BellSolidIcon = createIcon("BellSolidIcon", SVGComponent, {
  "fileName": "abs-bell-solid.svg",
  "presentationName": "bell",
  "style": "solid",
  "category": "general"
});