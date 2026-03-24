import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 15.23 15.5" color="currentColor" width="1em" height="1em" {...props}><path d="M.41 6.76 6.95.22c.29-.29.77-.29 1.06 0s.29.77 0 1.06L2.29 7h12.19c.41 0 .75.34.75.75s-.34.75-.75.75H2.29l5.72 5.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22L.41 8.74C.14 8.47 0 8.12 0 7.75s.15-.73.41-.99" /></svg>;


      export const ArrowLeftAltOutlineIcon = createIcon("ArrowLeftAltOutlineIcon", SVGComponent, {
  "fileName": "abs-arrow-left-alt.svg",
  "presentationName": "arrow-left-alt",
  "style": "outline",
  "category": "arrows"
});