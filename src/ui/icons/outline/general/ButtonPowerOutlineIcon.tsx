import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path fillRule="evenodd" d="M12 2.25c-.51 0-.92.42-.92.92v6.45c0 .52.42.92.92.92s.92-.41.92-.92V3.17c0-.51-.42-.92-.92-.92m5.65 2.31a.85.85 0 0 0-.69-.13c-.24.04-.45.19-.58.4s-.19.45-.13.69c.05.24.2.45.4.58 1.88 1.23 2.83 3.35 2.83 6.32 0 2.42-.65 4.29-1.91 5.57-1.27 1.27-3.14 1.92-5.57 1.92s-4.29-.65-5.57-1.92c-1.26-1.27-1.91-3.14-1.91-5.58 0-2.96.96-5.08 2.82-6.31.27-.18.42-.47.42-.77 0-.18-.04-.35-.14-.51a.93.93 0 0 0-.77-.42c-.18 0-.35.04-.51.15-2.39 1.56-3.67 4.27-3.67 7.85 0 2.94.82 5.25 2.46 6.88s3.93 2.46 6.86 2.46 5.24-.83 6.86-2.46 2.46-3.94 2.46-6.88c0-3.58-1.27-6.29-3.67-7.85Z" /></svg>;


      export const ButtonPowerOutlineIcon = createIcon("ButtonPowerOutlineIcon", SVGComponent, {
  "fileName": "abs-button-power.svg",
  "presentationName": "button-power",
  "style": "outline",
  "category": "general"
});