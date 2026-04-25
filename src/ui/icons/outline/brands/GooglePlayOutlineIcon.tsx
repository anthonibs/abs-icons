import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M2.94 3.45v17.11s.01.07.03.1.05.05.08.07c.03.01.07.02.11.01.04 0 .07-.02.1-.05l8.57-8.36c.18-.18.18-.48 0-.65L3.26 3.31s-.06-.04-.1-.05c-.04 0-.07 0-.11.01a.19.19 0 0 0-.11.17Zm12.52 5.41c.22-.21.18-.58-.1-.73L4.74 2.28c-.19-.11-.38.15-.22.3l8.44 8.07c.18.17.46.17.63 0zM4.51 21.42c-.16.15.02.41.22.31s10.62-5.86 10.62-5.86a.46.46 0 0 0 .1-.73l-1.87-1.79a.453.453 0 0 0-.63 0zm15.9-10.51-2.82-1.56a.454.454 0 0 0-.54.07l-2.34 2.24c-.19.18-.19.48 0 .66l2.34 2.24c.14.14.36.17.54.07l2.82-1.55c.86-.47.86-1.7 0-2.18Z" /></svg>;


      export const GooglePlayOutlineIcon = createIcon("GooglePlayOutlineIcon", SVGComponent, {
  "fileName": "abs-google-play.svg",
  "presentationName": "google-play",
  "style": "outline",
  "category": "brands"
});