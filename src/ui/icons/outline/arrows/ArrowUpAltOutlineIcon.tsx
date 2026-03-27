import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="m12.99 4.8 6.54 6.54c.29.29.29.77 0 1.06s-.77.29-1.06 0l-5.72-5.72v12.19c0 .41-.34.75-.75.75s-.75-.34-.75-.75V6.68L5.53 12.4c-.29.29-.77.29-1.06 0-.15-.15-.22-.34-.22-.53s.07-.38.22-.53l6.54-6.54c.27-.27.62-.41.99-.41s.73.15.99.41" /></svg>;


      export const ArrowUpAltOutlineIcon = createIcon("ArrowUpAltOutlineIcon", SVGComponent, {
  "fileName": "abs-arrow-up-alt.svg",
  "presentationName": "arrow-up-alt",
  "style": "outline",
  "category": "arrows"
});