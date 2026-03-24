import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 18 18" color="currentColor" width="1em" height="1em" {...props}><path d="M0 17.1V.9C0 .4.4 0 .9 0s.9.4.9.9v16.2c0 .5-.4.9-.9.9s-.9-.4-.9-.9m8.1 0v-2.45c0-.5.4-.9.9-.9s.9.4.9.9v2.45c0 .5-.4.9-.9.9s-.9-.4-.9-.9m8.1 0V.9c0-.5.4-.9.9-.9s.9.4.9.9v16.2c0 .5-.4.9-.9.9s-.9-.4-.9-.9m-8.1-6.88V7.77c0-.5.4-.9.9-.9s.9.4.9.9v2.45c0 .5-.4.9-.9.9s-.9-.4-.9-.9m0-6.88V.9c0-.5.4-.9.9-.9s.9.4.9.9v2.45c0 .5-.4.9-.9.9s-.9-.4-.9-.9Z" /></svg>;


      export const RoadAltOutlineIcon = createIcon("RoadAltOutlineIcon", SVGComponent, {
  "fileName": "abs-road-alt.svg",
  "presentationName": "road-alt",
  "style": "outline",
  "category": "location"
});