import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M16.49 15.63c-.3-.29-.3-.77 0-1.07l1.58-1.58c.09-.09.03-.23-.1-.23H3.92c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h14.05c.12 0 .18-.15.1-.23L16.5 9.44a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l3.03 3.04c.32.32.32.84 0 1.17l-3.04 3.04c-.29.29-.76.29-1.06 0" /></svg>;


      export const TrendingFlatOutlineIcon = createIcon("TrendingFlatOutlineIcon", SVGComponent, {
  "fileName": "abs-trending-flat.svg",
  "presentationName": "trending-flat",
  "style": "outline",
  "category": "analytics"
});