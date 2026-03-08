import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path fillRule="evenodd" d="M7.35 3.4h9.3c.38 0 .7-.31.7-.7s-.32-.7-.7-.7h-9.3c-.38 0-.7.31-.7.7s.32.7.7.7m9.3 17.2h-9.3c-.38 0-.7.31-.7.7s.32.7.7.7h9.3c.38 0 .7-.31.7-.7s-.32-.7-.7-.7M12 4.78C6.4 4.78 4.78 6.4 4.78 12S6.4 19.22 12 19.22s7.22-1.62 7.22-7.22S17.6 4.78 12 4.78m0 13.04c-4.84 0-5.82-.98-5.82-5.82S7.16 6.18 12 6.18s5.82.98 5.82 5.82-.98 5.82-5.82 5.82" /><path fillRule="evenodd" d="M13.86 11.3h-2.09l1.53-1.61c.27-.28.25-.72-.03-.99a.706.706 0 0 0-.99.02l-2.65 2.79c-.2.2-.25.5-.14.76s.36.42.64.42h2.09l-1.53 1.61c-.27.28-.25.72.03.99s.72.25.99-.02l2.65-2.79c.2-.2.25-.5.14-.76s-.36-.42-.64-.42" /></svg>;


      export const IwatchChargeAltOutlineIcon = createIcon("IwatchChargeAltOutlineIcon", SVGComponent, {
  "fileName": "abs-iwatch-charge-alt.svg",
  "presentationName": "iwatch-charge-alt",
  "style": "outline",
  "category": "devices"
});