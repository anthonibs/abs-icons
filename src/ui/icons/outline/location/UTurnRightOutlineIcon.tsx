import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 13.97 17" color="currentColor" width="1em" height="1em" {...props}><path d="M1.5 16.25V5.69c0-.96.32-1.92.94-2.65.86-1.01 1.92-1.53 3.2-1.54 1.12-.01 2.23.44 3.02 1.23s1.22 1.8 1.22 2.96v4.59L8.57 8.97a.742.742 0 1 0-1.05 1.05l2.52 2.52c.33.33.87.33 1.2 0l2.52-2.52a.742.742 0 1 0-1.05-1.05l-1.31 1.31V5.69c0-1.58-.55-2.93-1.66-4.03C8.63.55 7.29 0 5.71 0S2.76.55 1.66 1.66C.55 2.76 0 4.11 0 5.69v10.56c0 .41.34.75.75.75s.75-.34.75-.75" /></svg>;


      export const UTurnRightOutlineIcon = createIcon("UTurnRightOutlineIcon", SVGComponent, {
  "fileName": "abs-u-turn-right.svg",
  "presentationName": "u-turn-right",
  "style": "outline",
  "category": "location"
});