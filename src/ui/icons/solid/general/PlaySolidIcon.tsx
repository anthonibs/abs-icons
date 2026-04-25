import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M17.5 14.49c1.85-1.14 1.85-3.83 0-4.97L9.56 4.64c-1.94-1.19-4.44.21-4.44 2.49v9.75c0 2.28 2.5 3.68 4.44 2.49z" /></svg>;


      export const PlaySolidIcon = createIcon("PlaySolidIcon", SVGComponent, {
  "fileName": "abs-play-solid.svg",
  "presentationName": "play",
  "style": "solid",
  "category": "general"
});