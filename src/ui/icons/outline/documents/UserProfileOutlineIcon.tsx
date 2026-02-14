import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M17.59 3.2H6.41c-2.59 0-4.69 2.02-4.69 4.49v8.62c0 2.48 2.1 4.49 4.69 4.49H17.6c2.59 0 4.69-2.01 4.69-4.49V7.69c0-2.48-2.1-4.49-4.69-4.49Zm3.09 13.11c0 1.59-1.39 2.89-3.09 2.89H6.41c-1.7 0-3.09-1.3-3.09-2.89V7.69c0-1.59 1.39-2.89 3.09-2.89H17.6c1.7 0 3.09 1.3 3.09 2.89v8.62Z" /><path d="M7.7 12.8h.6a2.5 2.5 0 0 0 2.5-2.5v-.6a2.5 2.5 0 0 0-2.5-2.5h-.6a2.5 2.5 0 0 0-2.5 2.5v.6a2.5 2.5 0 0 0 2.5 2.5m-.9-3.1c0-.5.4-.9.9-.9h.6c.5 0 .9.4.9.9v.6c0 .5-.4.9-.9.9h-.6c-.5 0-.9-.4-.9-.9zM17 15.2H6c-.44 0-.8.36-.8.8s.36.8.8.8h11c.44 0 .8-.36.8-.8s-.36-.8-.8-.8m0-8h-3c-.44 0-.8.36-.8.8s.36.8.8.8h3c.44 0 .8-.36.8-.8s-.36-.8-.8-.8m0 4h-3c-.44 0-.8.36-.8.8s.36.8.8.8h3c.44 0 .8-.36.8-.8s-.36-.8-.8-.8" /></svg>;


      export const UserProfileOutlineIcon = createIcon("UserProfileOutlineIcon", SVGComponent, {
  "fileName": "abs-user-profile.svg",
  "presentationName": "user-profile",
  "style": "outline",
  "category": "documents"
});