import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="m13.24 12.58-.66.66a.82.82 0 0 1-1.16 0l-.66-.66a.82.82 0 0 1 0-1.16l.66-.66a.82.82 0 0 1 1.16 0l.66.66c.32.32.32.84 0 1.16m-.66-5.45.77.77c.32.32.84.32 1.16 0l1.12-1.12a.82.82 0 0 0 0-1.16l-3.04-3.04a.82.82 0 0 0-1.16 0L8.39 5.62a.82.82 0 0 0 0 1.16L9.51 7.9c.32.32.84.32 1.16 0l.77-.77a.82.82 0 0 1 1.16 0Zm-5.45 4.3.77-.77a.82.82 0 0 0 0-1.16L6.78 8.38a.82.82 0 0 0-1.16 0l-3.04 3.04a.82.82 0 0 0 0 1.16l3.04 3.04c.32.32.84.32 1.16 0L7.9 14.5a.82.82 0 0 0 0-1.16l-.77-.77a.82.82 0 0 1 0-1.16Zm9.75 1.16-.77.77a.82.82 0 0 0 0 1.16l1.12 1.12c.32.32.84.32 1.16 0l3.04-3.04a.82.82 0 0 0 0-1.16L18.39 8.4a.82.82 0 0 0-1.16 0l-1.12 1.12a.82.82 0 0 0 0 1.16l.77.77c.32.32.32.84 0 1.16Zm-5.45 4.3-.77-.77a.82.82 0 0 0-1.16 0l-1.12 1.12a.82.82 0 0 0 0 1.16l3.04 3.04c.32.32.84.32 1.16 0l3.04-3.04a.82.82 0 0 0 0-1.16l-1.12-1.12a.82.82 0 0 0-1.16 0l-.77.77a.82.82 0 0 1-1.16 0Z" /></svg>;


      export const ComponentOutlineIcon = createIcon("ComponentOutlineIcon", SVGComponent, {
  "fileName": "abs-component.svg",
  "presentationName": "component",
  "style": "outline",
  "category": "interface"
});