import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><g><path d="M20.24 3.76c-.84-.84-2.12-1.1-3.59-.73L8.37 5.1C6.9 5.47 5.46 6.91 5.1 8.37l-2.07 8.27c-.37 1.48-.11 2.75.73 3.59.59.59 1.39.9 2.34.9.38 0 .79-.05 1.25-.16l8.28-2.07c1.47-.37 2.91-1.81 3.27-3.27l2.07-8.27c.37-1.48.11-2.75-.73-3.59ZM4.82 19.18c-.45-.46-.57-1.23-.33-2.17l2.07-8.27c.24-.93 1.26-1.95 2.19-2.19l8.27-2.07c.95-.23 1.72-.11 2.17.34.45.46.57 1.23.33 2.17l-2.07 8.28c-.23.93-1.25 1.95-2.18 2.18l-8.28 2.07c-.95.24-1.72.12-2.17-.33Z" /><path d="M12.01 8.33c-2.02 0-3.67 1.65-3.67 3.67s1.64 3.67 3.67 3.67 3.67-1.65 3.67-3.67-1.64-3.67-3.67-3.67m0 5.83c-1.2 0-2.17-.97-2.17-2.17s.97-2.17 2.17-2.17 2.17.97 2.17 2.17-.97 2.17-2.17 2.17" /></g></svg>;


      export const DiscoverOutlineIcon = createIcon("DiscoverOutlineIcon", SVGComponent, {
  "fileName": "abs-discover.svg",
  "presentationName": "discover",
  "style": "outline",
  "category": "general"
});