import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 18 18" color="currentColor" width="1em" height="1em" {...props}><path d="M16.02 0H9.9v3.35c0 .49-.4.9-.9.9s-.9-.41-.9-.9V0H1.98C.89 0 0 .89 0 1.98v14.04C0 17.11.89 18 1.98 18H8.1v-3.35c0-.49.4-.9.9-.9s.9.41.9.9V18h6.12c1.09 0 1.98-.89 1.98-1.98V1.98C18 .89 17.11 0 16.02 0M9.9 10.22c0 .5-.4.9-.9.9s-.9-.4-.9-.9V7.78c0-.5.4-.9.9-.9s.9.4.9.9z" /></svg>;


      export const RoadAltSolidIcon = createIcon("RoadAltSolidIcon", SVGComponent, {
  "fileName": "abs-road-alt-solid.svg",
  "presentationName": "road-alt",
  "style": "solid",
  "category": "location"
});