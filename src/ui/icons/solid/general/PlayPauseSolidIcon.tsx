import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M4.25 16.43c-.48.33-.97.36-1.48.09S2 15.82 2 15.25v-6.5c0-.57.26-.99.77-1.27s1.01-.24 1.48.09l4.64 3.25c.4.29.61.68.61 1.18s-.2.89-.61 1.18zm10.61 1.29c-.4 0-.74-.14-1.02-.41-.27-.27-.41-.61-.41-1.02V7.71c0-.4.14-.74.41-1.02.27-.27.61-.41 1.02-.41.4 0 .74.14 1.02.41s.41.61.41 1.02v8.57c0 .4-.14.74-.41 1.02-.27.27-.61.41-1.02.41m5.71 0c-.4 0-.74-.14-1.02-.41-.27-.27-.41-.61-.41-1.02V7.71c0-.4.14-.74.41-1.02.27-.27.61-.41 1.02-.41.4 0 .74.14 1.02.41.28.28.41.61.41 1.02v8.57c0 .4-.14.74-.41 1.02-.27.27-.61.41-1.02.41" /></svg>;


      export const PlayPauseSolidIcon = createIcon("PlayPauseSolidIcon", SVGComponent, {
  "fileName": "abs-play-pause-solid.svg",
  "presentationName": "play-pause",
  "style": "solid",
  "category": "general",
  "isNew": false
});