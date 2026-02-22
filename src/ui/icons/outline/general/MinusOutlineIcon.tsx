import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M15.59 12.75H8.4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7.19c.41 0 .75.34.75.75s-.34.75-.75.75" /></svg>;


      export const MinusOutlineIcon = createIcon("MinusOutlineIcon", SVGComponent, {
  "fileName": "abs-minus.svg",
  "presentationName": "minus",
  "style": "outline",
  "category": "general"
});