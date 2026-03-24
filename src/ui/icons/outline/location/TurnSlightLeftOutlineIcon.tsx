import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 8.39 15.38" color="currentColor" width="1em" height="1em" {...props}><path d="M7.64 15.38c-.41 0-.75-.34-.75-.75V8.05s0-.08-.02-.11c-.01-.04-.04-.07-.07-.1l-5.3-5.3v1.87c0 .41-.34.75-.75.75S0 4.82 0 4.41V.84C0 .38.38 0 .84 0h3.57c.41 0 .75.34.75.75s-.34.75-.75.75H2.54l5.32 5.31c.16.16.29.36.39.58.09.22.14.45.14.7v6.55c0 .41-.34.75-.75.75Z" /></svg>;


      export const TurnSlightLeftOutlineIcon = createIcon("TurnSlightLeftOutlineIcon", SVGComponent, {
  "fileName": "abs-turn-slight-left.svg",
  "presentationName": "turn-slight-left",
  "style": "outline",
  "category": "location"
});