import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><circle cx={9} cy={9} r={1.5} /><path d="M21.64 7.42 15.06 14l5.43 5.43C21.61 17.89 22 15.53 22 12c0-1.82-.1-3.34-.36-4.58M12 2C4 2 2 4 2 12c0 5.29.87 7.96 3.78 9.16L21.16 5.78C19.96 2.87 17.29 2 12 2M9.64 13.37c-.41.17-.87.17-1.28 0-1.74-.74-2.86-2.83-2.86-4.61S7.07 5.5 9 5.5s3.5 1.46 3.5 3.26-1.12 3.87-2.86 4.61m-2.22 8.27c1.24.26 2.76.36 4.58.36 3.53 0 5.89-.39 7.43-1.51L14 15.06z" /></svg>;


      export const MapLocationSolidIcon = createIcon("MapLocationSolidIcon", SVGComponent, {
  "fileName": "abs-map-location-solid.svg",
  "presentationName": "map-location",
  "style": "solid",
  "category": "location"
});