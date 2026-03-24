import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 17.5 18.5" color="currentColor" width="1em" height="1em" {...props}><path d="M6.83 3.3C6.83 1.48 5.3 0 3.41 0S0 1.48 0 3.3c0 1.53 1.09 2.82 2.56 3.19.07.02.11.07.11.14v5.24c0 .07-.05.12-.11.14C1.09 12.38 0 13.67 0 15.2c0 1.82 1.53 3.3 3.42 3.3s3.42-1.48 3.42-3.3c0-1.53-1.09-2.82-2.55-3.19-.07-.02-.11-.07-.11-.14V6.63c0-.07.05-.12.11-.14 1.47-.37 2.55-1.66 2.55-3.19Zm-5.33 0c0-.99.86-1.8 1.92-1.8s1.92.81 1.92 1.8-.86 1.8-1.92 1.8S1.5 4.29 1.5 3.3m3.83 11.9c0 .99-.86 1.8-1.92 1.8s-1.92-.81-1.92-1.8.86-1.8 1.92-1.8 1.92.81 1.92 1.8m9.47-3.22c.01-.06 0 .06 0 0l.04-6.12c0-1.35-1.13-2.45-2.53-2.45H9.64c-.41 0-.75.34-.75.75s.34.75.75.75h2.67c.57 0 1.03.43 1.03.95l.04 6.13c0 .06-.01-.06 0 0-1.54.32-2.7 1.64-2.7 3.23 0 1.82 1.53 3.3 3.42 3.3s3.42-1.48 3.42-3.3c0-1.58-1.16-2.91-2.7-3.23ZM14.09 17c-1.06 0-1.92-.81-1.92-1.8s.86-1.8 1.92-1.8 1.92.81 1.92 1.8-.86 1.8-1.92 1.8" /></svg>;


      export const GitPullOutlineIcon = createIcon("GitPullOutlineIcon", SVGComponent, {
  "fileName": "abs-git-pull.svg",
  "presentationName": "git-pull",
  "style": "outline",
  "category": "general"
});