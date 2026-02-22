import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M17.33 8.85V7.26c-.02-1.41-.6-2.76-1.61-3.75-1.01-.98-2.32-1.5-3.79-1.51a5.31 5.31 0 0 0-5.26 5.25v1.6c-2.11.99-3.05 2.88-3.05 6.14C3.62 20.1 5.89 22 12 22s8.38-1.9 8.38-7.01c0-3.25-.94-5.15-3.05-6.14m-6.17 5.22c0-.47.38-.84.84-.84s.84.38.84.84v2.19c0 .47-.38.84-.84.84s-.84-.38-.84-.84zm-2.8-6.81a3.63 3.63 0 0 1 3.6-3.59h.03c.99 0 1.88.36 2.57 1.04.7.68 1.09 1.59 1.1 2.56V8.3c-1.01-.22-2.2-.33-3.65-.33s-2.65.11-3.65.33z" /></svg>;


      export const LockSolidIcon = createIcon("LockSolidIcon", SVGComponent, {
  "fileName": "abs-lock-solid.svg",
  "presentationName": "lock",
  "style": "solid",
  "category": "security"
});