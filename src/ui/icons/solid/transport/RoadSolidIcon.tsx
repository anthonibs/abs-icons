import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path fillRule="evenodd" d="M11.4 7.5h1.2c.22 0 .4-.18.4-.4V3.4c0-.22.18-.4.4-.4h1.33c1.03 0 1.93.7 2.17 1.7l4.06 14.9q.03.135.03.27c0 .62-.5 1.12-1.12 1.12h-6.51c-.2 0-.37-.17-.37-.37v-3.73c0-.22-.18-.4-.4-.4h-1.2c-.22 0-.4.18-.4.4v3.73c0 .2-.17.37-.37.37H4.11q-.135 0-.27-.03c-.6-.15-.97-.76-.82-1.36L7.09 4.7C7.34 3.7 8.24 3 9.26 3h1.33c.22 0 .4.18.4.4v3.7c0 .22.18.4.4.4Zm1.2 2.25h-1.2c-.22 0-.4.18-.4.4v3.7c0 .22.18.4.4.4h1.2c.22 0 .4-.18.4-.4v-3.7c0-.22-.18-.4-.4-.4" /></svg>;


      export const RoadSolidIcon = createIcon("RoadSolidIcon", SVGComponent, {
  "fileName": "abs-road-solid.svg",
  "presentationName": "road",
  "style": "solid",
  "category": "transport"
});