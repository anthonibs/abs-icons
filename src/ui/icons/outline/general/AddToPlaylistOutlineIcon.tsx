import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 17.76 11.12" color="currentColor" width="1em" height="1em" {...props}><path d="M12.2 0H.83C.37 0 0 .37 0 .82s.37.82.83.82H12.2c.46 0 .83-.37.83-.82S12.66 0 12.2 0m0 3.79H.83c-.46 0-.83.37-.83.82s.37.83.83.83H12.2c.46 0 .83-.37.83-.83s-.37-.82-.83-.82m5.3 2.14a.815.815 0 0 0-1.14 0l-3.21 3.21-1.31-1.32a.85.85 0 0 0-.57-.23c-.22 0-.43.09-.6.25-.3.32-.3.83 0 1.15l1.9 1.89c.32.32.84.32 1.16 0l3.8-3.79c.31-.33.3-.85-.03-1.16M8.41 7.58H.83c-.46 0-.83.37-.83.82s.37.83.83.83h7.58c.46 0 .82-.37.82-.83s-.36-.82-.82-.82" /></svg>;


      export const AddToPlaylistOutlineIcon = createIcon("AddToPlaylistOutlineIcon", SVGComponent, {
  "fileName": "abs-add-to-playlist.svg",
  "presentationName": "add-to-playlist",
  "style": "outline",
  "category": "general"
});