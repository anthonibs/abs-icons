import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><g><path d="M14.5 2.92h-5c-4.61 0-6.58 1.97-6.58 6.58v5c0 4.61 1.97 6.58 6.58 6.58h5c4.62 0 6.58-1.97 6.58-6.58v-5c0-4.61-1.97-6.58-6.58-6.58M4.82 17.29c-.28-.72-.4-1.64-.4-2.79v-5c0-3.75 1.33-5.08 5.08-5.08h5c1.14 0 2.06.13 2.79.4L4.83 17.28ZM18.55 5.68c.72.81 1.03 2.04 1.03 3.83v5c0 3.75-1.33 5.08-5.08 5.08h-5c-1.79 0-3.02-.31-3.83-1.03z" /><path d="M13.27 15.67h1.38V17c0 .41.34.75.75.75s.75-.34.75-.75v-1.33h1.28c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-1.28v-1.33c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.33h-1.38c-.41 0-.75.34-.75.75s.34.75.75.75m-2.5-8.17H6.6c-.41 0-.75.34-.75.75s.34.75.75.75h4.17c.41 0 .75-.34.75-.75s-.34-.75-.75-.75" /></g></svg>;


      export const ComputingOutlineIcon = createIcon("ComputingOutlineIcon", SVGComponent, {
  "fileName": "abs-computing.svg",
  "presentationName": "computing",
  "style": "outline",
  "category": "devices"
});