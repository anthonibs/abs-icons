import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M21.62 7.92c0-1.71-1.26-3.09-2.82-3.09-2.11-.1-4.26-.14-6.46-.14h-.69c-2.19 0-4.35.04-6.46.14-1.55 0-2.81 1.39-2.81 3.1-.1 1.36-.14 2.71-.13 4.07 0 1.36.04 2.71.13 4.07 0 1.71 1.26 3.1 2.81 3.1 2.22.1 4.49.15 6.8.14 2.32 0 4.58-.04 6.8-.14 1.56 0 2.82-1.39 2.82-3.1.09-1.36.13-2.72.13-4.08s-.03-2.71-.12-4.07m-11.49 7.36V8.69c0-.19.21-.3.37-.2l4.86 3.29c.14.09.14.3 0 .39l-4.86 3.29c-.16.11-.37 0-.37-.2Z" /></svg>;


      export const YoutubeOutlineIcon = createIcon("YoutubeOutlineIcon", SVGComponent, {
  "fileName": "abs-youtube.svg",
  "presentationName": "youtube",
  "style": "outline",
  "category": "brands"
});