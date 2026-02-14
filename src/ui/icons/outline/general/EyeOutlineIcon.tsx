import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><g><path d="M12 7.67c-2.39 0-4.33 1.94-4.33 4.33s1.94 4.33 4.33 4.33 4.33-1.94 4.33-4.33S14.39 7.67 12 7.67m0 7.16c-1.56 0-2.83-1.27-2.83-2.83S10.44 9.17 12 9.17s2.83 1.27 2.83 2.83-1.27 2.83-2.83 2.83" /><path d="M21.74 9C19.3 5.17 15.75 2.97 12 2.97S4.69 5.17 2.26 9c-1.05 1.65-1.05 4.34 0 6 2.44 3.83 5.99 6.03 9.74 6.03s7.31-2.2 9.74-6.03c1.05-1.65 1.05-4.34 0-6m-1.27 5.19c-2.16 3.39-5.25 5.33-8.48 5.33s-6.32-1.94-8.48-5.33c-.75-1.17-.75-3.22 0-4.38 2.16-3.39 5.25-5.33 8.48-5.33s6.32 1.94 8.48 5.33c.75 1.17.75 3.22 0 4.38" /></g></svg>;


      export const EyeOutlineIcon = createIcon("EyeOutlineIcon", SVGComponent, {
  "fileName": "abs-eye.svg",
  "presentationName": "eye",
  "style": "outline",
  "category": "general"
});