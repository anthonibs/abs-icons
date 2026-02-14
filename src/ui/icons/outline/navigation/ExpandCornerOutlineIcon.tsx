import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M4.94 20c-.49 0-.89-.39-.9-.88L4 14.09c0-.25.1-.47.26-.63s.38-.26.63-.27c.49 0 .89.39.9.88l.03 3.56c0 .32.26.57.58.57l3.56-.03c.49 0 .89.39.9.88 0 .49-.39.89-.88.9l-5.03.04ZM19.11 4c.49 0 .89.4.89.89v5.03c0 .25-.1.47-.26.63s-.38.26-.63.26c-.49 0-.89-.4-.89-.89V6.36a.58.58 0 0 0-.58-.58h-3.56c-.49 0-.89-.4-.89-.89s.4-.89.89-.89z" /></svg>;


      export const ExpandCornerOutlineIcon = createIcon("ExpandCornerOutlineIcon", SVGComponent, {
  "fileName": "abs-expand-corner.svg",
  "presentationName": "expand-corner",
  "style": "outline",
  "category": "navigation"
});