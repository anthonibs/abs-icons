import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><circle cx={9.5} cy={6.5} r={4} /><ellipse cx={9.5} cy={17.5} rx={7} ry={4} /><path d="M21.5 17.5c0 1.55-1.79 2.83-4.07 2.99-.17.01-.27-.19-.16-.33.57-.74.94-1.63.94-2.65s-.37-1.92-.95-2.66c-.11-.14-.01-.34.16-.33 2.28.15 4.07 1.43 4.07 2.98ZM18.45 7.08A3.04 3.04 0 0 1 16 9.47c-.45.07-.89.04-1.29-.07-.12-.03-.17-.17-.12-.29.4-.78.63-1.67.63-2.61 0-1.03-.19-1.96-.66-2.81-.11-.2.58-.19.94-.19 1.84 0 3.3 1.67 2.95 3.58" /></svg>;


      export const UsersSolidIcon = createIcon("UsersSolidIcon", SVGComponent, {
  "fileName": "abs-users-solid.svg",
  "presentationName": "users",
  "style": "solid",
  "category": "general"
});