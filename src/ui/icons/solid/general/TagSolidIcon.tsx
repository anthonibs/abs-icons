import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M11.19 2.25c.78 0 1.52.31 2.07.86l7.52 7.52c1.3 1.3 1.3 3.4 0 4.7l-5.45 5.45a3.32 3.32 0 0 1-4.7 0l-7.52-7.52c-.55-.55-.86-1.29-.86-2.07V6.15c0-2.15 1.75-3.9 3.9-3.9zM7.61 5.66c-1.02 0-1.87.79-1.94 1.8v.15a1.944 1.944 0 1 0 3.89 0c0-1.08-.87-1.95-1.95-1.95" /></svg>;


      export const TagSolidIcon = createIcon("TagSolidIcon", SVGComponent, {
  "fileName": "abs-tag-solid.svg",
  "presentationName": "tag",
  "style": "solid",
  "category": "general"
});