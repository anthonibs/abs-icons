import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M20 19.25H4c-.41 0-.75.34-.75.75s.34.75.75.75h16c.41 0 .75-.34.75-.75s-.34-.75-.75-.75m-8.53-4.72a.78.78 0 0 0 .53.22.78.78 0 0 0 .53-.22l4-4c.29-.29.29-.77 0-1.06s-.77-.29-1.06 0l-2.72 2.72V4c0-.41-.34-.75-.75-.75s-.75.34-.75.75v8.19L8.53 9.47c-.29-.29-.77-.29-1.06 0s-.29.77 0 1.06z" /></svg>;


      export const ArrowBarToDownOutlineIcon = createIcon("ArrowBarToDownOutlineIcon", SVGComponent, {
  "fileName": "abs-arrow-bar-to-down.svg",
  "presentationName": "arrow-bar-to-down",
  "style": "outline",
  "category": "arrows",
  "isNew": true
});