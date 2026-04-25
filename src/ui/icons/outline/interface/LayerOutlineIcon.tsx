import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M5.16 14.13c-2.39-.86-3.28-1.18-3.28-2.13s.89-1.27 3.28-2.13l2.64-.95c1.88-.68 2.91-1.05 4.2-1.05s2.32.37 4.2 1.05l2.63.95c2.39.86 3.29 1.18 3.29 2.13s-.89 1.27-3.28 2.13l-2.64.95c-1.88.68-2.91 1.05-4.2 1.05s-2.32-.37-4.2-1.05l-2.63-.95m.51-1.41 2.63.95c1.83.66 2.67.96 3.69.96s1.86-.3 3.69-.96l2.63-.95c.73-.26 1.43-.52 1.89-.72-.46-.2-1.16-.45-1.89-.71l-2.64-.95c-1.83-.66-2.67-.96-3.69-.96s-1.86.3-3.69.96l-2.63.95c-.73.26-1.43.52-1.89.72.46.2 1.16.45 1.89.71" /></svg>;


      export const LayerOutlineIcon = createIcon("LayerOutlineIcon", SVGComponent, {
  "fileName": "abs-layer.svg",
  "presentationName": "layer",
  "style": "outline",
  "category": "interface"
});