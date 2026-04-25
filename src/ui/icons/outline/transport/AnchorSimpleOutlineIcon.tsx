import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M21.16 10.41h-2.29c-.46 0-.84.37-.84.84s.37.84.84.84h1.42l-.05.35c-.51 3.41-3.1 6.21-6.46 6.95a.8.8 0 0 1-.65-.15.8.8 0 0 1-.3-.62V9.47c0-.3.19-.58.47-.71.79-.37 1.4-1.06 1.67-1.9.27-.86.16-1.75-.29-2.55a3.13 3.13 0 0 0-3.01-1.52c-.97.11-1.82.65-2.33 1.46a3.1 3.1 0 0 0-.3 2.7c.28.78.88 1.44 1.64 1.79.29.13.47.41.47.71v9.15c0 .24-.11.46-.3.62-.19.14-.42.21-.65.15-3.36-.74-5.96-3.54-6.46-6.95l-.05-.35h1.42c.46 0 .84-.37.84-.84s-.37-.84-.84-.84H2.82c-.46 0-.84.37-.84.84 0 2.67 1.04 5.18 2.93 7.07a9.93 9.93 0 0 0 7.07 2.93c5.52 0 10-4.48 10-10 0-.46-.37-.84-.84-.84ZM10.54 5.89c0-.79.65-1.45 1.45-1.45s1.45.66 1.45 1.45-.65 1.46-1.45 1.46-1.45-.66-1.45-1.46" /></svg>;


      export const AnchorSimpleOutlineIcon = createIcon("AnchorSimpleOutlineIcon", SVGComponent, {
  "fileName": "abs-anchor-simple.svg",
  "presentationName": "anchor-simple",
  "style": "outline",
  "category": "transport"
});