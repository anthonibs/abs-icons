import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M19.86 4.32c-.22-.09-5.28-2.31-7.87-2.31S4.34 4.23 4.05 4.36c-.32.19-1.93 1.43-1.93 7.23 0 7.2 6.84 9.66 9.78 10.39.06.02.12.02.18.02s.12-.01.18-.02c2.25-.55 9.61-2.94 9.61-10.39 0-5.8-1.61-7.04-2.01-7.27m-7.77 16.16s0-.02-.02-.03L12 3.5h.02c1.85 0 5.72 1.52 7.17 2.15.18.19 1.2 1.42 1.2 5.94 0 6.04-5.66 8.21-8.29 8.89Z" /></svg>;


      export const ShieldDuoSoftOutlineIcon = createIcon("ShieldDuoSoftOutlineIcon", SVGComponent, {
  "fileName": "abs-shield-duo-soft.svg",
  "presentationName": "shield-duo-soft",
  "style": "outline",
  "category": "security"
});