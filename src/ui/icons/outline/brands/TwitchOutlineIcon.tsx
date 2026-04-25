import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><g><path d="M4.25 2.48 2.98 5.66s-.03.09-.03.14v12.79c0 .21.17.37.37.37h3.44c.21 0 .37.17.37.37v2.04c0 .21.17.37.37.37h2.26c.1 0 .19-.04.26-.11l2.57-2.57c.07-.07.16-.11.26-.11h3.17c.1 0 .19-.04.26-.11l4.66-4.66c.07-.07.11-.16.11-.26V2.62a.37.37 0 0 0-.37-.37H4.59c-.15 0-.29.09-.35.23ZM18.86 13.5l-2.57 2.57c-.07.07-.16.11-.26.11h-3.87c-.1 0-.19.04-.26.11l-2.04 2.04a.37.37 0 0 1-.63-.26v-1.52a.37.37 0 0 0-.37-.37H6.12a.37.37 0 0 1-.37-.37V4.71c0-.21.17-.37.37-.37h12.49c.21 0 .37.17.37.37v8.53c0 .1-.04.19-.11.26Z" /><path d="M16.5 7.08h-1.35a.37.37 0 0 0-.37.37v4.87c0 .21.17.37.37.37h1.35c.21 0 .37-.17.37-.37V7.45a.37.37 0 0 0-.37-.37m-4.87 0h-1.35a.37.37 0 0 0-.37.37v4.87c0 .21.17.37.37.37h1.35c.21 0 .37-.17.37-.37V7.45a.37.37 0 0 0-.37-.37" /></g></svg>;


      export const TwitchOutlineIcon = createIcon("TwitchOutlineIcon", SVGComponent, {
  "fileName": "abs-twitch.svg",
  "presentationName": "twitch",
  "style": "outline",
  "category": "brands"
});