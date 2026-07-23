import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="m19.21 4.52-5.12-2.11a5.57 5.57 0 0 0-4.17 0L4.8 4.52c-.98.4-1.75 1.54-1.75 2.6v4.06c0 4.88 3.48 9.39 8.27 10.73.44.12.9.12 1.34 0 4.79-1.33 8.27-5.84 8.27-10.73V7.12c0-1.06-.76-2.2-1.73-2.6Zm.24 6.66c0 4.22-3.02 8.13-7.17 9.28q-.12.03-.24.03l.15-16.98c.45.02.91.11 1.33.28l5.12 2.11c.42.17.81.76.81 1.21v4.06Z" /></svg>;


      export const ShieldDuoAltOutlineIcon = createIcon("ShieldDuoAltOutlineIcon", SVGComponent, {
  "fileName": "abs-shield-duo-alt.svg",
  "presentationName": "shield-duo-alt",
  "style": "outline",
  "category": "security",
  "isNew": false
});