import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><circle cx={10.92} cy={6.5} r={4} /><path fillRule="evenodd" d="M15.76 19c0-.41.33-.75.75-.75h2.82a.749.749 0 1 1 0 1.5h-2.82c-.42 0-.75-.34-.75-.75" /><path d="M17.8 16.75h-1.29c-1.25 0-2.25 1.01-2.25 2.25 0 .69.31 1.31.8 1.73-1.16.49-2.59.77-4.14.77-3.87 0-7-1.79-7-4s3.13-4 7-4c3.42 0 6.26 1.4 6.88 3.25" /></svg>;


      export const UserRemoveSolidIcon = createIcon("UserRemoveSolidIcon", SVGComponent, {
  "fileName": "abs-user-remove-solid.svg",
  "presentationName": "user-remove",
  "style": "solid",
  "category": "users"
});