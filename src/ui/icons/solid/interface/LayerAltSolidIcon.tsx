import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 18.01 11" color="currentColor" width="1em" height="1em" {...props}><path d="M11.43.64c-1.5-.85-3.34-.85-4.84 0L1.01 3.77c-1.35.76-1.35 2.7 0 3.45l5.58 3.14c1.5.84 3.34.84 4.84 0l5.58-3.14c1.35-.76 1.34-2.7 0-3.45z" /></svg>;


      export const LayerAltSolidIcon = createIcon("LayerAltSolidIcon", SVGComponent, {
  "fileName": "abs-layer-alt-solid.svg",
  "presentationName": "layer-alt",
  "style": "solid",
  "category": "interface"
});