import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path fillRule="evenodd" d="M8.84 6.52c1.25 0 2.26 1.01 2.26 2.26s-1.02 2.26-2.26 2.26-2.26-1.01-2.26-2.26 1.01-2.26 2.26-2.26m-2.36 8.1c1.18-.56 2.14-.21 3.07.12.7.25 1.42.51 2.42.51.78 0 1.24-.69 1.9-1.82s1.48-2.53 3.14-2.53c2.3 0 3.73 1.45 4.7 2.52.02-.46.04-.93.04-1.43 0-7.2-2.55-9.75-9.75-9.75S2.25 4.8 2.25 12c0 2.68.36 4.72 1.18 6.22.52-1.02 1.64-2.94 3.05-3.6" /><path fillRule="evenodd" d="M21.23 15.13c-.15-.15-.3-.32-.47-.51-.88-.98-1.98-2.21-3.75-2.21-.74 0-1.19.68-1.84 1.79-.67 1.14-1.5 2.56-3.2 2.56-1.26 0-2.19-.33-2.93-.6-.88-.32-1.33-.46-1.92-.18-1.13.53-2.27 2.68-2.61 3.46-.02.05-.05.09-.08.13 1.54 1.54 3.97 2.18 7.58 2.18 5.96 0 8.73-1.76 9.51-6.44a.8.8 0 0 1-.27-.17Z" /></svg>;


      export const GalleryAltSolidIcon = createIcon("GalleryAltSolidIcon", SVGComponent, {
  "fileName": "abs-gallery-alt-solid.svg",
  "presentationName": "gallery-alt",
  "style": "solid",
  "category": "media"
});