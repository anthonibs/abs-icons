import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M18.42 10.4H5.58c-.88 0-1.6.72-1.6 1.6s.72 1.6 1.6 1.6h12.84c.88 0 1.6-.72 1.6-1.6s-.72-1.6-1.6-1.6" /></svg>;


      export const MinusLargeOutlineIcon = createIcon("MinusLargeOutlineIcon", SVGComponent, {
  "fileName": "abs-minus-large.svg",
  "presentationName": "minus-large",
  "style": "outline",
  "category": "general"
});