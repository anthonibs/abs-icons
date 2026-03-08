import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M11.31 11.27c-2.56 0-4.63-2.08-4.63-4.63s2.08-4.63 4.63-4.63 4.63 2.08 4.63 4.63-2.08 4.63-4.63 4.63m0-7.8a3.171 3.171 0 0 0 0 6.34 3.171 3.171 0 0 0 0-6.34m0 18.53c-4.24 0-7.56-2.04-7.56-4.63s3.32-4.63 7.56-4.63c2.67 0 5.09.82 6.46 2.19.29.29.29.75 0 1.04s-.75.29-1.03 0c-1.09-1.09-3.17-1.76-5.42-1.76-3.31 0-6.1 1.45-6.1 3.17s2.79 3.17 6.1 3.17c1.16 0 2.29-.18 3.25-.51.38-.13.8.07.93.45s-.07.8-.45.93c-1.12.39-2.41.59-3.73.59Z" /><path d="M19.52 19.56h-2.75c-.4 0-.73-.33-.73-.73s.33-.73.73-.73h2.75c.4 0 .73.33.73.73s-.33.73-.73.73" /></svg>;


      export const UserRemoveOutlineIcon = createIcon("UserRemoveOutlineIcon", SVGComponent, {
  "fileName": "abs-user-remove.svg",
  "presentationName": "user-remove",
  "style": "outline",
  "category": "users"
});