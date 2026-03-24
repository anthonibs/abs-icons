import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 12.91 12.85" color="currentColor" width="1em" height="1em" {...props}><path d="M.75 12.85c.41 0 .75-.34.75-.75V4.41c0-.09.03-.16.09-.22s.13-.09.22-.09h8.25c.13 0 .19.15.1.24L9.08 5.42a.742.742 0 1 0 1.05 1.05l2.53-2.53c.33-.33.33-.86 0-1.19L10.13.22a.742.742 0 1 0-1.05 1.05l1.08 1.08c.09.09.03.24-.1.24H1.81c-.5 0-.92.18-1.28.53C.18 3.47 0 3.9 0 4.4v7.69c0 .41.34.75.75.75Z" /></svg>;


      export const TurnRightOutlineIcon = createIcon("TurnRightOutlineIcon", SVGComponent, {
  "fileName": "abs-turn-right.svg",
  "presentationName": "turn-right",
  "style": "outline",
  "category": "location"
});