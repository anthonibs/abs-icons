import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><g><path d="M14.42 4.95c-1.5-.85-3.34-.85-4.84 0L4 8.08c-1.35.76-1.35 2.7 0 3.45l5.58 3.14c1.5.84 3.34.84 4.84 0L20 11.53c1.35-.76 1.34-2.7 0-3.45z" /><path d="M3.87 13.06a.465.465 0 0 0-.64.19c-.48.9-.23 2.11.77 2.67l5.58 3.14c1.5.84 3.34.84 4.84 0L20 15.92c1-.56 1.26-1.78.77-2.67a.465.465 0 0 0-.64-.19l-5.03 2.82a6.34 6.34 0 0 1-6.2 0z" /></g></svg>;


      export const LayerDoubleAltSolidIcon = createIcon("LayerDoubleAltSolidIcon", SVGComponent, {
  "fileName": "abs-layer-double-alt-solid.svg",
  "presentationName": "layer-double-alt",
  "style": "solid",
  "category": "interface"
});