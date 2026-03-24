import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 17.5 18.5" color="currentColor" width="1em" height="1em" {...props}><path d="M14.08 5.95c-1.6 0-2.94 1.06-3.31 2.49-.02.07-.07.12-.14.12-1.23.05-3.86-.11-5.75-2.07-.07-.07-.04-.19.05-.23C6.06 5.72 6.84 4.6 6.84 3.3 6.84 1.48 5.31 0 3.42 0S0 1.48 0 3.3c0 1.53 1.09 2.82 2.56 3.19.06.02.11.07.11.13v5.25c0 .06-.04.12-.11.13C1.09 12.37 0 13.66 0 15.19c0 1.82 1.53 3.3 3.42 3.3s3.42-1.48 3.42-3.3c0-1.53-1.09-2.82-2.56-3.19-.06-.02-.11-.07-.11-.13V8.21c0-.12.14-.18.23-.1 2.2 1.84 4.92 2 6.28 1.95.06 0 .11.04.13.1.41 1.37 1.72 2.39 3.27 2.39 1.88 0 3.42-1.48 3.42-3.3s-1.53-3.3-3.42-3.3M1.5 3.3c0-.99.86-1.8 1.92-1.8s1.92.81 1.92 1.8-.86 1.8-1.92 1.8S1.5 4.29 1.5 3.3m3.83 11.9c0 .99-.86 1.8-1.92 1.8s-1.92-.81-1.92-1.8.86-1.8 1.92-1.8 1.92.81 1.92 1.8m8.75-4.15c-1.06 0-1.92-.81-1.92-1.8s.86-1.8 1.92-1.8S16 8.26 16 9.25s-.86 1.8-1.92 1.8" /></svg>;


      export const GitMergeOutlineIcon = createIcon("GitMergeOutlineIcon", SVGComponent, {
  "fileName": "abs-git-merge.svg",
  "presentationName": "git-merge",
  "style": "outline",
  "category": "general"
});