import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 8.39 15.38" color="currentColor" width="1em" height="1em" {...props}><path d="M.75 15.38c.41 0 .75-.34.75-.75V8.05s0-.08.02-.11c.01-.04.04-.07.07-.1l5.3-5.3v1.87c0 .41.34.75.75.75s.75-.34.75-.75V.84c0-.46-.38-.84-.84-.84H3.98c-.41 0-.75.34-.75.75s.34.75.75.75h1.87L.53 6.81c-.16.16-.29.36-.39.58-.09.22-.14.45-.14.7v6.55c0 .41.34.75.75.75Z" /></svg>;


      export const TurnSlightRightOutlineIcon = createIcon("TurnSlightRightOutlineIcon", SVGComponent, {
  "fileName": "abs-turn-slight-right.svg",
  "presentationName": "turn-slight-right",
  "style": "outline",
  "category": "location"
});