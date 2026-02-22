import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M3.83 7.33q-1.17 0-1.17-1.17c0-1.17.39-1.17 1.17-1.17h16.33q1.17 0 1.17 1.17c0 1.17-.39 1.17-1.17 1.17zm0 11.67q-1.17 0-1.17-1.17c0-1.17.39-1.17 1.17-1.17h16.33q1.17 0 1.17 1.17c0 1.17-.39 1.17-1.17 1.17zm0-5.83q-1.17 0-1.17-1.17c0-1.17.39-1.17 1.17-1.16h16.33q1.17 0 1.17 1.17c0 1.17-.39 1.17-1.17 1.17H3.83Z" /></svg>;


      export const MenuOutlineIcon = createIcon("MenuOutlineIcon", SVGComponent, {
  "fileName": "abs-menu.svg",
  "presentationName": "menu",
  "style": "outline",
  "category": "general"
});