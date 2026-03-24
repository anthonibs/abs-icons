import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 17.88 7.49" color="currentColor" width="1em" height="1em" {...props}><path d="M17.13 2.99h-4.49s-.05.01-.07.01C12.23 1.29 10.71-.01 8.9-.01S5.57 1.28 5.23 3c-.03 0-.05-.01-.07-.01H.75c-.41 0-.75.34-.75.75s.34.75.75.75h4.41s.05-.01.07-.01c.34 1.71 1.86 3.01 3.67 3.01s3.33-1.29 3.67-3.01c.03 0 .05.01.07.01h4.49c.41 0 .75-.34.75-.75s-.34-.75-.75-.75M8.9 5.98c-1.24 0-2.24-1.01-2.24-2.24S7.67 1.5 8.9 1.5s2.24 1.01 2.24 2.24-1.01 2.24-2.24 2.24" /></svg>;


      export const GitCommitOutlineIcon = createIcon("GitCommitOutlineIcon", SVGComponent, {
  "fileName": "abs-git-commit.svg",
  "presentationName": "git-commit",
  "style": "outline",
  "category": "general"
});