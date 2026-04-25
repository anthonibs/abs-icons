import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M15.45 19.69c-.41 0-.75-.34-.75-.75v-6.58s0-.08-.02-.11c-.01-.04-.04-.07-.07-.1L9.3 6.85v1.87c0 .41-.34.75-.75.75s-.75-.34-.75-.75V5.15c0-.46.38-.84.84-.84h3.57c.41 0 .75.34.75.75s-.34.75-.75.75h-1.87l5.32 5.31c.16.16.29.36.39.58.09.22.14.45.14.7v6.55c0 .41-.34.75-.75.75Z" /></svg>;


      export const TurnSlightLeftOutlineIcon = createIcon("TurnSlightLeftOutlineIcon", SVGComponent, {
  "fileName": "abs-turn-slight-left.svg",
  "presentationName": "turn-slight-left",
  "style": "outline",
  "category": "location"
});