import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M20.7 11.2h-4.77s-.05.01-.08.02c-.36-1.82-1.97-3.19-3.9-3.19s-3.53 1.38-3.9 3.19c-.03 0-.05-.02-.08-.02H3.3c-.44 0-.8.36-.8.8s.36.8.8.8h4.69s.05-.01.08-.02c.36 1.82 1.97 3.19 3.9 3.19s3.53-1.38 3.9-3.19c.03 0 .05.02.08.02h4.77c.44 0 .8-.36.8-.8s-.36-.8-.8-.8Zm-8.74 3.18c-1.31 0-2.38-1.07-2.38-2.38s1.07-2.38 2.38-2.38 2.38 1.07 2.38 2.38-1.07 2.38-2.38 2.38" /></svg>;


      export const GitCommitOutlineIcon = createIcon("GitCommitOutlineIcon", SVGComponent, {
  "fileName": "abs-git-commit.svg",
  "presentationName": "git-commit",
  "style": "outline",
  "category": "general"
});