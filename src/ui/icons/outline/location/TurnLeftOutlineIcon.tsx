import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M17.71 18.42c-.41 0-.75-.34-.75-.75V9.98c0-.09-.03-.16-.09-.22a.3.3 0 0 0-.22-.09H8.4a.14.14 0 0 0-.1.24l1.08 1.08a.742.742 0 1 1-1.05 1.05L5.8 9.51a.84.84 0 0 1 0-1.19l2.53-2.53a.742.742 0 1 1 1.05 1.05L8.3 7.92a.14.14 0 0 0 .1.24h8.25c.5 0 .92.18 1.28.53.35.35.53.78.53 1.28v7.69c0 .41-.34.75-.75.75Z" /></svg>;


      export const TurnLeftOutlineIcon = createIcon("TurnLeftOutlineIcon", SVGComponent, {
  "fileName": "abs-turn-left.svg",
  "presentationName": "turn-left",
  "style": "outline",
  "category": "location"
});