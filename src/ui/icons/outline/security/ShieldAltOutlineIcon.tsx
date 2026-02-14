import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="m19.2 4.52-5.12-2.11a5.57 5.57 0 0 0-4.17 0L4.79 4.52c-.98.4-1.75 1.54-1.75 2.6v4.06c0 4.88 3.48 9.39 8.27 10.73a2.5 2.5 0 0 0 1.34 0c4.79-1.33 8.27-5.84 8.27-10.73V7.12c0-1.06-.76-2.2-1.73-2.6Zm.23 6.66c0 4.22-3.02 8.13-7.17 9.28a1 1 0 0 1-.54 0c-4.16-1.16-7.17-5.06-7.17-9.28V7.12c0-.46.39-1.04.81-1.21l5.12-2.11a3.95 3.95 0 0 1 3.02 0l5.12 2.11c.42.17.81.76.81 1.21z" /></svg>;


      export const ShieldAltOutlineIcon = createIcon("ShieldAltOutlineIcon", SVGComponent, {
  "fileName": "abs-shield-alt.svg",
  "presentationName": "shield-alt",
  "style": "outline",
  "category": "security"
});