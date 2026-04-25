import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M7.94 5.96c-1.28-.34-2.6.37-3.02 1.63l-.04.14-.86 3.22c-.23.84.24 1.72 1.06 2l.12.04 1.96.53v1.28c0 .42-.32.78-.74.83h-.93c0-.46-.37-.83-.83-.83-.42 0-.78.32-.83.73v1.77c0 .46.37.83.83.83.42 0 .78-.32.83-.73v-.1h.84c1.32 0 2.42-1.03 2.5-2.35v-.99l5.43 1.45c.67.18 1.38-.07 1.79-.64l.08-.12 2.51-4.19c.36-.59.16-1.36-.43-1.71-.07-.04-.14-.07-.21-.1l-.11-.03-9.93-2.66Zm10.71 5.23-1.35 2.29c-.23.4-.08.91.32 1.13.39.22.88.09 1.12-.29l1.35-2.29a.837.837 0 0 0-1.44-.85Z" /></svg>;


      export const CamcorderSolidIcon = createIcon("CamcorderSolidIcon", SVGComponent, {
  "fileName": "abs-camcorder-solid.svg",
  "presentationName": "camcorder",
  "style": "solid",
  "category": "general"
});