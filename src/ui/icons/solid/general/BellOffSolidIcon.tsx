import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path fillRule="evenodd" d="M2.73 2.28c.28-.28.74-.28 1.01 0l17.51 17.51c.28.28.28.74 0 1.01s-.74.28-1.01 0l-2.49-2.49s-.09 0-.09.09c-.65.28-1.29.55-1.94.74l-.09.18c-.74 1.66-2.3 2.67-4.06 2.67s-3.41-1.01-4.06-2.67l-.09-.18c-.65-.18-1.29-.46-1.94-.74-1.75-.74-2.67-2.67-2.3-4.52l1.2-5.81c.18-.83.46-1.66.92-2.4l-2.4-2.4c-.46-.37-.46-.74-.18-1.01Zm11.15 17.14c-1.57.28-3.13.28-4.7 0a3.25 3.25 0 0 0 2.4 1.11c.83-.09 1.66-.46 2.3-1.11M11.48 2c3.5 0 6.64 2.49 7.28 5.99l1.2 5.81c.09.28.09.65.09.92 0 .37-.37.65-.74.65s-.65-.37-.65-.74c0-.18 0-.37-.09-.65l-1.2-5.81a6.005 6.005 0 0 0-5.9-4.88c-1.11 0-2.12.28-3.04.83-.37.18-.74.09-.92-.28s-.09-.74.28-.92C8.8 2.37 10.09 2 11.48 2" /></svg>;


      export const BellOffSolidIcon = createIcon("BellOffSolidIcon", SVGComponent, {
  "fileName": "abs-bell-off-solid.svg",
  "presentationName": "bell-off",
  "style": "solid",
  "category": "general"
});