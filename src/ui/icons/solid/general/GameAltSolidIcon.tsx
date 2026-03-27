import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M21.36 8.92V8.8a4.455 4.455 0 0 0-4.44-3.97H7.08c-2.29 0-4.19 1.71-4.43 3.97v.12C2.53 9.8 2 14.25 2 15.67c0 1.93 1.58 3.5 3.53 3.5 1.23 0 1.86-.63 2.37-1.14l.41-.4c.79-.78 1.83-1.21 2.94-1.21h1.5c1.11 0 2.15.43 2.94 1.21l.41.41c.51.5 1.14 1.13 2.37 1.13 1.95 0 3.53-1.57 3.53-3.5 0-1.39-.49-5.52-.64-6.75m-4.56 1.25c0-.42.34-.75.75-.75h.01a.749.749 0 1 1 0 1.5c-.41 0-.76-.34-.76-.75M15.53 12a.749.749 0 1 1-1.5 0 .749.749 0 1 1 1.5 0m-9.08-.17a.749.749 0 1 1 0-1.5h1.1V9.25a.749.749 0 1 1 1.5 0v1.08h1.1c.41 0 .75.34.75.75s-.34.75-.75.75h-1.1v1.09c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.09z" /></svg>;


      export const GameAltSolidIcon = createIcon("GameAltSolidIcon", SVGComponent, {
  "fileName": "abs-game-alt-solid.svg",
  "presentationName": "game-alt",
  "style": "solid",
  "category": "general"
});