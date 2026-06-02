import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M6.78 5.39c0 1.04-.85 1.89-1.89 1.89S3 6.43 3 5.39 3.85 3.5 4.89 3.5s1.89.85 1.89 1.89m.06 3.29H3.06V20.5h3.78zm5.97 0H9.05V20.5h3.72v-6.2c0-3.46 4.5-3.78 4.5 0v6.2H21v-7.49c0-5.83-6.67-5.61-8.24-2.75l.04-1.59Z" /></svg>;


      export const LinkedinAltOutlineIcon = createIcon("LinkedinAltOutlineIcon", SVGComponent, {
  "fileName": "abs-linkedin-alt.svg",
  "presentationName": "linkedin-alt",
  "style": "outline",
  "category": "brands"
});