import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><g><path d="M21.17 12.12c-.05.13.04-.16 0 0-.04.15.32.59.28.75l-.5 2.36-.66 1.76-1.53 1.04-1.22.44-12.38-.05-.61-.34-.53-.77s-.6-.39-.61-.42c.01-.35-.24-.31-.42-.93-.03-.03-.75-1.28-.26-1.64 1.6-1.24 3.47-1.49 5.58-.8 2.22.77 2.82 1.05 3.8 1.52.59.29 1.34.65 2.69 1.22.65.28 2.49.1 3.8-.63l.77-.59c.2-.21.38-.43.53-.63.6-.84.89-1.74 1.1-2.43 0 0-.04.15 0 0l.18.13Z" /><path d="M21.34 9.71a3.555 3.555 0 0 0-3.3-2.27h-5.09V6.3c.37-.02.67-.32.67-.7s-.31-.7-.7-.7H7.04c-.38 0-.7.31-.7.7s.3.68.67.7v1.14H5.97c-1.46 0-2.78.91-3.3 2.27a9.9 9.9 0 0 0 0 7.11 3.555 3.555 0 0 0 3.3 2.27h12.07c1.46 0 2.79-.91 3.3-2.27.88-2.29.88-4.82 0-7.11M8.4 7.44V6.3h3.15v1.14zm11.64 8.88c-.32.82-1.12 1.37-2 1.37H5.97c-.88 0-1.69-.55-2-1.37a8.6 8.6 0 0 1 0-6.12c.31-.82 1.12-1.37 2-1.37h12.07c.88 0 1.69.55 2 1.37.75 1.94.75 4.17 0 6.12" /></g></svg>;


      export const FuelTankLiquidOutlineIcon = createIcon("FuelTankLiquidOutlineIcon", SVGComponent, {
  "fileName": "abs-fuel-tank-liquid.svg",
  "presentationName": "fuel-tank-liquid",
  "style": "outline",
  "category": "energy"
});