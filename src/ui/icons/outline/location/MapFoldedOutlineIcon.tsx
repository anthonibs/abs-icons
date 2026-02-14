import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M14.77 20.95c-.28 0-.55-.06-.8-.19l-4-2.01c-.47-.23-1.02-.24-1.49 0l-2.2 1.1c-.72.36-1.57.33-2.25-.1a2.29 2.29 0 0 1-1.1-1.97V7.01c0-.68.38-1.3.99-1.6l4.11-2.07c.75-.38 1.65-.38 2.4 0l3.47 1.74c.55.28 1.21.28 1.76 0l2.37-1.19c.66-.33 1.42-.3 2.05.09s1 1.06 1 1.79v10.32c0 1.17-.65 2.23-1.7 2.75l-3.8 1.91c-.25.13-.53.19-.8.19Zm-5.55-3.88c.49 0 .97.11 1.42.34l4 2.01c.08.04.17.04.26 0l3.8-1.91c.54-.27.87-.81.87-1.41V5.77c0-.31-.2-.46-.29-.52s-.32-.16-.59-.03l-2.37 1.19c-.97.49-2.13.49-3.1 0L9.75 4.67c-.33-.17-.72-.17-1.05 0L4.59 6.74c-.1.05-.16.15-.16.27v10.77c0 .29.14.54.39.69s.54.16.79.03l2.2-1.1c.44-.22.93-.34 1.42-.34Zm5.55.51c-.41 0-.75-.34-.75-.75V9.15c0-.41.34-.75.75-.75s.75.34.75.75v7.68c0 .41-.34.75-.75.75m-5.55-2.09c-.41 0-.75-.34-.75-.75V7.06c0-.41.34-.75.75-.75s.75.34.75.75v7.68c0 .41-.34.75-.75.75" /></svg>;


      export const MapFoldedOutlineIcon = createIcon("MapFoldedOutlineIcon", SVGComponent, {
  "fileName": "abs-map-folded.svg",
  "presentationName": "map-folded",
  "style": "outline",
  "category": "location"
});