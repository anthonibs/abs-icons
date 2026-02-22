import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M15.94 2.48H8.31c-2.66 0-6.29 0-6.29 5.36v.92c0 .41.34.75.75.75s.75-.34.75-.75v-.92c0-3.86 2.01-3.86 4.79-3.86h7.63c3.49 0 4.56.9 4.56 3.86v7.38c0 3.03-.83 3.86-3.87 3.86h-.92c-.41 0-.75.34-.75.75s.34.75.75.75h.92c3.86 0 5.37-1.5 5.37-5.36V7.84c0-4.71-2.91-5.36-6.06-5.36" /><path d="M4.43 10.52a.74.74 0 0 0-.84.65c-.05.41.24.79.65.84 3.93.5 6.8 3.36 7.31 7.29.05.38.37.65.74.65h.1c.41-.05.7-.43.65-.84-.6-4.63-3.98-8-8.61-8.59" /><path d="M3.44 13.62c-.41-.05-.79.24-.84.65s.24.79.65.84c2.79.35 4.83 2.39 5.19 5.18.05.38.37.65.74.65h.1c.41-.05.7-.43.65-.84-.45-3.49-3-6.03-6.49-6.48m-.59 3.49a.74.74 0 0 0-.84.65c-.05.41.24.79.65.84 1.22.16 2.12 1.05 2.27 2.27.05.38.37.65.74.65h.1c.41-.05.7-.43.65-.84-.25-1.91-1.65-3.31-3.57-3.56Z" /></svg>;


      export const CastOutlineIcon = createIcon("CastOutlineIcon", SVGComponent, {
  "fileName": "abs-cast.svg",
  "presentationName": "cast",
  "style": "outline",
  "category": "general"
});