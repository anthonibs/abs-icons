import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M14.42 7.14c-1.5-.85-3.34-.85-4.84 0L4 10.27c-1.35.76-1.35 2.7 0 3.45l5.58 3.14c1.5.84 3.34.84 4.84 0L20 13.72c1.35-.76 1.34-2.7 0-3.45z" /></svg>;


      export const LayerAltSolidIcon = createIcon("LayerAltSolidIcon", SVGComponent, {
  "fileName": "abs-layer-alt-solid.svg",
  "presentationName": "layer-alt",
  "style": "solid",
  "category": "interface"
});