import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path fillRule="evenodd" d="M13.24 2.58c.52.1 1.28.36 1.64 1.09.8 1.6.14 3.13-.57 4.08-.46.62-1.06 1.2-1.75 1.56-.14.08-.44.21-.78.21-.63 0-1.26-.29-1.77-.65-.1.33-.19.69-.27 1.07-.16.73-.25 1.48-.26 2.23 1.13-.36 2.29-.33 3.28.24.75-.59 1.61-1.02 2.53-1.26 1.4-.37 3.07-.32 4.59.7 1.09.73 1.91 2.1 2.08 3.59.17 1.56-.37 3.27-2.01 4.58-1.16.93-2.92 1.28-4.54 1.41-1.68.14-3.45.04-4.83-.11-2.55-.28-4.51-1-5.88-1.73-.9-.48-2.13-1.15-2.52-2.17-.26-.69-.19-1.53-.13-2.26.09-.95.3-2.13.69-3.41.79-2.55 2.32-5.57 5.13-7.89.86-.71 2.3-1.15 3.51-1.3.62-.08 1.28-.09 1.85.02" /></svg>;


      export const FitnessSolidIcon = createIcon("FitnessSolidIcon", SVGComponent, {
  "fileName": "abs-fitness-solid.svg",
  "presentationName": "fitness",
  "style": "solid",
  "category": "general",
  "isNew": false
});